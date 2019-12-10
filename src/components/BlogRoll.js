import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'
import MetaData from '../components/common/meta/MetaData';
import PreviewCompatibleImage from './PreviewCompatibleImage'

import {Layout, PostCard, Pagination} from './common';

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

const BlogRoll = ({ data, location, pageContext }) => {
    console.log(pageContext);
    const posts = data.allPosts.edges
    const featured = data.featuredPosts.edges
    const tags = []

    const tagElements = [];
    for (let index = 0; index < tags.length; index++) {
        tagElements.push(<Link key={index} to={`/tag/${tags[index].node.slug}/`}>
            {tags[index].node.name}
        </Link>);
    }

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
        key={index} to={`/${featured[index].node.url}/`}>
            <div css={css`
                border-radius: 12px;
                background-image: url(${featured[index].node.featuredimage});
                background-size: cover;
                background-position: center;
                padding: 30% 50%;
            `}>

            </div>
            <h3>{featured[index].node.title}</h3>
            <span>{featured[index].node.date}</span>
        </Link>);
    }

    let currentPost = 0;

    return (
        <>
            <MetaData location={location} />
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
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
									fluid(maxWidth: 720, quality: 90) {
									...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}

			featuredPosts: allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { featuredpost: { eq: true }, templateKey: { eq: "blog-post" } } }
				) {
				edges {
					node {
						excerpt(pruneLength: 400)
						id
						fields {
							slug
						}
						frontmatter {
							title
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
    `}
		render={(data, count) => <BlogRoll data={data} count={count} />}
	/>
)
