import BlogPost from '../../components/BlogPost';

const blogPosts = [
	{
		title: 'Vercel Staging Environment with Clerk/Stripe Webhooks',
		description:
			'How to setup a staging environment on Vercel with consistent URL for Clerk and Stripe webhook testing',
		date: 'Dec 14, 2024',
		slug: 'vercel-staging-environment-with-clerk-stripe-webhooks',
	},
];

export default function Blog() {
	return (
		<div>
			<h1 className='text-3xl font-bold mb-6'>Blog</h1>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{blogPosts.map((post) => (
					<BlogPost key={post.slug} {...post} />
				))}
			</div>
		</div>
	);
}
