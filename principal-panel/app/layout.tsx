import { Open_Sans } from 'next/font/google';

import { Layout } from '../components/Layout/Layout';

import '../styles/globals.scss'; 
import '../styles/variables.scss'
import '../styles/scrollbar.scss'; 

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	style: ['normal', 'italic'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={openSans.className}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
