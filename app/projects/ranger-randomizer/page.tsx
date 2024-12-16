'use client';

import Link from 'next/link';

export default function RangerRandomizerPage() {
	return (
		<div className='max-w-4xl mx-auto p-8'>
			<article className='space-y-8'>
				<header className='space-y-6'>
					<h1 className='text-4xl font-bold'>Ranger Randomizer</h1>
					<div className='flex gap-4'>
						<Link
							href='https://www.rangerrandomizer.com'
							className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Site
						</Link>

						<Link
							href='https://github.com/austinjblake/ranger-randomizer'
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
							A tool for randomly generating components to use in the Power
							Rangers: Heroes of the Grid board game. Users can select the
							expansion boxes they own, then draw random cards for each type of
							component needed for a game-rangers, monsters, etc.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							The main objective was creating a simple, intuitive interface that
							loaded fast and worked well on small screens(anayltics showed that
							about half of the traffic was mobile).
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							I wanted to use a retro design for the site along with some
							classic Power Rangers icons like the lightning bolt to give it a
							nostalgic feel. The site design has changed a lot over the years
							and has also acted as a playground for me to try out new ideas and
							technologies. This is why I decided to create the Settings(Alpha5)
							and Clear(Rita&apos;s Dumpster) buttons using pure CSS to draw and
							animate them instead of importing more standard icons.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							Since there are a limited number of game components available and
							new boxes are released slowly, I made the choice to hard code all
							the expansions and their respective cards. That way the app
							doesn&apos;t have to rely on a database fetch requests and can be
							that much faster and simpler.
						</p>
					</div>

					<section className='mb-8'>
						<h2 className='text-2xl font-semibold mb-4'>Key Features</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>
								Draw every card type needed for a game, using card images as
								icons for easy recognition.
							</li>
							<li>
								Check boxes for expansions and only those cards are in the pool
								to be drawn from.
							</li>
							<li>
								Game contains some duplicate cards, or cards with 2 different
								people sharing the same power set. These can be automatically
								included/excluded based on player preference.
							</li>
							<li>
								All user settings are saved in the browser&apos;s local storage
								so they are persisted between sessions.
							</li>
							<li>98 mobile Lighthouse score, 100 on desktop.</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-semibold mb-4'>Built With</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>React</li>
							<li>Vite(migrated from Create React App)</li>
							<li>Sass CSS</li>
							<li>Netlify</li>
						</ul>
					</section>
				</div>
			</article>
		</div>
	);
}
