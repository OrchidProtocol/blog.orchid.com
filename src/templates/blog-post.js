import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import Tags from '../components/common/Tags'

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
			{helmet || ''}

			{(new Date(date) > new Date("Thu Oct 07 2019 12:22:21 GMT-0600 (Central Standard Time)")) ?
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
						`} src={(featuredimage.childImageSharp) ? featuredimage.childImageSharp.fixed.src : featuredimage.publicURL} alt={title} />
						: <></>}

				</figure> : null}

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
					display: block;
				`}>{getCustomFormatedDate(date)}</span>

				<br />

				{/* The main post content */}
				<section
					css={css`
								a {
									text-decoration: underline !important;
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

	return (
		<Layout>
			<BlogPostTemplate
				content={content}
				date={post.frontmatter.date}
				slug={post.frontmatter.url}
				featuredimage={post.frontmatter.featuredimage}
				description={description}
				helmet={
					<Helmet titleTemplate="%s | Blog">
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
					</Helmet>
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
				title
				title_ja
				title_ko
				title_zh
				description
				description_ja
				description_ko
				description_zh
				url
				tags
			}
			fields {
				body_ja_html
				body_ko_html
				body_zh_html
			}
		}
	}
`
