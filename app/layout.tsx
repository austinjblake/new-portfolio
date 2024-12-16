import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ThemeProvider } from '../components/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Your Name - Software Engineer',
	description:
		'Personal portfolio and blog of a software engineer specializing in JavaScript, React, Node.js, AI, and crypto.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link
					rel='stylesheet'
					href='https://unpkg.com/framer-motion@5.0.0/dist/framer-motion.css'
				/>
				<Analytics />
			</head>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<Header />
					<div className='flex-grow'>
						<div className='container mx-auto px-4 py-8'>
							<div className='flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))]'>
								{children}
							</div>
						</div>
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
