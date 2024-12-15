import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
	return (
		<div className='max-w-4xl mx-auto'>
			<h1 className='text-4xl font-bold mb-6'>About Me</h1>
			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<p className='mb-4'>
						Hi, I&apos;m [Your Name], a passionate software engineer with
						expertise in JavaScript, TypeScript, React, Node.js, and Next.js. I
						have a deep interest in web development, artificial intelligence,
						and blockchain technology.
					</p>
					<p className='mb-4'>
						With over [X] years of experience in the tech industry, I&apos;ve
						had the opportunity to work on a wide range of projects, from
						building scalable web applications to developing cutting-edge AI
						solutions and decentralized systems.
					</p>
					<p className='mb-4'>
						My goal is to create innovative and user-friendly solutions that
						make a positive impact on people&apos;s lives. I believe in the
						power of technology to solve complex problems and improve our daily
						experiences.
					</p>
				</div>
				<div>
					<p className='mb-4'>
						Throughout my career, I&apos;ve developed a strong foundation in:
					</p>
					<ul className='list-disc list-inside mb-4'>
						<li>Front-end development with React and Next.js</li>
						<li>Back-end development with Node.js and Express</li>
						<li>Database design and management (SQL and NoSQL)</li>
						<li>RESTful API development and integration</li>
						<li>AI and machine learning applications</li>
						<li>Blockchain development and smart contracts</li>
					</ul>
					<p className='mb-4'>
						When I&apos;m not coding, you can find me exploring new
						technologies, contributing to open-source projects, or writing
						articles on my blog to share my knowledge with the developer
						community.
					</p>
					<p className='mb-4'>
						I&apos;m always excited to take on new challenges and collaborate on
						innovative projects. If you&apos;re interested in working together
						or just want to chat about technology, feel free to get in touch!
					</p>
					<div className='flex space-x-4'>
						<Button asChild>
							<Link href='/projects'>View My Projects</Link>
						</Button>
						<Button asChild variant='outline'>
							<Link href='/blog'>Read My Blog</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
