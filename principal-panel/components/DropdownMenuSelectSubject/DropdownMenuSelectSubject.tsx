'use client';

import { useState } from 'react';
import { use } from 'react';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { SubjectContext } from '../../contexts/SubjectContext';
import { BookIcon } from '../../icons/BookIcon';
import { subjects } from '../../constants/constans';

export function DropdownMenuSelectSubject() {
	const { subject, setSubject } = use(SubjectContext);

	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option: string) => {
		setSubject(option);
		setIsOpen(false);
	};

	return (
		<DropdownItem
			data={subjects}
			schoolClass={subject}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			handleSelect={handleSelect}
			option={<BookIcon isActive={isOpen} />}
		/>
	);
}
