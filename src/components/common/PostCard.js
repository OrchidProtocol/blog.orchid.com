import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Tags from './Tags'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import getCustomFormatedDate from '../../utils/date';


const PostCard = ({ post, number }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

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

            border-bottom: 1px solid var(--color-border);
        `}>
            <footer css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 0 var(--margin-half) 0;
                color: var(--color-secondary);
            `}>
                <div className="post-card-footer-left">
                    <div className="post-card-avatar" css={css`
                        width: 40px;
                        height: 40px;
                        margin: 0 7px 0 0;
                        border-radius: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    `}>
                        {post.primary_author.profile_image ?
                            <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                            <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                        }
                    </div>
                    <span css={css`
                        font-size: var(--font-size-small);
                    `}><b>{ post.primary_author.name }</b><br/>{getCustomFormatedDate(post.published_at)}</span>
                </div>
                <div className="post-card-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
            <header css={css`
                display: block;
            `}>
                {post.feature_image &&
                    <div css={css`
                        padding: 20% 50%;
                        background: var(--color-secondary) no-repeat center center;
                        background-image: url(${post.feature_image});
                        background-size: cover;
                    `}></div>}
                {/*<span><Tags post={post} /></span>*/}
                {/*{post.featured && <span>Featured</span>}*/}
            </header>
            <div className="everything-but-image">
                <h2 css={css`
                    margin: var(--margin-quarter) 0 var(--margin-quarter) 0;
                `}>{post.title}</h2>
                <section className="post-card-excerpt">{post.excerpt}</section>
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
