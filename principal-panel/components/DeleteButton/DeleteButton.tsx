import Image from 'next/image';
import trashIcon from '../../icons/trash-icon.svg';

import { editDeleteButtonProps } from '../../types/types';

export function DeleteButton({ onClick }: editDeleteButtonProps) {
	return (
		<button onClick={onClick} type="button">
			<Image src={trashIcon} alt='Delete icon' aria-label='Delete button' />
		</button>
	);
}
