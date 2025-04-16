import styles from './ModalAnimation.module.scss';

interface ModalAnimationProps {
	children: React.ReactNode;
	isModalVisible: boolean;
}

export function ModalAnimation({ children, isModalVisible }: ModalAnimationProps) {
	return (
		<div className={`${styles.modalContainer} ${isModalVisible ? styles.active : null}`}>
			<span className={styles.overlay}></span>
			<div className={styles.modalOpened}>{children}</div>
		</div>
	);
}
