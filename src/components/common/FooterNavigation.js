import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const style = css`
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
        display: block;
        margin: 0;
        line-height: 1.75;
    }
    & > li > a {
        color: var(--link-color);
        position: relative;
        @media (max-width: 870px) {
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
`;

const FooterNavigation = () => (
    <ul css={style}>
        <li>
            <a href="https://www.orchid.com" rel="noopener noreferrer">Orchid</a>
        </li>
        <li>
            <a href="https://www.orchid.com/network" rel="noopener noreferrer">Network</a>
        </li>
        <li>
            <a href="https://www.orchid.com/vision" rel="noopener noreferrer">Vision</a>
        </li>
        <li>
            <a href="https://www.orchid.com/download" rel="noopener noreferrer">Download</a>
        </li>
        <li>
            <a href="https://www.orchid.com/about-us" rel="noopener noreferrer">About Us</a>
        </li>
        <li>
            <a href="https://www.orchid.com/events" rel="noopener noreferrer">Events</a>
        </li>
        {/* <li>
            <Link to="/">Blog</Link>
        </li> */}
    </ul>
);

export default FooterNavigation;
