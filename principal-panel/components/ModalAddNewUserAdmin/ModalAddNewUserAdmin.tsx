'use client';

import { SubjectContextProvider } from '../../contexts/SubjectContext';
import { SchoolClassContextProvider } from '../../contexts/SchoolClassContext';
import { AdminModalContent } from '../AdminModalContent/AdminModalContent';
import { useSelectedUserAdmin } from '../../contexts/SelectedUserAdminContext';
import { ModalAnimation } from '../ModalAnimation/ModalAnimation';

export function ModalAddNewUserAdmin() {
	const { isModalVisible, setIsModalVisible } = useSelectedUserAdmin();

	return (
		<SubjectContextProvider>
			<SchoolClassContextProvider>
				<ModalAnimation isModalVisible={isModalVisible}>
					<AdminModalContent setIsModalVisible={setIsModalVisible} />
				</ModalAnimation>
			</SchoolClassContextProvider>
		</SubjectContextProvider>
	);
}
