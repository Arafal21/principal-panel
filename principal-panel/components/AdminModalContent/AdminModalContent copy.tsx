import styles from './AdminModalContent.module.scss';
import { use, useActionState, useEffect, useState } from 'react';

import { SubjectContext } from '../../contexts/SubjectContext';
import { SchoolClassContext } from '../../contexts/SchoolClassContext';
import { useSelectedUserAdmin } from '../../contexts/SelectedUserAdminContext';

import { createUser, deleteUser, updateUser } from '../../api/adminApi';

import { UserTypeRadioGroup } from '../UserTypeRadioGroup/UserTypeRadioGroup';
import { TeacherFormFields } from '../TeacherFormFields/TeacherFormFields';
import { AdminModalButton } from '../AdminModalButton/AdminModalButton';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { CloseButton } from '../CloseButton/CloseButton';
import { ParentFormFields } from '../ParentFormFields/ParentFormFields';
import { StudentFormFields } from '../StudentFormFields/StudentFormFields';
import { ModalAddNewUserAdminProps, ParentAndStudentData } from '../../types/principalPanelProps';
import { defaultUsersFormValues } from '../../constants/defaultAdminFormValues';
import { emailRegex } from '../../constants/constans';

export function AdminModalContent({ setIsModalVisible }: ModalAddNewUserAdminProps) {
	const { subject } = use(SubjectContext);
	const { schoolClass } = use(SchoolClassContext);
	const { selectedUser } = useSelectedUserAdmin();

	const initialUserType = selectedUser ? selectedUser.role.toLowerCase() : 'teacher';

	const [state, formAction] = useActionState(handleSubmit, {
		userType: initialUserType,
		...defaultUsersFormValues,
	});

	const [formValues, setFormValues] = useState({
		userType: state?.userType || 'teacher',
		...defaultUsersFormValues,
	});

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	useEffect(() => {
		if (selectedUser) {
			const role = selectedUser.role.toLowerCase();

			if (role === 'teacher') {
				setFormValues((prev) => ({
					...prev,
					userType: 'teacher',
					teacherFirstName: selectedUser.firstName,
					teacherLastName: selectedUser.lastName,
					teacherEmail: selectedUser.email,
					teacherPhone: selectedUser.phoneNumber,
				}));
			}

			if (role === 'parent') {
				setFormValues((prev) => ({
					...prev,
					userType: 'parent',
					parentFirstName: selectedUser.firstName,
					parentLastName: selectedUser.lastName,
					parentEmail: selectedUser.email,
					parentPhone: selectedUser.phoneNumber,
				}));
			}
			if (role === 'student') {
				setFormValues((prev) => ({
					...prev,
					userType: 'student',
					studentFirstName: selectedUser.firstName,
					studentLastName: selectedUser.lastName,
					studentEmail: selectedUser.email,
					studentPhone: selectedUser.phoneNumber,
				}));
			}
		} else {
			setFormValues({
				userType: 'teacher',
				...defaultUsersFormValues,
			});
		}
	}, [selectedUser]);

	async function handleSubmit(_previousState: any, formData: FormData) {
		const formUserType = formData.get('userType');
		const userType = selectedUser ? formUserType || selectedUser.role.toLowerCase() : formUserType;

		if (state.teacherFirstName.length <= 1) {
			state.teacherFirstNameError = true;
		}

		if (state.teacherLastName.length <= 1) {
			state.teacherLastNameError = true;
		}

		if (!emailRegex.test(state.teacherEmail)) {
			state.teacherEmailError = true;
		}

		if (state.teacherPhone.length <= 7 || state.teacherPhone.length > 16) {
			state.teacherPhoneError = true;
		}

		if (state.teacherPassword.length <= 5) {
			state.teacherPasswordError = true;
		}

		if (
			state.teacherFirstNameError ||
			state.teacherLastNameError ||
			state.teacherEmailError ||
			state.teacherPhoneError ||
			state.teacherPasswordError
		) {
			return state;
		} else {
			try {
				let response;

				if (userType === 'teacher') {
					const submittedTeacherData = {
						subject: subject,
						firstName: formData.get('teacherFirstName') as string,
						lastName: formData.get('teacherLastName') as string,
						email: formData.get('teacherEmail') as string,
						phoneNumber: formData.get('teacherPhone') as string,
						password: formData.get('teacherPassword') as string,
					};

					if (selectedUser) {
						response = await updateUser(submittedTeacherData, selectedUser._id, 'teacher');
					} else {
						response = await createUser(submittedTeacherData, 'teacher');
					}

					setIsModalVisible(false);
					return response;
				}

				if (userType === 'parentAndStudent') {
					const submittedParentStudentData: ParentAndStudentData = {
						userType: 'parentAndStudent',
						parent: {
							firstName: formData.get('parentFirstName') as string,
							lastName: formData.get('parentLastName') as string,
							email: formData.get('parentEmail') as string,
							phoneNumber: formData.get('parentPhone') as string,
							password: formData.get('parentPassword') as string,
						},
						student: {
							firstName: formData.get('studentFirstName') as string,
							lastName: formData.get('studentLastName') as string,
							email: formData.get('studentEmail') as string,
							phoneNumber: formData.get('studentPhone') as string,
							password: formData.get('studentPassword') as string,
							class: schoolClass,
						},
					};

					if (selectedUser) {
						response = await updateUser(submittedParentStudentData, selectedUser._id, 'parentAndStudent');
					} else {
						response = await createUser(submittedParentStudentData, 'parentAndStudent');
					}

					setIsModalVisible(false);
					return response;
				}

				if (userType === 'parent') {
					const submittedParentData = {
						firstName: formData.get('parentFirstName') as string,
						lastName: formData.get('parentLastName') as string,
						email: formData.get('parentEmail') as string,
						phoneNumber: formData.get('parentPhone') as string,
						password: formData.get('parentPassword') as string,
					};

					if (selectedUser) {
						response = await updateUser(submittedParentData, selectedUser._id, 'parent');
						setIsModalVisible(false);
						return response;
					}
				}

				if (userType === 'student') {
					const submittedStudentData = {
						class: schoolClass,
						firstName: formData.get('studentFirstName') as string,
						lastName: formData.get('studentLastName') as string,
						email: formData.get('studentEmail') as string,
						phoneNumber: formData.get('studentPhone') as string,
						password: formData.get('studentPassword') as string,
					};

					if (selectedUser) {
						response = await updateUser(submittedStudentData, selectedUser._id, 'student');
						setIsModalVisible(false);
						return response;
					}
				}
			} catch (error) {
				state.formError = true;
				return state;
			}
		}
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormValues((prev) => ({ ...prev, [name]: value }));
	}

	const onDelete = async () => {
		try {
			await deleteUser(selectedUser._id);
			setIsModalVisible(false);
		} catch (error) {
			alert('User deletion failed. Please wait before having another operation');
		}
	};

	const modalTitle = selectedUser ? 'Edit User' : 'New user';

	const isFormValid =
		formValues.teacherFirstName.trim().length > 0 &&
		formValues.teacherLastName.trim().length > 0 &&
		emailRegex.test(formValues.teacherEmail) &&
		formValues.teacherPhone.trim().length > 7 &&
		formValues.teacherPassword.trim().length > 5;

	return (
		<div className={styles.modalContent}>
			<div className={styles.actionMenu}>
				{selectedUser ? <DeleteButton onClick={onDelete} /> : <span className={styles.blank}></span>}
				<p className={styles.heading}>{modalTitle}</p>
				<CloseButton onClick={() => setIsModalVisible(false)} />
			</div>

			<form action={formAction} className={styles.form}>
				{!selectedUser && <UserTypeRadioGroup userType={formValues.userType} onChange={handleInputChange} />}

				{state.formError && <p className={styles.error}>Backend error. Please try again</p>}

				{/* For add new user/edit */}
				{formValues.userType === 'teacher' && (
					<TeacherFormFields
						state={state}
						formValues={formValues}
						handleInputChange={handleInputChange}
						isPasswordVisible={isPasswordVisible}
						togglePasswordVisibility={togglePasswordVisibility}
					/>
				)}

				{/* For add new user */}
				{formValues.userType === 'parentAndStudent' && (
					<div className={styles.parentAndStudentContainer}>
						<ParentFormFields
							formValues={formValues}
							handleInputChange={handleInputChange}
							isPasswordVisible={isPasswordVisible}
							togglePasswordVisibility={togglePasswordVisibility}
						/>

						<StudentFormFields
							formValues={formValues}
							handleInputChange={handleInputChange}
							isPasswordVisible={isPasswordVisible}
							togglePasswordVisibility={togglePasswordVisibility}
						/>
					</div>
				)}

				{/* For edit */}
				{formValues.userType === 'parent' && (
					<div className={styles.parentAndStudentContainer}>
						<ParentFormFields
							formValues={formValues}
							handleInputChange={handleInputChange}
							isPasswordVisible={isPasswordVisible}
							togglePasswordVisibility={togglePasswordVisibility}
						/>
					</div>
				)}

				{/* For edit */}
				{formValues.userType === 'student' && (
					<StudentFormFields
						formValues={formValues}
						handleInputChange={handleInputChange}
						isPasswordVisible={isPasswordVisible}
						togglePasswordVisibility={togglePasswordVisibility}
					/>
				)}

				<div className={styles.btnContainer}>
					<AdminModalButton isFormValid={isFormValid} currentData={modalTitle} />
				</div>
			</form>
		</div>
	);
}
