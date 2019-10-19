import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Tag = styled.span`
    display: inline-block;
    background-color: var(--color-bg);
    font-size: var(--font-size-small);
    padding: 5px 10px;
    margin: 5px 8px 5px 0;
    border-radius: 2px;
    text-decoration: none;
    &:hover {text-decoration: none;}
`;

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const Navigation = ({ post, linkTags }) => {
    const items = [];
    if (post && post.tags) {
        for(let i = 0; i < Math.min(3, post.tags.length); i++) {
            if (post.tags[i].slug !== 'homepage') {
                if(linkTags)
                    items.push(<Link key={i} to={`/tag/${post.tags[i].slug}`} css={css`
                            &:hover {
                                text-decoration: none;
                            }
                        `}>
                        <Tag>{post.tags[i].name}</Tag>
                    </Link >)
                else 
                    items.push(<Tag key={i}>{/*(i !== 0) ? ', ' : ''*/}{post.tags[i].name}</Tag>)
            }
        }
    }
    return (<span className="tags-container">{items}</span>);
}

Navigation.defaultProps = {
    post: {},
    linkTags: false,
}


export default Navigation
