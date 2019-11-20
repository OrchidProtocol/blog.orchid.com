import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Tag = styled.span`
    
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
                    items.push(
                        <li key={i}>
                            <Link to={`/tag/${post.tags[i].slug}`} css={css`
                                    &:hover {
                                        text-decoration: none;
                                    }
                                `}>
                                <Tag>{post.tags[i].name}</Tag>
                            </Link>
                        </li>
                    )
                else 
                    items.push(<Tag key={i}>{/*(i !== 0) ? ', ' : ''*/}{post.tags[i].name}</Tag>)
            }
        }
    }
    return (<ul css={css`
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: var(--font-bold);
        color: var(--color-primary);

        font-style: italic;

        a {
            color: var(--color-primary);
        }

        & > li {
            display: inline-block;
            margin: 0;
            padding: 0;

            &:before {
                display: inline-block;
                content: '/';
                margin: 0 5px;
            }

            &:nth-child(1):before {
                display: none;
            }
        }
    `}>
        {items}
    </ul>);
}

Navigation.defaultProps = {
    post: {},
    linkTags: false,
}


export default Navigation
