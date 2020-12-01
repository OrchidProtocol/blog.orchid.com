import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Tags from './Tags'

import { getCustomFormatedDate } from '../../utils/date';

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
    {
        (() => {
            switch (process.env.GATSBY_TARGET_LANG) {
                default:
                    return "Featured";
                case "ja":
                    return "おすすめ";
                case "ko":
                    return "주요 게시물";
                case "zh":
                    return "精选";
            }
        })()
    }
</div>

//<Link to={url}>

const TonyPostCard = ({ post }) => {
    const url = `/${post.frontmatter.url}/`

    let title = post.frontmatter.title,
        description = post.frontmatter.description;

    if (process.env.GATSBY_TARGET_LANG) {
        if (post.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`]) {
            title = post.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`];
        }
        if (post.frontmatter[`description_${process.env.GATSBY_TARGET_LANG}`]) {
            description = post.frontmatter[`description_${process.env.GATSBY_TARGET_LANG}`];
        }
    }

    let featuredimage = post.frontmatter.featuredimage;
    if (featuredimage) {
        if (process.env.GATSBY_TARGET_LANG && post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`]) {
            featuredimage = post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`];
        }
    }

    return (
        <div to={url} css={css`
            padding: var(--margin-quarter);
            margin-bottom: var(--margin-quarter);
            display: block;
            max-width: 12rem;
        `}>
            <header css={css`
                display: block;
            `}>
                {featuredimage &&
                    <Link to={url}><div css={css`
                        padding: 30% 50%;
                        background: var(--color-secondary) no-repeat center center;
                        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
                        border-radius: 20px;
                        background-image: url(${featuredimage.publicURL});
                        background-size: cover;
                    `}></div></Link>}
            </header>
            <div className="everything-but-image">
                <div css={css`
                        display: flex;
                        align-items: center;
                        margin-top: var(--margin-quarter);
                    `}>
                    <Link to={url}>
                        {post.frontmatter.featuredpost && FeaturedIndicator}
                        <h4 css={css`
                                display: inline;
                                vertical-align: middle;
                                font-size: 16px;
                            `}>{title}</h4>
                    </Link>
                </div>

                <div css={css`
                    font-weight: var(--font-bold);
                    font-size: 0.6rem;
                `}>
                    {getCustomFormatedDate(post.frontmatter.date)}
                </div>
            </div>
        </div>
    )
}


export default TonyPostCard
