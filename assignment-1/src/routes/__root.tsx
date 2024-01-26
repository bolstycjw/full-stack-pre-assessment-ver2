import { Outlet, RootRoute } from '@tanstack/react-router';
import Header from '../Header';

export const Route = new RootRoute({
	component: () => (
		<>
			<Header />
			<Outlet />
		</>
	)
});
