import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
	return (
		<footer className='border-t'>
			<div className='container mx-auto px-4 py-6 flex justify-between items-center'>
				<p className='text-sm text-muted-foreground'>
					© {new Date().getFullYear()} Austin Blake. All rights reserved.
				</p>
				<div className='flex space-x-4'>
					<a
						href='https://github.com/austinjblake'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-primary'
					>
						<Github size={20} />
					</a>
					<a
						href='https://linkedin.com/in/austinjblake'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-primary'
					>
						<Linkedin size={20} />
					</a>
					<a
						href='https://x.com/ajb_codes'
						target='_blank'
						rel='noopener noreferrer'
						className='text-muted-foreground hover:text-primary'
					>
						<Twitter size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
