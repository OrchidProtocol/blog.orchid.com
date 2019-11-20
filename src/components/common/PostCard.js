import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Tags from './Tags'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import getCustomFormatedDate from '../../utils/date';

const FeaturedIndicator = <div css={css`
    background: var(--color-primary);
    padding: 5px;
    display: inline-block;
    width: auto;
    margin-right: 5px;
    border-radius: 2px;
    color: #ffffff;
    line-height: 1;
    font-size: 75%;
`}>
    Featured
</div>



const PostCard = ({ post, number }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    console.log(post.featured);

    return (
        <Link to={url} css={css`
            color: var(--color-link);
            &:hover {
                color: var(--color-link-hover);
                text-decoration: none;
            }
            padding-bottom: var(--margin);
            margin-bottom: var(--margin);
            display: block;
        `}>
            <header css={css`
                display: block;
            `}>
                {post.feature_image &&
                    <div css={css`
                        padding: 30% 50%;
                        background: var(--color-secondary) no-repeat center center;
                        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
                        border-radius: 20px;
                        background-image: url(${post.feature_image});
                        background-size: cover;
                    `}></div>}
            </header>
            <div className="everything-but-image">
                <div css={css`
                    font-weight: var(--font-bold);
                    margin: var(--margin-half) 0;
                `}>
                    {post.featured && FeaturedIndicator}
                    {getCustomFormatedDate(post.published_at)}
                </div>

                <Tags post={post} linkTags={true}/>

                <h2 css={css`
                    margin: var(--margin-half) 0;
                `}>{post.title}</h2>
                <section className="post-card-excerpt">{post.excerpt}</section>
                
                <div css={css`
                    text-align: right;
                    color: var(--color-primary);
                    font-weight: var(--font-bold);
                `}>
                    Read More
                </div>
            </div>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
