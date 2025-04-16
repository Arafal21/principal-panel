import { LayoutForLoggedIn } from '../../components/LayoutForLoggedIn/LayoutForLoggedIn';

export default function RootLayoutForLoggedIn({ children }: { children: React.ReactNode }) {
	return (
		<>
			<LayoutForLoggedIn>{children}</LayoutForLoggedIn>
		</>
	);
}
