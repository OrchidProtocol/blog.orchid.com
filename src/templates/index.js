import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import getCustomFormatedDate from '../utils/date';

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/

const Sidebar = styled.div`
`;
const SidebarCard = styled.div`
    background: #fff;
    border: 1px solid #d5d7e2;
    padding: 1rem;
    margin: 1rem;
    font-size: .82rem;
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

const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const featured = data.featuredPosts.edges
    const tags = data.allGhostTag.edges

    const tagElements = [];
    for (let index = 0; index < tags.length; index++) {
        tagElements.push(<Link key={index} to={'/tag/'+tags[index].node.slug}>
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
        key={index} to={'/'+featured[index].node.slug}>
            <div css={css`
                border-radius: 12px;
                background-image: url(${featured[index].node.feature_image});
                background-size: cover;
                background-position: center;
                padding: 30% 50%;
            `}>

            </div>
            <h3>{featured[index].node.title}</h3>
            <span>{getCustomFormatedDate(featured[index].node.published_at)}</span>
        </Link>);
    }

    let currentPost = 0;

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container" css={css`
                    position: relative;
                    z-index: 2;
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
                            
                            <SidebarCard>
                                <SidebarCardHeader>Featured Posts</SidebarCardHeader>
                                <SidebarCardSeperator />
                                {featuredElements}
                            </SidebarCard>
                        </Sidebar>

                    </div>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
        allGhostTag: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            limit: $limit,
            skip: $skip,
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
        
        featuredPosts: allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: { featured: {eq: true} }
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }

        allGhostTag(
            sort: { order: DESC, fields: slug },
        ) {
            edges {
                node {
                    ...GhostTagFields
                }
            }
        }
    }
`
