import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import Tags from '../components/common/Tags'
import url from 'url'

import StickySidebar from '../components/common/Sticky';
import ArticleMeta from '../components/common/meta/ArticleMeta';
import TinyPostCard from '../components/common/TinyPostCard';

import { getCustomFormatedDate } from '../utils/date';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import config from '../utils/config';

export const BlogPostTemplate = ({
	content,
	tags,
	title,
	relatedPosts,
	helmet,
	date,
	slug,
	featuredimage,
}) => {
	content = content.replace(/\[interstitial\]/ig, `<div class="interstitial__container">
		<div class="interstitial__image">
			<img src="/img/WhisperBunny.png" width="800" height="954" />
		</div>
		<div class="interstitial__content">
			<b>Pssst! You can get privacy news delivered to your inbox.</b>
			<div class="interstitial__form">
				<input type="email" placeholder="Email address" />
				<button>Subscribe</button>
			</div>
			<div class="interstitial__response"></div>
			<small class="interstitial__disclaimer">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><style>.cls-1{fill:#53696a;}</style></defs><g id="Layer_3" data-name="Layer 3"><path class="cls-1" d="M68,34.75h0V17.49c0-5-5.65-10.16-18-10.16S32.53,12.45,32.53,17.57V34.74A13.31,13.31,0,0,0,19.22,48.05V79.36A13.31,13.31,0,0,0,32.53,92.67H67.47A13.31,13.31,0,0,0,80.78,79.36V48.05A13,13,0,0,0,68,34.75ZM38.21,20.4c0-4.27,3.51-8.54,11.87-8.54s12.2,4.33,12.2,8.48v14.4H38.21ZM50,71.89a8.14,8.14,0,1,1,8.14-8.14A8.13,8.13,0,0,1,50,71.89Z"/></g></svg>
				</div>
				<div>
					Your privacy is important to us. We will never share your information.
				</div>
			</small>
		</div>
	</div>`)


	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API

		if (content.match(/interstitial__container/)) {
			const container = document.body.querySelector('.interstitial__container');
			if (container.dataset.hasListener) {
				return;
			} else {
				container.dataset.hasListener = true;
			}
			const input = container.querySelector('input');
			const button = container.querySelector('button');
			const response = container.querySelector('.interstitial__response');

			const validate = (value) => {
				return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
			}
			const reset = () => {
				input.disabled = false;
				container.classList.remove('error');
				container.classList.remove('success');
				container.classList.remove('pending');
				input.innerHTML = '&nbsp;';
			}

			button.addEventListener('click', () => {
				if (input.disabled) return;

				if (validate(input.value)) {
					reset();
					container.classList.add('pending');
					input.disabled = true;

					const mailchimp_add = "https://ik396c7x0k.execute-api.us-west-2.amazonaws.com/default/mailchimp?email=";
					const mailchimp_url = mailchimp_add + encodeURIComponent(input.value);
					fetch(mailchimp_url)
						.then(response => response.json())
						.then((data) => {
							reset();
							input.value = "";
							container.classList.add('success');
							response.textContent = "Great! Now please check your email and confirm.";
						})
						.catch((error) => {
							reset();
							console.error(error);
							container.classList.add('error');
							response.textContent = "There was an error signing you up, please try again later.";
						})
				} else {
					reset();
					container.classList.add('error');
					response.textContent = "Invalid email";
				}
			});
		}
	});

	return (<div className="container" css={css`
		position: relative;
		z-index: 1;
	`}>
		<article className="content">
			{helmet || ' '}

			<figure css={css`
					margin: 0;
					width: 100%;
					height: auto;
					-o-object-fit: contain;
					object-fit: contain;
					-o-object-position: center;
					object-position: center;
				`}>
				{featuredimage ?
					<img css={css`
							max-width: 720px;
							width: 100%;
							height: auto;
							margin-left: auto;
							margin-right: auto;
							margin-bottom: 1rem;
							display: block;

							@media (min-width: 1200px) {
								@media (max-width: 1500px) {
									margin-left: 0;
								}
							}
							box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
							border-radius: 20px;
						`} src={featuredimage} alt={title} />
					: <></>}

			</figure>

			<section css={css`
				margin-top: 0;

				@media (min-width: 1200px) {
					@media (max-width: 1500px) {
						margin-left: 0;
					}
				}
			`} className="post-full-content">
				<h1 css={css`
					font-size: 1.75rem;
					@media (min-width: var(--mobile-breakpoint)) {
						font-size: 52px;
					}
					margin-bottom: 0;
				`}>{title}</h1>
				<span css={css`
					display: inline-block;
					background-color: var(--color-primary);
					border-radius: 2px;
					padding: 6px 10px;
					line-height: 1;
					color: white;
				`}>{getCustomFormatedDate(date)}</span>

				<br />
				<br />

				{/* The main post content */}
				<section
					css={css`
								a {
									text-decoration: underline !important;
								}
								img[src*="#mobile-screenshot"] {
									width: 95%;
									max-width: 275px;
									height:auto;
									display: block;
									margin-left: auto;
									margin-right: auto;
								}
							`}
					className="content-body load-external-scripts"
					dangerouslySetInnerHTML={{ __html: content }}
				></section>
				{process.env.GATSBY_TARGET_LANG === 'en' ? <section css={css`
						a {
							text-decoration: underline !important;
						}
					`}>
					<hr />
					<i>
						If you enjoyed this blog, <a href="https://www.orchid.com/newsletter-signup">subscribe here</a> for privacy news, commentary, and product updates from Orchid.
					</i>
				</section> : ''}


				<div css={css`
						margin-top: var(--margin);
						@media (min-width: 719px) {
							display: flex;
							justify-content: space-between;
						}
					`}>
					<Tags tags={tags} linkTags={true} />

					<div css={css`
							margin-top: var(--margin-quarter);
							@media (min-width: 719px) {
								margin-top: 0;
								text-align: right;
								width: 40%;
							}
							a {
								margin-left: var(--margin-half);
							}
						`}>
						<a target="_blank" rel="noopener noreferrer"
							href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("\"" + title + "\" by @OrchidProtocol https://blog.orchid.com/" + slug + "/")} `}>
							<FontAwesomeIcon css={css`
									width: var(--social-icon-size) !important;
									height: auto;
									color: var(--color-link);
								`} icon={faTwitter} />
						</a>

						<a target="_blank" rel="noopener noreferrer"
							href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://blog.orchid.com/" + slug + "/")} `}>
							<FontAwesomeIcon css={css`
									width: var(--social-icon-size) !important;
									height: auto;
									color: var(--color-link);
								`} icon={faFacebookSquare} />
						</a>

						<a target="_blank" rel="noopener noreferrer"
							href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent("https://blog.orchid.com/" + slug + "/")}`}>
							<FontAwesomeIcon css={css`
									width: var(--social-icon-size) !important;
									height: auto;
									color: var(--color-link);
								`} icon={faLinkedin} />
						</a>
					</div>
				</div>

				<div css={css`
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					margin: var(--margin) 0;
				`}>
					<div css={css`
						width: 100%;
						color: var(--color-primary);
						@media (max-width: 960px) {
							text-align: center;
						}
					`}>
						<h2 css={css`color: var(--color-primary); margin-bottom: var(--margin-half);`}>
							Keep Reading
						</h2>
					</div>
					{relatedPosts}
				</div>
			</section>
		</article>
		<StickySidebar />
	</div>
	)
}

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object,
}

const BlogPost = (props) => {
	const { markdownRemark: post, allMarkdownRemark: otherPosts } = props.data;

	const relatedPosts = [];
	const somewhatRelatedPosts = [];
	const unrelatedPosts = [];
	try {
		for (let index = otherPosts.edges.length - 1; index >= 0; index--) {
			const posty = otherPosts.edges[index].node;

			if (posty.frontmatter.url === post.frontmatter.url) {
				otherPosts.edges.splice(index, 1);
			} else {
				let relatedness = 0;
				for (let o = 0; o < post.frontmatter.tags.length; o++) {
					const tag = post.frontmatter.tags[o];
					if (posty.frontmatter.tags.indexOf(tag) >= 0) {
						relatedness++;
					}
				}

				switch (relatedness) {
					case 1:
						somewhatRelatedPosts.push(posty);
						break;
					case 0:
						unrelatedPosts.push(posty);
						break;
					default:
						relatedPosts.push(posty);
						break;
				}
			}
		}
	} catch (e) {
		console.error(e)
	}

	if (somewhatRelatedPosts.length < 3) {
		for (let index = 0; index < Math.min(3, unrelatedPosts.length); index++) {
			const element = unrelatedPosts[index];
			somewhatRelatedPosts.push(element);
		}
	}
	if (relatedPosts.length < 3) {
		for (let index = 0; index < Math.min(3, somewhatRelatedPosts.length); index++) {
			const element = somewhatRelatedPosts[index];
			relatedPosts.push(element);
		}
	}

	const relatedPostsElements = [];
	for (let index = 0; index < Math.min(3, relatedPosts.length); index++) {
		const post = relatedPosts[index];
		relatedPostsElements.push(<TinyPostCard key={index} post={post} />)
	}


	let content = post.html,
		title = post.frontmatter.title,
		description = post.frontmatter.description;

	if (process.env.GATSBY_TARGET_LANG) {
		if (post.fields[`body_${process.env.GATSBY_TARGET_LANG}_html`]) {
			content = post.fields[`body_${process.env.GATSBY_TARGET_LANG}_html`];
		}
		if (post.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`]) {
			title = post.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`];
		}
		if (post.frontmatter[`description_${process.env.GATSBY_TARGET_LANG}`]) {
			description = post.frontmatter[`description_${process.env.GATSBY_TARGET_LANG}`];
		}
	}

	post.frontmatter.title = title;
	post.frontmatter.description = description;

	if (post.frontmatter.featuredimage && typeof post.frontmatter.featuredimage !== 'string') {
		let ftImage = post.frontmatter.featuredimage;
		if (process.env.GATSBY_TARGET_LANG) {
			if (post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`]) {
				ftImage = post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`];
			}
		}
		post.frontmatter.featuredimage = ftImage.publicURL;
	}


	return (
		<Layout>
			<BlogPostTemplate
				content={content}
				date={post.frontmatter.date}
				slug={post.frontmatter.url}
				featuredimage={post.frontmatter.featuredimage}
				description={description}
				relatedPosts={relatedPostsElements}
				helmet={
					<ArticleMeta
						data={post.frontmatter}
						canonical={url.resolve(config.siteUrl, post.frontmatter.url)} />
					/*<Helmet titleTemplate="%s | Blog">
						<title>{`${title}`}</title>
						<meta name="title" content={title} />
						<meta
							name="description"
							content={`${description}`}
						/>

						<meta property="og:title" content={title} />
						<meta property="og:description" content={description} />
						<meta property="og:image" content={post.frontmatter.featuredimage} />
						<meta property="og:type" content="Article" />
						<meta property="article:published_time" content={post.frontmatter.date} />
						
						<meta data-rh="true" name="twitter:creator" content={config.twitter} />
						<meta name="twitter:title" content={title} />
						<meta name="twitter:image" content={post.frontmatter.featuredimage} />
						<meta name="twitter:card" content="summary_large_image" />
					</Helmet>*/
				}
				tags={post.frontmatter.tags}
				title={title}
			/>
		</Layout>
	)
}

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
}

export default BlogPost

export const staticQuery = graphql`
	query BlogPostByID($id: String!, $buildTimestampUTC: Float) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date
				featuredimage {
					publicURL
				}
				featuredimage_ja {
					publicURL
				}
				featuredimage_ko {
					publicURL
				}
				featuredimage_zh {
					publicURL
				}
				featuredimage_id {
					publicURL
				}
				featuredimage_ru {
					publicURL
				}
				title
				title_ja
				title_ko
				title_zh
				title_id
				title_ru
				description
				description_ja
				description_ko
				description_zh
				description_id
				description_ru
				url
				tags
			}
			fields {
				body_ja_html
				body_ko_html
				body_zh_html
				body_id_html
				body_ru_html
			}
		}
		
		allMarkdownRemark(
			limit: 150
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { 
				frontmatter: { 
					public: { eq: true },
					date: { lt: $buildTimestampUTC }
				} 
			}
		) {
			edges {
				node {
					frontmatter {
						date
						featuredimage {
							publicURL
						}
						featuredimage_ja {
							publicURL
						}
						featuredimage_ko {
							publicURL
						}
						featuredimage_zh {
							publicURL
						}
						featuredimage_id {
							publicURL
						}
						featuredimage_ru {
							publicURL
						}
						title
						title_ja
						title_ko
						title_zh
						title_id
						title_ru
						description
						description_ja
						description_ko
						description_zh
						description_id
						description_ru
						url
						tags
					}
					fields {
						body_ja_html
						body_ko_html
						body_zh_html
						body_id_html
						body_ru_html
					}
				}
			}
		}
	}
`
