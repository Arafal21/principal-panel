import { PrincipalPanelPage } from '../../_views/PrincipalPanelPage/PrincipalPanelPage';

export const metadata = {
	title: 'Admin Panel - Update People Records with XJournal',
	description:
		'As a director, easily manage and update student, teacher, and staff records. XJournal offers a streamlined process for maintaining accurate user information.',
};

export default function PrincipalPanelRoute() {
	return <PrincipalPanelPage filter='all' />;
}
