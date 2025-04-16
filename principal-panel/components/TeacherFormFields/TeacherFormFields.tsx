import styles from './TeacherFormFields.module.scss';

import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { PhoneIcon } from '../../icons/PhoneIcon';
import { DropdownMenuSelectSubject } from '../DropdownMenuSelectSubject/DropdownMenuSelectSubject';
import { EmailInput } from '../LoginInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { TextInput } from '../TextInput/TextInput';
import { TeacherFormFieldsProps } from '../../types/principalPanelProps';

export function TeacherFormFields({
	formValues,
	handleInputChange,
	isPasswordVisible,
	togglePasswordVisibility,
}: TeacherFormFieldsProps) {
	return (
		<>
			<div className={styles.required}>
				<label htmlFor='teacherFirstName'>Name</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherFirstName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='teacherFirstName'
					name='teacherFirstName'
					placeholder='ex. John'
					defaultValue={formValues.teacherFirstName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherLastName'>Surname</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherLastName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='teacherLastName'
					name='teacherLastName'
					placeholder='ex. Doe'
					defaultValue={formValues.teacherLastName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherEmail'>E-mail</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherEmail' className={styles.iconContainer}>
					<EmailIcon className={styles.inputIcon} />
				</label>
				<EmailInput
					id='teacherEmail'
					name='teacherEmail'
					placeholder='ex. johndoe@xjournal.com'
					defaultValue={formValues.teacherEmail}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherPhone'>Phone number</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherPhone' className={styles.iconContainer}>
					<PhoneIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='teacherPhone'
					name='teacherPhone'
					placeholder='ex. +1 123456789'
					defaultValue={formValues.teacherPhone}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherPassword'>Password</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherPassword' className={styles.iconContainer}>
					<LockIcon className={styles.inputIcon} />
				</label>
				<PasswordInput
					id='teacherPassword'
					name='teacherPassword'
					placeholder='Set the user password'
					defaultValue={formValues.teacherPassword}
					onChange={handleInputChange}
					type={isPasswordVisible ? 'text' : 'password'}
				/>
				<span
					className={styles.toggleVisibility}
					aria-label='show or hide password button'
					tabIndex={0}
					onClick={togglePasswordVisibility}>
					{isPasswordVisible ? '🔓' : '🔒'}
				</span>
			</div>
			<div className={styles.required}>
				<label htmlFor='subject'>Subject</label>
			</div>
			<DropdownMenuSelectSubject />
		</>
	);
}
