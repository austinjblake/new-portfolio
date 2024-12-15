'use client';

import { motion } from 'framer-motion';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
	title: string;
	description: string;
	technologies: string[];
	slug: string;
	githubUrl?: string;
	liveUrl?: string;
}

export default function ProjectCard({
	title,
	description,
	technologies,
	slug,
	githubUrl,
	liveUrl,
}: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.2 }}
			whileHover={{ scale: 1.05 }}
		>
			<Card className='h-full flex flex-col'>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col flex-grow'>
					<div className='flex flex-wrap gap-2 mb-4'>
						{technologies.map((tech) => (
							<Badge key={tech} variant='secondary'>
								{tech}
							</Badge>
						))}
					</div>
					<div className='mt-auto flex gap-4 items-center'>
						<Link
							href={`/projects/${slug}`}
							className='text-primary hover:underline'
						>
							View Details
						</Link>
						{githubUrl && (
							<Link
								href={githubUrl}
								className='text-muted-foreground hover:text-primary'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Github className='h-5 w-5' />
							</Link>
						)}
						{liveUrl && (
							<Link
								href={liveUrl}
								className='text-muted-foreground hover:text-primary'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Globe className='h-5 w-5' />
							</Link>
						)}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
