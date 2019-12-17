import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Tags from './Tags'

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
    {
        (()=>{
            switch (process.env.GATSBY_TARGET_LANG) {
                default:
                    return "Featured";
                break;
                case "ja":
                    return "おすすめ";
                break;
                case "ko":
                    return "주요 게시물";
                break;
                case "zh":
                    return "精选";
                break;
            }
        })()
    }
</div>

//<Link to={url}>

const PostCard = ({ post, number }) => {
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

    return (
        <div to={url} css={css`
            padding-bottom: var(--margin);
            margin-bottom: var(--margin);
            display: block;
        `}>
            <header css={css`
                display: block;
            `}>
                {post.frontmatter.featuredimage &&
                    <Link to={url}><div css={css`
                        padding: 30% 50%;
                        background: var(--color-secondary) no-repeat center center;
                        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
                        border-radius: 20px;
                        background-image: url(${post.frontmatter.featuredimage.childImageSharp ? post.frontmatter.featuredimage.childImageSharp.fluid.src : post.frontmatter.featuredimage.publicURL});
                        background-size: cover;
                    `}></div></Link>}
            </header>
            <div className="everything-but-image">
                <div css={css`
                    font-weight: var(--font-bold);
                    margin: var(--margin-half) 0;
                `}>
                    {getCustomFormatedDate(post.frontmatter.date)}
                </div>

                <Tags tags={post.frontmatter.tags} linkTags={true} />

                <div css={css`
                        margin: var(--margin-half) 0;
                        display: flex;
                        align-items: center;
                    `}>
                    <Link to={url}>
                        {post.frontmatter.featuredpost && FeaturedIndicator}
                        <h2 css={css`
                                display: inline;
                                vertical-align: middle;
                            `}>{title}</h2>
                    </Link>
                </div>

                <section className="post-card-excerpt"><Link to={url} css={css`&:hover{text-decoration:none;}`}>{description}</Link></section>

                <div css={css`
                    text-align: right;
                    color: var(--color-primary);
                    font-weight: var(--font-bold);
                `}>
                    <Link to={url}>
                        {
                            (()=>{
                                switch (process.env.GATSBY_TARGET_LANG) {
                                    default:
                                        return "Read More";
                                    break;
                                    case "ja":
                                        return "続きを読む";
                                    break;
                                    case "ko":
                                        return "자세한 내용 읽기";
                                    break;
                                    case "zh":
                                        return "了解其他文章";
                                    break;
                                }
                            })()
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default PostCard
