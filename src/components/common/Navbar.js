import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import NavbarNavigation from './NavbarNavigation.js'
import { Location } from '@reach/router'

const Container = styled.div`
    background-color: var(--color-bg);
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: var(--max-container-width);
    margin: 0 auto;
    --link-color: #53696a;
    @media (max-width: 870px) {
        padding: 1rem;
        body.no-js & {
            flex-wrap: wrap;
        }
    }
`;

function Navbar(props) {
    const [active, setActive] = useState(false);

    return <Container data-active={active}>
        {/* The main header section on top of the screen */}
        <Header>
            <a href="https://www.orchid.com/" css={css`
                @media (max-width: 871px) {
                    display: none;
                }
            `}>
                <img css={css`
                    max-width: 100%;
                    margin: -1rem;
                    padding: 1rem;
                    box-sizing: content-box;
                    display: block;
                `} width="93" height="24" src="/images/orchid-logo-text.svg" alt="Orchid" />
            </a>

            <a href="https://www.orchid.com/" css={css`
                @media (min-width: 870px) {
                    display: none;
                }
            `}>
                <img css={css`
                        max-width: 100%;
                        margin: -1rem;
                        padding: 1rem;
                        box-sizing: content-box;
                        width: 35px;
                        height: auto;
                    `} width="35" height="30" src="/images/orchid-logo-small.svg" alt="Orchid" />
            </a>

            <div css={css`
                padding: 1rem;
                margin: -1rem;
                cursor: pointer;

                @media (min-width: 871px) {
                    display: none;
                }
                body.no-js & {
                    display: none;
                }
            `} onClick={() => {
                    setActive(!active);
                }}>
                <img src={'/images/icons/hamburger.svg'} alt='Open Menu' />
            </div>

            <div css={css`
                text-align: right;
                @media screen and (max-width: 870px) {
                    position: fixed;
                    body.no-js & {
                        position: static;
                    }
                    z-index: 9999;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    ${active ? `background: rgba(0,0,0,0.5);` : `background: rgba(0,0,0,0);`}
                    transition-duration: .4s;
                    transition-timing-function: cubic-bezier(.25,.5,.5,1);

                    pointer-events: none;

                    & > div {
                        display: flex;
                        flex-direction: column;
                        position: fixed;
                        ${active ? `transform: translateX(0%);` : `transform: translateX(100%);`}

                        body.no-js & {
                            position: static;
                            transform: none;
                        }

                        background-color: var(--color-bg);
                        box-shadow: -4px 0 8px rgba(0,0,0,.1), 0 0 4px rgba(0,0,0,.05);

                        transition-duration: .4s;
                        transition-timing-function: cubic-bezier(.25,.5,.5,1);
                        top: 0;
                        right: 0;
                        bottom: 0;
                        padding: 1rem;
                        width: 10rem;
                        box-sizing: content-box;
                        body.no-js & {
                            width: 100%;
                            box-sizing: border-box;
                            box-shadow: none;
                        }
                        color: var(--color-base);
                    }
                }
            `}>
                <div css={css`
                    pointer-events: auto;
                    display: flex;
                    li a {
                        font-size: var(--font-size-small);
                    }
                    @media (max-width: 870px) {
                        li {
                            padding-top: 10px;
                            line-height: 1.75;
                        }
                        .social-button {
                            display: none;
                        }
                    }
                `}>
                    <div css={css`
                        padding: 0 0 1rem 0;
                        width: 100%;
                        flex-flow: row-reverse nowrap;

                        @media (min-width: 871px) {
                            display: none;
                        }
                        body.no-js & {
                            display: none;
                        }
                    `} onClick={() => {
                            setActive(!active);
                        }}>
                        <img src={'/images/icons/close.svg'} alt='Close Menu' />
                    </div>
                    <NavbarNavigation data={[
                        {
                            url: 'https://www.orchid.com/',
                            label: 'Home'
                        },
                        {
                            url: 'https://www.orchid.com/join',
                            label: 'Join Now'
                        },
                        {
                            url: 'https://www.orchid.com/how-it-works',
                            label: 'How It Works'
                        },
                        {
                            url: 'https://www.orchid.com/oxt',
                            label: 'OXT'
                        },
                        {
                            url: 'https://www.orchid.com/about-us',
                            label: 'About'
                        },
                        {
                            url: '/',
                            label: 'Blog'
                        },
                        {
                            url: 'https://www.orchid.com/contact',
                            label: 'Contact'
                        }
                    ]}>
                        <li css={css`
                            cursor: pointer;
                            position: relative;

                            color: var(--link-color);
                            font-weight: var(--font-bold);
                            font-size: 14px;
                            

                            @media (min-width: 871px) {
                                padding-left: 1rem !important;
                                padding-right: 1rem !important;
                            }
                            
                            li {
                                position: relative;
                                display: block;
                                border-right: 1px var(--orc-gray) solid;
                                padding-right: 0.25rem;

                                @media (min-width: 871px) {
                                    padding-right: 0;
                                    border-right: none;
                                    text-align: center;

                                    a {
                                    padding: 7px 0;
                                    display: inline-block;
                                    width: 100%;
                                    }
                                }
                            }
                        `}>
                            <input type="checkbox" id="navbar-language-selector-checkbox" css={css`
                                display: none;
                                
                                &:checked~.navbar-language-selector-list {
                                    @media ( min-width:871px ) {
                                        display: block;
                                        animation-name: navbar-language-selector-animation;
                                        animation-timing-function: ease-out;
                                        animation-duration: 0.3s;
                                    }
                                }
                            `} />
                            <label for="navbar-language-selector-checkbox" css={css`
                                position: absolute;
                                display: block;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                cursor: pointer;
                            `}></label>

                            <span class="phantom-a">
                                <img alt="" css={css`
                                    vertical-align: top;
                                `} width="20" height="20" src="/images/globe.svg" />

                                <span>English</span>
                            </span>
                            <ul className="navbar-language-selector-list" css={css`
                                padding: 0;

                                @media ( min-width:871px ) {
                                    display: none;
                                    position: absolute;
                                    top: 100%;
                                    top: calc(100% + 0.5rem);
                                    left: 0%;
                                    z-index: 100;
                                    padding: 0.5rem;
                                    background: #fff;
                                }

                                width: auto;
                                min-width: 100%;
                                list-style: none;
                                margin: 0;

                                &>li:nth-child(1)#navbar-language-selector-list-item-first {
                                    @media ( min-width:871px ) {
                                        padding-top: 0;
                                    }
                                }
                            `}>

                                <Location>
                                    {({ location }) => {
                                        return <>
                                            <li id="navbar-language-selector-list-item-first"><a class="phantom-a" href={`//www.ko.orchid.com`}>Korean</a></li>
                                            <li><a class="phantom-a" href={`//www.orchid.com`}>English</a></li>
                                            <li><a class="phantom-a" href={`//www.ja.orchid.com`}>Japanese</a></li>
                                            <li><a class="phantom-a" href={`//www.zh.orchid.com`}>Mandarin</a></li>
                                        </>
                                    }}
                                </Location>
                            </ul>
                        </li>
                    </NavbarNavigation>
                </div>
            </div>
        </Header>
    </Container>
}

export default Navbar;
