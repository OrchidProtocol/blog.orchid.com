import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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

const Navigation = ({ data }) => (
    <ul css={css`
        list-style: none;
        margin: 0;
        padding: 0;
    `}>
        {data.map((navItem, i) => {
            return <li key={i}
            css={css`
                display: block;
                margin: 0;
                line-height: 1.75;
                
                & > a {
                    color: var(--link-color);
                    font-weight: var(--font-bold);
                    font-size: 16px;
                    position: relative;
                    @media (max-width: 800px) {
                        font-size: 14px;
                        padding: 10px 0;
                    }

                    &:hover {
                        text-decoration: none;
                    }
                    
                    &[aria-current="page"] {
                        color: var(--color-primary);
                    }
                }
            `}>
                {(navItem.url.match(/^\s?http(s?)/gi)) ?
                    <a href={navItem.url} rel="noopener noreferrer">{navItem.label}</a>
                    : <Link to={navItem.url}>{navItem.label}</Link>}
            </li>
        })}
    </ul>
)

Navigation.defaultProps = {
    data: [],
}

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default Navigation
