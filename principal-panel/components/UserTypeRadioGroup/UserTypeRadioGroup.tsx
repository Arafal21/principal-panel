import styles from './UserTypeRadioGroup.module.scss';

import { UserType } from '../../types/principalPanelProps';

interface UserTypeRadioGroupProps {
	userType: UserType;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UserTypeRadioGroup({ userType, onChange }: UserTypeRadioGroupProps) {
	return (
		<div className={styles.radioGroup}>
			<p className={styles.heading}>User type</p>
			<label className={styles.radioItem}>
				<input
					type='radio'
					name='userType'
					value='teacher'
					checked={userType === 'teacher'}
					onChange={onChange}
				/>
				<span className={styles.radioCustom}></span>
				Teacher
			</label>

			<label className={styles.radioItem}>
				<input
					type='radio'
					name='userType'
					value='parentAndStudent'
					checked={userType === 'parentAndStudent'}
					onChange={onChange}
				/>
				<span className={styles.radioCustom}></span>
				Parent &amp; Student
			</label>
		</div>
	);
}
