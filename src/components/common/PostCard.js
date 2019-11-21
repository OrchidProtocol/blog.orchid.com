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

//<Link to={url}>

const PostCard = ({ post, number }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <div to={url} css={css`
            padding-bottom: var(--margin);
            margin-bottom: var(--margin);
            display: block;
        `}>
            <header css={css`
                display: block;
            `}>
                {post.feature_image &&
                    <Link to={url}><div css={css`
                        padding: 30% 50%;
                        background: var(--color-secondary) no-repeat center center;
                        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
                        border-radius: 20px;
                        background-image: url(${post.feature_image});
                        background-size: cover;
                    `}></div></Link>}
            </header>
            <div className="everything-but-image">
                <div css={css`
                    font-weight: var(--font-bold);
                    margin: var(--margin-half) 0;
                `}>
                    {getCustomFormatedDate(post.published_at)}
                </div>

                <Tags post={post} linkTags={true}/>

                <div css={css`
                        margin: var(--margin-half) 0;
                        display: flex;
                        align-items: center;
                    `}>
                        <Link to={url}>
                            {post.featured && FeaturedIndicator}
                            <h2 css={css`
                                display: inline-block;
                                vertical-align: middle;
                            `}>{post.title}</h2>
                        </Link>
                </div>

                <section className="post-card-excerpt"><Link to={url} css={css`&:hover{text-decoration:none;}`}>{post.excerpt}</Link></section>
                
                <div css={css`
                    text-align: right;
                    color: var(--color-primary);
                    font-weight: var(--font-bold);
                `}>
                   <Link to={url}>Read More</Link>
                </div>
            </div>
        </div>
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
