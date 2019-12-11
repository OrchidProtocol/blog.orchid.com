import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import Tags from '../components/Tags'

import getCustomFormatedDate from '../utils/date';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export const BlogPostTemplate = ({
	content,
	description,
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
						`} src={featuredimage.childImageSharp.fluid.src} alt={title} />
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

				{title}
				{description}

				{/* The main post content */}
				<section
					css={css`
								a {
									text-decoration: underline !important;
								}
							`}
					className="content-body load-external-scripts"
				>{content}</section>
				{/* The main post content */}

				<div css={css`
						margin-top: var(--margin);
						@media (min-width: 719px) {
							display: flex;
							justify-content: space-between;
						}
					`}>
					<Tags post={tags} linkTags={true} />

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

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data

	return (
		<Layout>
			<BlogPostTemplate
				content={post.html}
				date={post.date}
				slug={post.url}
				featuredimage={post.frontmatter.featuredimage}
				contentComponent={post.html}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Blog">
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="description"
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
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
						fluid(maxWidth: 720, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				title
				description
				url
				tags
			}
		}
	}
`
