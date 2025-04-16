import { AdminPanel } from '../../../components/AdminPanel/AdminPanel';
import { BackgroundMainContentDesktop } from '../../../components/BackgroundMainContentDesktop/BackgroundMainContentDesktop';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';
import { MVPInformationMobile } from '../../../components/MVPInformation/MVPInformationMobile';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';

interface PrincipalPanelPageProps {
	filter: string;
}

export function PrincipalPanelPage({ filter }: PrincipalPanelPageProps) {
	return (
		<>
			<Header isFullHeader={false} isMobileHeaderShowed={false} />
			<WrapperLogged white300OnBgMobile={false} paddingOnMobile={true}>
				<BackgroundMainContentDesktop padding={true}>
					<main>
						<H1Company />
						<MVPInformationMobile />
						<AdminPanel filter={filter} />
					</main>
				</BackgroundMainContentDesktop>
			</WrapperLogged>
		</>
	);
}
