'use client';

import Link from 'next/link';

export default function RangersUnitedPage() {
	return (
		<div className='max-w-4xl mx-auto p-8'>
			<article className='space-y-8'>
				<header className='space-y-6'>
					<h1 className='text-4xl font-bold'>Rangers United</h1>
					<div className='flex gap-4'>
						<Link
							href='https://www.rangersunited.com'
							className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Site
						</Link>
						<Link
							href='https://github.com/austinjblake/rangers-united'
							className='px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</Link>
					</div>
				</header>

				<div className='prose lg:prose-xl'>
					<div className='mb-8'>
						<p className='text-lg leading-relaxed mb-6'>
							I love playing board games and tabletop games. And I really feel
							strongly about their potential to bring people together and create
							vibrant communities and lasting friendships. The problem is that
							it can be hard to find people to play with, especially after
							moving to a new city(like I did not long ago). That&apos;s what
							led me to create this app.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							Rangers United is a web application that helps players find and
							coordinate local games. Users can host games at their homes or
							Friendly Local Game Stores, join existing games, and communicate
							with other players through real-time chat.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							The app uses location-based search powered by PostGIS to help
							users find games within their preferred radius. Real-time features
							like chat and notifications are handled through Supabase, while
							authentication is managed by Clerk. Google Maps API is used for
							geolocation and also to help users find local game stores.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							With such a complex app, type safety was a key focus. I used
							TypeScript from the beginning and implemented Drizzle ORM for
							database management. The UI is built with Next.js and Tailwind
							CSS, emphasizing mobile responsiveness and intuitive navigation.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							Right now, the app is focused on the Power Rangers Heroes of the
							Grid game as an MVP for the concept as a whole. I&apos;m working
							on forking the project to be used with a selection for any game
							you can think of now that most of the main logistics are sorted
							out.
						</p>
					</div>

					<section className='mb-8'>
						<h2 className='text-2xl font-semibold mb-4'>Key Features</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>Location-based game search with configurable radius</li>
							<li>Real-time chat system with host moderation controls</li>
							<li>Privacy focused, no user info or location is shared</li>
							<li>Automated notifications for game changes and updates</li>
							<li>Saved search feature with email notifications</li>
							<li>
								User game slot management, easily view all your games at a
								glance in the dashboard
							</li>
							<li>Mobile-first responsive design</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-semibold mb-4'>Built With</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>Next.js</li>
							<li>TypeScript</li>
							<li>Tailwind CSS</li>
							<li>Supabase</li>
							<li>Clerk</li>
							<li>Drizzle ORM</li>
							<li>PostGIS</li>
							<li>Google Maps API</li>
						</ul>
					</section>
				</div>
			</article>
		</div>
	);
}
