import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { PhoneIcon } from '../../icons/PhoneIcon';
import { ParentAndStudentFormFieldsProps } from '../../types/principalPanelProps';
import { EmailInput } from '../LoginInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { TextInput } from '../TextInput/TextInput';
import styles from './ParentFormFields.module.scss';

export function ParentFormFields({
	formValues,
	handleInputChange,
	isPasswordVisible,
	togglePasswordVisibility,
}: ParentAndStudentFormFieldsProps) {
	return (
		<>
			<h2 className={styles.sectionTitle}>Parent data</h2>

			<div className={styles.required}>
				<label htmlFor='parentFirstName'>Name</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentFirstName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='parentFirstName'
					name='parentFirstName'
					placeholder='ex. John'
					defaultValue={formValues.parentFirstName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='parentLastName'>Surname</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentLastName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='parentLastName'
					name='parentLastName'
					placeholder='ex. Doe'
					defaultValue={formValues.parentLastName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='parentEmail'>E-mail</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentEmail' className={styles.iconContainer}>
					<EmailIcon className={styles.inputIcon} />
				</label>
				<EmailInput
					id='parentEmail'
					name='parentEmail'
					placeholder='ex. parent@xjournal.com'
					defaultValue={formValues.parentEmail}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='parentPhone'>Phone number</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentPhone' className={styles.iconContainer}>
					<PhoneIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='parentPhone'
					name='parentPhone'
					placeholder='ex. +1 123456789'
					defaultValue={formValues.parentPhone}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				<label htmlFor='parentPassword'>Password</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentPassword' className={styles.iconContainer}>
					<LockIcon className={styles.inputIcon} />
				</label>
				<PasswordInput
					id='parentPassword'
					name='parentPassword'
					placeholder='Set parent password'
					defaultValue={formValues.parentPassword}
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
		</>
	);
}
