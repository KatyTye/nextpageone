import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<h1>Dashboard Menu</h1>
			<section>{children}</section>
		</div>
	);
}