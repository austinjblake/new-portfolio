'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '../components/ProjectCard';
import BlogPost from '../components/BlogPost';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const projects = {
	webdev: [
		{
			title: 'Ranger Randomizer',
			description:
				'Static SPA to select game components for Heroes of the Grid. Optimized for mobile and quick loading times.',
			technologies: ['React', 'Vite', 'Netlify'],
			link: 'https://github.com/yourusername/ecommerce-platform',
			slug: 'ranger-randomizer',
			githubUrl: 'https://github.com/austinjblake/ranger-randomizer',
			liveUrl: 'https://www.rangerrandomizer.com/',
		},
		{
			title: 'Rangers United',
			description:
				'A board game meetup app to find and build local communities. Features real-time chat for coordination, geolocation, and FLGS search.',
			technologies: [
				'Next.js',
				'Tailwind CSS',
				'Vercel',
				'Supabase',
				'Postgis',
			],
			link: 'https://github.com/yourusername/task-management-app',
			slug: 'rangers-united',
			githubUrl: 'https://github.com/austinjblake/rangers-united',
			liveUrl: 'https://www.rangersunited.com/',
		},
	],
	ai: [
		{
			title: 'Coming Soon',
			description: 'Coming Soon',
			technologies: [],
			link: '',
			slug: '',
		},
	],
	crypto: [
		{
			title: 'Coming Soon',
			description: 'Coming Soon',
			technologies: [],
			link: '',
			slug: '',
		},
	],
};

const blogPosts = [
	{
		title: 'Vercel Staging Environment with Clerk/Stripe Webhooks',
		description:
			'How to setup a staging environment on Vercel with consistent URL for Clerk and Stripe webhook testing',
		date: 'Dec 14, 2024',
		slug: 'vercel-staging-environment-with-clerk-stripe-webhooks',
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState('projects');
	const [activeProjectType, setActiveProjectType] = useState('webdev');
	const [mounted, setMounted] = useState(false);
	const searchParams = useSearchParams();

	useEffect(() => {
		setMounted(true);
		const section = searchParams.get('section');
		if (section) {
			if (section === 'blog' || section === 'projects') {
				setActiveTab(section);
				// Wait for both page load and tab change animation
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
		}

		const handleTabChange = (e: CustomEvent) => {
			setActiveTab(e.detail);
		};

		window.addEventListener('changeTab', handleTabChange as EventListener);
		return () =>
			window.removeEventListener('changeTab', handleTabChange as EventListener);
	}, [searchParams]);

	return (
		<div className='flex flex-col min-h-screen'>
			<div
				id='home'
				className='flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))]'
			>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-4xl font-bold mb-4 text-center'
				>
					Hi, I&apos;m Austin
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='text-xl mb-8 text-center max-w-2xl'
				>
					I&apos;m a software engineer specializing in JavaScript, TypeScript,
					React, Node.js, and Next.js. I also work on exciting projects in AI
					and crypto.
				</motion.p>
			</div>
			{mounted && (
				<div id='projects-and-blog' className='mb-16'>
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className='w-full max-w-4xl mx-auto'
					>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger value='projects'>Projects</TabsTrigger>
							<TabsTrigger value='blog'>Blog</TabsTrigger>
						</TabsList>
						<AnimatePresence mode='wait'>
							<motion.div
								key={activeTab}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className='w-full'
							>
								<TabsContent value='projects' className='mt-6'>
									<div id='projects'>
										<Tabs
											defaultValue='webdev'
											onValueChange={setActiveProjectType}
										>
											<TabsList className='mb-4'>
												<TabsTrigger value='webdev'>Web Dev</TabsTrigger>
												<TabsTrigger value='ai'>AI</TabsTrigger>
												<TabsTrigger value='crypto'>Crypto</TabsTrigger>
											</TabsList>
											<AnimatePresence mode='wait'>
												<motion.div
													key={activeProjectType}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -20 }}
													transition={{ duration: 0.3 }}
												>
													<div className='grid gap-6 md:grid-cols-2'>
														{projects[
															activeProjectType as keyof typeof projects
														].map((project) => (
															<ProjectCard key={project.title} {...project} />
														))}
													</div>
												</motion.div>
											</AnimatePresence>
										</Tabs>
									</div>
								</TabsContent>
								<TabsContent value='blog' className='mt-6'>
									<div id='blog'>
										<div className='grid gap-6 md:grid-cols-2'>
											{blogPosts.map((post) => (
												<BlogPost key={post.slug} {...post} />
											))}
										</div>
									</div>
								</TabsContent>
							</motion.div>
						</AnimatePresence>
					</Tabs>
				</div>
			)}
			<motion.div
				id='about'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className='w-full max-w-4xl mx-auto'
			>
				<h2 className='text-3xl font-bold mb-4'>About Me</h2>
				<div className='grid gap-6 md:grid-cols-2'>
					<div>
						<p className='mb-4'>I build things for the web.</p>
						<p className='mb-4'>
							My tools of choice are JavaScript, TypeScript, React, Node.js, and
							Next.js, but I&apos;m always learning something new. I&apos;ve
							worked on everything from frontends for crypto projects and small
							business websites to real-time apps and geolocation features for
							board game fans.
						</p>
						<p className='mb-4'>
							I like solving tricky problems, making stuff that people actually
							want to use, and occasionally starting projects that inevitably
							grow wildly beyond their original scope.
						</p>
					</div>
					<div>
						<p className='mb-4'>
							When I&apos;m not coding, I&apos;m probably reading up on new
							tech, playing board games, or farming (yes, you read that right).
						</p>
						<p className='mb-4'>
							Take a look at my work, or let&apos;s chat about what you&apos;re
							building!
						</p>
						<div className='flex space-x-4 mt-6'>
							<Link
								href='https://github.com/austinjblake'
								target='_blank'
								rel='noopener noreferrer'
								className='text-primary hover:text-primary-dark'
							>
								<Github className='w-6 h-6' />
								<span className='sr-only'>GitHub</span>
							</Link>
							<Link
								href='https://linkedin.com/in/austinjblake'
								target='_blank'
								rel='noopener noreferrer'
								className='text-primary hover:text-primary-dark'
							>
								<Linkedin className='w-6 h-6' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
							<Link
								href='mailto:ajblake2189@gmail.com' //change after squarespace fix
								className='text-primary hover:text-primary-dark'
							>
								<Mail className='w-6 h-6' />
								<span className='sr-only'>Email</span>
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
