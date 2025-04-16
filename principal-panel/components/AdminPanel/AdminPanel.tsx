'use server';

import styles from './AdminPanel.module.scss';

import { AdminFilterUsersButtons } from '../AdminFilterUsersButtons/AdminFilterUsersButtons';
import { TableOfUsersAdmin } from '../TableOfUsersAdmin/TableOfUsersAdmin';
import { AdminActionsBar } from '../AdminActionsBar/AdminActionsBar';
import { SearchProvider } from '../../contexts/SearchContext';
import { SelectedUserAdminProvider } from '../../contexts/SelectedUserAdminContext';
import { fetchUserAmount } from '../../api/adminApi';
import { Suspense } from 'react';
import { LoadingThreeDotsJumping } from '../MotionDev/LoadingThreeDotsJumping';

interface AdminPanelProps {
	filter: string;
}

export async function AdminPanel({ filter }: AdminPanelProps) {
	const userAmount = await fetchUserAmount();

	return (
		<SearchProvider>
			<SelectedUserAdminProvider>
				<div className={styles.adminPanelContainer}>
					<div className={styles.usersActionRow}>
						<AdminActionsBar />
					</div>
					<div className={styles.line}></div>
					<div className={styles.controlButtons}>
						<AdminFilterUsersButtons userAmount={userAmount} />
					</div>
					<div>
						<Suspense fallback={<LoadingThreeDotsJumping />}>
							<TableOfUsersAdmin filter={filter} />
						</Suspense>
					</div>
				</div>
			</SelectedUserAdminProvider>
		</SearchProvider>
	);
}
