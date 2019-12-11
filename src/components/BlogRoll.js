import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'

import _ from 'lodash';
import { Layout, PostCard } from './common';

const Sidebar = styled.div`
`;

const SidebarCard = styled.div`
    background: #fff;
    border: 1px solid #d5d7e2;
    padding: 1rem;
    margin: 1rem;
    font-size: .82rem;
    &:nth-of-type(1) {
        margin-top: 0;
    }
`;
const SidebarCardHeader = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-base);
`;
const SidebarCardSeperator = styled.div`
    border-top: 2px solid #c8c6c8;
    margin: .5rem 0;
    margin: calc(.5rem - 1px) 0;
    box-sizing: border-box;
    width: 100%;
`;

const BlogRoll = ({ data, location }) => {
    const posts = data.allPosts.edges
    const featured = data.featuredPosts.edges

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
        if (_.get(edge, `node.frontmatter.tags`)) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)
    
    const tagElements = [];
    tags.forEach(tag => {
        tagElements.push(<Link key={_.kebabCase(tag)} to={`/tag/${_.kebabCase(tag)}/`}>
            {tag}
        </Link>);
    })

    const featuredElements = [];
    for (let index = 0; index < featured.length; index++) {
        featuredElements.push(<Link css={css`
            display: block;
            margin-top: 2rem;

            &:nth-of-type(1) {
                margin-top: 1rem;
            }
            &:hover {
                text-decoration: none;
            }
        `}
            key={index} to={`/${featured[index].node.frontmatter.url}/`}>
            {featured[index].node.frontmatter.featuredimage ?
                <div css={css`
                    border-radius: 12px;
                    background-image: url(${(featured[index].node.frontmatter.featuredimage.childImageSharp) ? featured[index].node.frontmatter.featuredimage.childImageSharp.fluid.src : featured[index].node.frontmatter.featuredimage.publicURL});
                    background-size: cover;
                    background-position: center;
                    padding: 30% 50%;
                `}></div> : <></>}
            <h3>{featured[index].node.frontmatter.title}</h3>
            <span>{featured[index].node.frontmatter.date}</span>
        </Link>);
    }

    let currentPost = 0;

    return (
        <>
            <Layout isHome={true}>
                <div className="container" css={css`
                    position: relative;
                    z-index: 1;
                `}>
                    <div css={css`
                        display: grid;
                        grid-template-columns: 6fr 3fr;
                        grid-gap: 2rem;
                        @media (max-width: 1200px) {
                            display: block;
                        }
                    `}>
                        <section css={css`
                            
                        `}>
                            {posts.map(({ node }) => (
                                // The tag below includes the markup for each post - components/common/PostCard.js
                                <PostCard number={currentPost++} key={node.id} post={node} />
                            ))}
                        </section>
                        <Sidebar>
                            <SidebarCard>
                                <SidebarCardHeader>Featured Posts</SidebarCardHeader>
                                <SidebarCardSeperator />
                                {featuredElements}
                            </SidebarCard>

                            <SidebarCard>
                                <SidebarCardHeader>Categories</SidebarCardHeader>
                                <SidebarCardSeperator />
                                <div css={css`
                                    & > a {
                                        display: block;
                                        color: var(--color-primary);
                                        font-style: italic;
                                    }
                                `}>
                                    {tagElements}
                                </div>
                            </SidebarCard>
                        </Sidebar>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
		query BlogRollQuery {
			allPosts: allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" }, public: { eq: true } } }
				) {
				edges {
					node {
						excerpt(pruneLength: 400)
						id
						fields {
							slug
						}
						frontmatter {
                            url
                            title
                            description
                            tags
							templateKey
							date(formatString: "MMMM DD, YYYY")
							featuredpost
							featuredimage {
								childImageSharp {
									fluid(maxWidth: 720, quality: 90) {
									...GatsbyImageSharpFluid
                                    }
								}
                                publicURL
							}
						}
					}
				}
			}

			featuredPosts: allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { featuredpost: { eq: true }, templateKey: { eq: "blog-post" }, public: { eq: true } } }
				) {
				edges {
					node {
						excerpt(pruneLength: 400)
						id
						fields {
							slug
						}
						frontmatter {
							url
							title
							templateKey
							date(formatString: "MMMM DD, YYYY")
							featuredpost
							featuredimage {
								childImageSharp {
									fluid(maxWidth: 480, quality: 90) {
									...GatsbyImageSharpFluid
									}
                                }
                                publicURL
							}
						}
					}
				}
			}
		}
    `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
)
