import React from 'react'
import { Helmet } from 'react-helmet'

import BlogRoll from '../components/BlogRoll'

import config from '../utils/config';

class Index extends React.Component {
	render () {
		return <>
			<Helmet>
				<title>{config.title}</title>
				<meta name="description" content="Your VPN should be secure, which is why Orchid is building with open source tools for custom VPN configurations and privacy services." />

				<meta property="og:image" content={config.feature_image} />
				<meta property="og:image:width" content="1688"/>
				<meta property="og:image:height" content="950"/>
				<meta name="twitter:image" content={config.feature_image} />
				<meta name="twitter:card" content="summary_large_image" />
				

				<script type="application/ld+json">{`
					{
						"@context": "https://schema.org/",
						"@type": "Blog",
						"name": "${config.title}",
						"url": "${config.siteUrl}",
						"image": {
								"@type": "ImageObject",
								"url": "${config.siteUrl}${config.feature_image}",
								"width": "${config.feature_image_width}",
								"height": "${config.feature_image_height}"
							},
						"publisher": {
							"@type": "Organization",
							"name": "${config.title}",
							"logo": {
								"@type": "ImageObject",
								"url": "${config.siteUrl}${config.logo}",
								"width": ${config.logoWidth},
								"height": ${config.logoHeight}
							}
						},
						"mainEntityOfPage": {
							"@type": "WebPage",
							"@id": "${config.siteUrl}"
						},
						"description": "${config.description}"
					}
				`}</script>

				<script>
					{`
						if ('serviceWorker' in window.navigator) {
							window.navigator.serviceWorker.getRegistrations().then((registrations) => {
								for(let registration of registrations) {
									registration.unregister();
								}
							}).catch((err) => {
								console.log('Service Worker registration failed: ', err);
							});
						}
					`}
				</script>

			</Helmet>
			<BlogRoll />
		</>
	}
}

export default Index;
