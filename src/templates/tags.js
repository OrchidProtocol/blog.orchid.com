import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/common/Layout'
import PostCard from '../components/common/PostCard'
import { css } from '@emotion/core'

//import config from '../utils/config'

class TagRoute extends React.Component {
	render() {
		const posts = this.props.data.allMarkdownRemark.edges
		const postLinks = posts.map(({ node }) => (
			// The tag below includes the markup for each post - components/common/PostCard.js
			<PostCard key={node.slug} post={node} />
		))
		const tag = this.props.pageContext.tag
		//const title = config.title
		//const totalCount = this.props.data.allMarkdownRemark.totalCount
		/*const tagHeader = `${totalCount} post${
			totalCount === 1 ? '' : 's'
			} tagged with “${tag}”`*/

		return (
			<Layout>
				<div className="container" css={css`
					position: relative;
					z-index: 1;
				`}>
					<header css={css`
						max-width: 690px;
						margin: 0 0 4vw;
					`}>
						<h1>{tag}</h1>
					</header>
					<div css={css`
						display: grid;
						justify-content: space-between;
						grid-gap: 30px;
						grid-template-columns: 1fr 1fr 1fr;
						@media (max-width: 980px) {
							.post-feed {
								grid-template-columns: 1fr 1fr;
							}
						}
						@media (max-width: 680px) {
							.post-feed {
								grid-template-columns: 1fr;
							}
						}
					`}>{postLinks}</div>
				</div>
			</Layout >
		)
	}
}

export default TagRoute

export const tagPageQuery = graphql`
query TagPage($tag: String) {
	site {
		siteMetadata {
			title
		}
	}
	allMarkdownRemark(
		limit: 1000
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { frontmatter: { tags: { in: [$tag] } } }
	) {
		totalCount
		edges {
			node {
				fields {
					slug
				}
				frontmatter {
					url
					title
					tags
					description
					templateKey
					date(formatString: "MMMM DD, YYYY")
					featuredpost
					featuredimage {
						childImageSharp {
							fluid(maxWidth: 720, quality: 90) {
							...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
}
`
