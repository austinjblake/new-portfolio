'use client';

import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = {
	webdev: [
		{
			title: 'E-commerce Platform',
			description:
				'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.',
			technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
			link: 'https://github.com/yourusername/ecommerce-platform',
		},
		{
			title: 'Task Management App',
			description:
				'A React-based task management application with real-time updates.',
			technologies: ['React', 'Firebase', 'Tailwind CSS'],
			link: 'https://github.com/yourusername/task-management-app',
		},
	],
	ai: [
		{
			title: 'Sentiment Analysis Tool',
			description:
				'An AI-powered sentiment analysis tool for social media posts.',
			technologies: ['Python', 'TensorFlow', 'Natural Language Processing'],
			link: 'https://github.com/yourusername/sentiment-analysis-tool',
		},
		{
			title: 'Image Recognition API',
			description:
				'A REST API for image recognition using deep learning models.',
			technologies: ['FastAPI', 'PyTorch', 'Docker'],
			link: 'https://github.com/yourusername/image-recognition-api',
		},
	],
	crypto: [
		{
			title: 'Decentralized Exchange',
			description: 'A decentralized cryptocurrency exchange built on Ethereum.',
			technologies: ['Solidity', 'Web3.js', 'React'],
			link: 'https://github.com/yourusername/dex',
		},
		{
			title: 'Crypto Portfolio Tracker',
			description: 'A web app to track and analyze cryptocurrency portfolios.',
			technologies: ['Vue.js', 'Chart.js', 'CoinGecko API'],
			link: 'https://github.com/yourusername/crypto-portfolio-tracker',
		},
	],
};

export default function Projects() {
	const [activeTab, setActiveTab] = useState('webdev');
	console.log(activeTab);

	return (
		<div>
			<h1 className='text-3xl font-bold mb-6'>My Projects</h1>
			<Tabs defaultValue='webdev' onValueChange={setActiveTab}>
				<TabsList>
					<TabsTrigger value='webdev'>Web Development</TabsTrigger>
					<TabsTrigger value='ai'>AI</TabsTrigger>
					<TabsTrigger value='crypto'>Crypto</TabsTrigger>
				</TabsList>
				<TabsContent value='webdev'>
					<div className='grid gap-6 mt-6 md:grid-cols-2'>
						{projects.webdev.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</div>
				</TabsContent>
				<TabsContent value='ai'>
					<div className='grid gap-6 mt-6 md:grid-cols-2'>
						{projects.ai.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</div>
				</TabsContent>
				<TabsContent value='crypto'>
					<div className='grid gap-6 mt-6 md:grid-cols-2'>
						{projects.crypto.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
