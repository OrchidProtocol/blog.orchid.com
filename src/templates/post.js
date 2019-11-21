import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Tags from '../components/common/Tags'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import Splash from '../components/common/Splash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import getCustomFormatedDate from '../utils/date';

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*https://www.facebook.com/v3.3/dialog/share?href=https%3A%2F%2Flink.medium.com%2FxzHWaT7PC0
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <Splash />
                <div className="container" css={css`
                    position: relative;
                    z-index: 2;
                `}>
                    <article className="content">

                        { (new Date(post.published_at) > new Date("Thu Oct 07 2019 12:22:21 GMT-0600 (Central Standard Time)")) ?
                            <figure css={css`
                                margin: 0;
                                width: 100%;
                                height: auto;
                                -o-object-fit: contain;
                                object-fit: contain;
                                -o-object-position: center;
                                object-position: center;
                            `}>
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
                                `} src={ post.feature_image } alt={ post.title } />
                            </figure> : null }

                        <section css={css`
                            margin-top: 0;
                        `} className="post-full-content">
                            <h1 css={css`
                                font-size: 1.75rem;
                                @media (min-width: var(--mobile-breakpoint)) {
                                    font-size: 52px;
                                }
                                margin-bottom: 0;
                            `}>{post.title}</h1>
                            <span css={css`
                                display: block;
                            `}>{getCustomFormatedDate(post.published_at)}</span>

                            <br />

                            {/* The main post content */ }
                            <section
                                css={css`
                                    a {
                                        text-decoration: underline !important;
                                    }
                                `}
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                            <div css={css`
                                margin-top: var(--margin);
                                @media (min-width: 719px) {
                                    display: flex;
                                    justify-content: space-between;
                                }
                            `}>
                                <Tags post={post} linkTags={true} />

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
                                    <a target="_blank"
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("\""+post.title+"\" by @OrchidProtocol https://blog.orchid.com/"+post.slug+"/")} `}>
                                        <FontAwesomeIcon css={css`
                                            width: var(--social-icon-size) !important;
                                            height: auto;
                                            color: var(--color-link);
                                        `} icon={faTwitter} />
                                    </a>
                                    
                                    <a target="_blank"
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://blog.orchid.com/"+post.slug+"/")} `}>
                                        <FontAwesomeIcon css={css`
                                            width: var(--social-icon-size) !important;
                                            height: auto;
                                            color: var(--color-link);
                                        `} icon={faFacebookSquare} />
                                    </a>
                                    
                                    <a target="_blank"
                                        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent("https://blog.orchid.com/"+post.slug+"/")}`}>
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
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`