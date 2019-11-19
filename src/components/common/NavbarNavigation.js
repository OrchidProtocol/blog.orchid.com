import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { Link } from "gatsby";

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

const style = css`
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
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
            font-size: 14px;
            position: relative;
            @media (max-width: 870px) {
                font-size: 14px;
                padding: 10px 0;
            }

            &:hover {
                text-decoration: none;
            }

            @media (min-width: 871px) {
                &[href="/"]:after {
                    content: " ";
                    position: absolute;
                    left: 0.5rem;
                    right: 0.5rem;
                    bottom: -3px;
                    height: 4px;
                    background: #5f45ba;
                    border-radius: 100vmax;
                }
            }
        }
    }

    & > li:first-of-type {
        @media (min-width: 871px) {
            display: none;
        }
    }

    & > li.active-link > a::after {
        @media (min-width: 871px) {
            content: " ";
            position: absolute;
            left: 0.5rem;
            right: 0.5rem;
            bottom: -3px;
            height: 4px;
            background: #5f45ba;
            border-radius: 100vmax;
        }
    }
`;

const Navigation = ({ data }) => {
    let i = 0;
    const items = [];

    for (let i = 0; i < data.length; i++) {
        const navItem = data[i];

        const className =
            navItem.url === "https://blog.orchid.com/" ? "active-link" : "";
        items.push(
            <li key={i} className={className}>
                {navItem.url.match(/^\s?http(s?)/gi) ? (
                    <a href={navItem.url} rel="noopener noreferrer">
                        {navItem.label}
                    </a>
                ) : (
                        <Link to={navItem.url}>{navItem.label}</Link>
                    )}
            </li>
        );
    }

    return <ul css={style}>
        {items}
    </ul>
};

Navigation.defaultProps = {
    data: []
};

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default Navigation;
