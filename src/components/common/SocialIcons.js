import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const SocialIcon = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
    a {
        display: block;
    }
    @media (min-width: 871px) {
        min-height: 57px;
    }
`;

const SocialIcons = ({ children }) => {
    return (<>
        <SocialIcon className="social-button first">
            <a href="https://medium.com/orchid-labs" target="_blank">
                <img width="30" height="30" src='/images/icons/social-medium.svg' alt='Medium' />
            </a>
        </SocialIcon>
        <SocialIcon className="social-button">
            <a href="https://twitter.com/OrchidProtocol" target="_blank">
                <img width="30" height="30" src='/images/icons/social-twitter.svg' alt='Twitter' />
            </a>
        </SocialIcon>
        <SocialIcon className="social-button">
            <a href="https://www.t.me/OrchidOfficial" target="_blank">
                <img css={css`@media (min-width: 871px) {margin-top:-1px;}`} width="32" height="32" src='/images/icons/social-telegram.svg' alt='Telegram' />
            </a>
        </SocialIcon>
        <SocialIcon className="social-button">
            <a href="https://github.com/OrchidProtocol" target="_blank">
                <img width="30" height="30" src='/images/icons/social-github.svg' alt='Github' />
            </a>
        </SocialIcon>
    </>)
}

export default SocialIcons
