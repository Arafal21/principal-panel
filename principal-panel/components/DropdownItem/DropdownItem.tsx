'use client';

import styles from './DropdownItem.module.scss';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import { DropdownItemProps } from '../../types/types';

export function DropdownItem({ data, schoolClass, isOpen, setIsOpen, handleSelect, option }: DropdownItemProps) {
	return (
		<div className={styles.dropdown}>
			<button
			type="button"
				className={`${styles.select} ${isOpen ? styles.selectClicked : null} ${
					isOpen ? styles.activeBorder : null
				}`}
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? 'Close dropdown menu' : 'Open dropdown menu'}>
				<span className={styles.selected}>
					<span className={styles.icon}>{option}</span>

					{schoolClass}
				</span>
				<DropdownButton isOpen={isOpen} />
			</button>

			{isOpen && (
				<ul className={styles.menu}>
					{data.map((option) => (
						<li
							key={option}
							role='menuitem'
							tabIndex={0}
							className={`${styles.menuItem} ${option === schoolClass ? styles.active : null}`}
							onClick={() => handleSelect(option)}>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
