import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const style = css`
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 6rem;

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
    }
`;

const FooterNavigation = () => (
    <>
        <ul css={style}>
            <li>
                <a href="https://www.orchid.com" rel="noopener noreferrer">Orchid</a>
            </li>
            <li>
                <a href="https://www.orchid.com/how-it-works" rel="noopener noreferrer">How it Works</a>
            </li>
            <li>
                <a href="https://www.orchid.com/about-us" rel="noopener noreferrer">About Us</a>
            </li>
            <li>
                <a href="https://www.orchid.com/download" rel="noopener noreferrer">Download</a>
            </li>
        </ul>
        <ul css={style}>
            <li>
                <a href="https://www.orchid.com/events" rel="noopener noreferrer">Events</a>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <a href="https://www.orchid.com/faq" rel="noopener noreferrer">FAQ</a>
            </li>
            <li>
                <a href="https://www.orchid.com/contact" rel="noopener noreferrer">Contact</a>
            </li>
        </ul>
    </>
);

export default FooterNavigation;
