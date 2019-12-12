import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import config from '../../utils/config';

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


const items = [];

for (let i = 0; i < config.footer_navigation.length; i++) {
    const navItem = config.footer_navigation[i];
    const internalLink = navItem.url.match(/^\s?http(s?)/gi);

    const className =
        internalLink ? "active-link" : "";
    items.push(
        <li key={i} className={className}>
            {internalLink ? (
                <a css={css`display:block;`} href={navItem.url} rel="noopener noreferrer">
                    {navItem.label}
                </a>
            ) : (
                    <Link css={css`display:block;`} to={navItem.url}>{navItem.label}</Link>
                )}
        </li>
    );
}

const FooterNavigation = () => (
    <>
        <ul css={style}>
            {items.splice(0,4)}
        </ul>
        <ul css={style}>
            {items.length > 0 ? items : <></>}
        </ul>
    </>
);

export default FooterNavigation;
