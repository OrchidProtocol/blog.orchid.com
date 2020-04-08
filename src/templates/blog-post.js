import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import Tags from '../components/common/Tags'
import url from 'url'

import ArticleMeta from '../components/common/meta/ArticleMeta';

import getCustomFormatedDate from '../utils/date';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import config from '../utils/config';

export const BlogPostTemplate = ({
	content,
	tags,
	title,
	helmet,
	date,
	slug,
	featuredimage,
}) => {
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

							box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
							border-radius: 20px;
						`} src={featuredimage} alt={title} />
					: <></>}

			</figure>

			<section css={css`
				margin-top: 0;
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
			</section>
		</article>
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
	const { markdownRemark: post } = props.data

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

	if (post.frontmatter.featuredimage) {
		let ftImage = post.frontmatter.featuredimage;
		if (process.env.GATSBY_TARGET_LANG) {
			if (post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`]) {
				ftImage = post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`];
			}
		}
		post.frontmatter.featuredimage = (ftImage.childImageSharp && ftImage.childImageSharp.fixed) ?
			ftImage.childImageSharp.fixed.src :
			ftImage.publicURL;
	}


	return (
		<Layout>
			<BlogPostTemplate
				content={content}
				date={post.frontmatter.date}
				slug={post.frontmatter.url}
				featuredimage={post.frontmatter.featuredimage}
				description={description}
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

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date
				featuredimage {
					childImageSharp {
						fixed(width: 720, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
					publicURL
				}
				featuredimage_ja {
					childImageSharp {
						fixed(width: 720, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
					publicURL
				}
				featuredimage_ko {
					childImageSharp {
						fixed(width: 720, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
					publicURL
				}
				featuredimage_zh {
					childImageSharp {
						fixed(width: 720, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
					publicURL
				}
				featuredimage_id {
					childImageSharp {
						fixed(width: 720, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
					publicURL
				}
				featuredimage_ru {
					childImageSharp {
						fixed(width: 720, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
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
`
