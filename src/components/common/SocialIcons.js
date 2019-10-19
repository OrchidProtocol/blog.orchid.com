import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import config from '../../utils/siteConfig'

const SocialIcon = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SocialIcons = ({ children }) => {
    return (<ul css={css`
        padding: 0;
        margin: 0;
        list-style: none;
    `}>
        <SocialIcon>
            <a href="https://medium.com/orchid-labs" target="_blank">
                <img width="30" height="30" src='/images/icons/social-medium.svg' alt='mMedium' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a href="https://twitter.com/OrchidProtocol" target="_blank">
                <img width="30" height="30" src='/images/icons/social-twitter.svg' alt='Twitter' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a href="https://www.t.me/OrchidOfficial" target="_blank">
                <img width="30" height="30" src='/images/icons/social-telegram.svg' alt='Telegram' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a href="https://github.com/orchidsource" target="_blank">
                <img width="30" height="30" src='/images/icons/social-github.svg' alt='Github' />
            </a>
        </SocialIcon>
    </ul>)
}

export default SocialIcons
