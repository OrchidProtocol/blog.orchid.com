import React from 'react'
import { Helmet } from 'react-helmet'

import BlogRoll from '../components/BlogRoll'

import config from '../utils/config';

export default () => (<>
		<Helmet>
			<title>Blog - {config.title}</title>
			
			<meta property="og:image" content={config.feature_image} />
			<meta property="og:image:width" content="1688"/>
			<meta property="og:image:height" content="950"/>
			<meta name="twitter:image" content={config.feature_image} />
			<meta name="twitter:card" content="summary_large_image" />

			<script type="application/ld+json">{`
				{
					"@context": "https://schema.org/",
					"@type": "Blog",
					"name": "${config.title}"
					"url": "${config.siteUrl}",
					"image": {
							"@type": "ImageObject",
							"url": "${config.feature_image}",
							"width": "${config.feature_image_width}",
							"height": "${config.feature_image_height}"
						},
					"publisher": {
						"@type": "Organization",
						"name": "${config.title}",
						"logo": {
							"@type": "ImageObject",
							"url": "${config.logo}",
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

		</Helmet>
		<BlogRoll />
	</>
)
