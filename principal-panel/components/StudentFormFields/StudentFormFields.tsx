import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { PhoneIcon } from '../../icons/PhoneIcon';
import { ParentAndStudentFormFieldsProps } from '../../types/principalPanelProps';
import { DropdownMenuSelectClass } from '../DropdownMenuSelectClass/DropdownMenuSelectClass';
import { EmailInput } from '../LoginInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { TextInput } from '../TextInput/TextInput';
import styles from './StudentFormFields.module.scss';

export function StudentFormFields({
	formValues,
	handleInputChange,
	isPasswordVisible,
	togglePasswordVisibility,
}: ParentAndStudentFormFieldsProps) {
	return (
		<>
			<h2 className={styles.sectionTitle}>Student data</h2>

			<div className={styles.required}>
				<label htmlFor='studentFirstName'>Name</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentFirstName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='studentFirstName'
					name='studentFirstName'
					placeholder='ex. Jack'
					defaultValue={formValues.studentFirstName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='studentLastName'>Surname</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentLastName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='studentLastName'
					name='studentLastName'
					placeholder='ex. Doe'
					defaultValue={formValues.studentLastName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='studentEmail'>E-mail</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentEmail' className={styles.iconContainer}>
					<EmailIcon className={styles.inputIcon} />
				</label>
				<EmailInput
					id='studentEmail'
					name='studentEmail'
					placeholder='ex. student@xjournal.com'
					defaultValue={formValues.studentEmail}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='studentPhone'>Phone number</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentPhone' className={styles.iconContainer}>
					<PhoneIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='studentPhone'
					name='studentPhone'
					placeholder='ex. +1 987654321'
					defaultValue={formValues.studentPhone}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='studentPassword'>Password</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentPassword' className={styles.iconContainer}>
					<LockIcon className={styles.inputIcon} />
				</label>
				<PasswordInput
					id='studentPassword'
					name='studentPassword'
					placeholder='Set student password'
					defaultValue={formValues.studentPassword}
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
				<label htmlFor='class'>Class</label>
			</div>
			<DropdownMenuSelectClass />
		</>
	);
}
