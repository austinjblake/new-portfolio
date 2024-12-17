'use client';

export default function VercelStagingPost() {
	return (
		<div className='max-w-4xl mx-auto p-8'>
			<article className='space-y-8'>
				<header className='space-y-6'>
					<h1 className='text-4xl font-bold'>
						Vercel Staging Environment with Clerk/Stripe Webhooks
					</h1>
				</header>

				<div className='prose lg:prose-xl'>
					<div className='mb-8'>
						<p className='text-lg leading-relaxed mb-6'>
							Setting up a staging environment for your Vercel deployment can be
							tricky when dealing with webhooks from services like Clerk and
							Stripe. Here&apos;s how to configure a consistent URL for testing
							webhooks in your staging environment.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							The main challenge is that Vercel&apos;s preview deployments use
							dynamic URLs, which change with each deployment. This makes it
							impossible to maintain stable webhook endpoints for services that
							need consistent URLs.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							The solution is to create a separate staging domain for your
							project in Vercel with which will look like
							staging.yourdomain.com. Vercel makes it simple to set this up to
							build from your staging branch just like your main domain is built
							from your main git branch. This gives you a stable URL for
							configuring webhooks while maintaining the preview deployments for
							feature testing.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							The only problem? To view your staging domain, you need to be
							logged into Vercel. Clerk and Stripe can&apos;t be logged in--they
							are just sending requests to the URL. To solve this, Vercel offers
							custom headers that will give these webhooks permission to
							interact with your staging environment.
						</p>
						<p className='text-lg leading-relaxed mb-6'>
							Here&apos;s how to set it up:
						</p>
					</div>

					<section className='mb-8'>
						<h2 className='text-2xl font-semibold mb-4'>Key Steps</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>Create a staging branch in your git repo</li>
							<li>Configure a Vercel domain for your staging environment</li>
							<li>In Vercel, go to Settings -{'>'} Deployment Protection</li>
							<li>
								Under Protection Bypass for Automation, you can get a secret key
								that will allow your webhooks to interact with your staging
								environment
							</li>
							<li>
								In your Clerk development project, go to Configure -{'>'}{' '}
								Webhooks -{'>'} Advanced -{'>'} Custom Headers. The key will be
								something like &apos;x-vercel-protection-bypass&apos; and the
								value is the secret key you got from Vercel.
							</li>
							<li>Do the same for your Stripe development project.</li>
							<li>
								Now when you are testing your webhooks on the staging branch
								using your development environment, these headers will allow the
								services to hit your endpoints on the protected Vercel staging
								environment.
							</li>
						</ul>
					</section>
				</div>
			</article>
		</div>
	);
}
