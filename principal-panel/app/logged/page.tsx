import { redirect } from 'next/navigation';


export default async function RedirectRouteLogged() {
	redirect('/logged/announcements');
}
