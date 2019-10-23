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
                display: inline-block;
                padding: 10px 0 0 0;
                margin: 0;
                text-transform: uppercase;
                line-height: 1.75;

                @media (max-width: 870px) {
                    display: block;
                }

                & > a {
                    padding: 0.5rem;
                    color: var(--link-color);
                    font-weight: var(--font-bold);
                    font-size: 16px;
                    position: relative;
                    @media (max-width: 870px) {
                        font-size: 14px;
                        padding: 10px 0;
                    }

                    &:hover {
                        text-decoration: none;
                    }

                    @media (min-width: 799px) {
                        &[href="/"]:after {
                            content: " ";
                            position: absolute;
                            left: .5rem;
                            right: .5rem;
                            bottom: -3px;
                            height: 4px;
                            background: #5f45ba;
                            border-radius: 100vmax;
                        }
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
