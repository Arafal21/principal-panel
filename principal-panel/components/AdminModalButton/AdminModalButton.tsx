import styles from './AdminModalButton.module.scss';
import { useFormStatus } from 'react-dom';

interface AdminModalButtonProps {
	isFormValid: boolean;
	currentData: string;
}

export function AdminModalButton({ isFormValid, currentData }: AdminModalButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button className={isFormValid ? styles.buttonReady : styles.buttonNoReady} type='submit'>
			{pending ? 'Saving...' : currentData ? 'SAVE' : 'POST'}
		</button>
	);
}
