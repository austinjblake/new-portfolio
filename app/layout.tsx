import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

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
			</head>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<main className='flex-grow container mx-auto px-4 py-8'>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
