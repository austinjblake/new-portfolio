'use client';

import { ModeToggle } from './ModeToggle';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
	{ name: 'Home', section: 'home' },
	{ name: 'Projects', section: 'projects' },
	{ name: 'Blog', section: 'blog' },
	{ name: 'About', section: 'about' },
];

export default function Header() {
	const router = useRouter();
	const pathname = usePathname();

	const handleNavigation = (section: string) => {
		if (pathname === '/') {
			if (section === 'blog' || section === 'projects') {
				window.dispatchEvent(new CustomEvent('changeTab', { detail: section }));
				// Wait for tab change animation to complete before scrolling
				setTimeout(() => {
					const element = document.getElementById(section);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
					}
				}, 300);
			} else {
				const element = document.getElementById(section);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		} else {
			router.push(`/?section=${section}`);
		}
	};

	return (
		<header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<span
					className='text-2xl font-bold cursor-pointer'
					onClick={() => handleNavigation('home')}
				>
					austinjblake.dev
				</span>
				<nav className='flex items-center space-x-4'>
					{navItems.map((item) => (
						<span
							key={item.section}
							onClick={() => handleNavigation(item.section)}
							className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer`}
						>
							{item.name}
						</span>
					))}
					<ModeToggle />
				</nav>
			</div>
		</header>
	);
}
