import React, { useState } from 'react'
import { css } from '@emotion/core'
import NavbarNavigation from './NavbarNavigation.js'
import SocialIcons from './SocialIcons.js';

function Navbar (props) {
    const site = props.site;

    const [active, setActive] = useState(false);

    return <div css={css`
        background-color: var(--color-bg);
    `} data-active={active}>
        {/* The main header section on top of the screen */}
        <header css={css`
            display: flex;
            justify-content: space-between;
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
        `}>
            <a href="https://www.orchid.com/">
                <img css={css`
                    max-width: 100%;
                    margin: -1rem;
                    padding: 1rem;
                    box-sizing: content-box;
                    @media (max-width: 870px) {
                        width: 35px;
                        height: auto;
                    }
                `} width="97" height="108" src={site.logo} alt={site.title} />
            </a>

            <div css={css`
                padding: 1rem;
                margin: -1rem;
                cursor: pointer;

                @media (min-width: 799px) {
                    display: none;
                }
                body.no-js & {
                    display: none;
                }
            `} onClick={()=>{
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
                        body.no-js & {
                            position: static;
                        }
                        top: 0;
                        right: 0%;
                        ${active ? `transform: translate(0%, 0%);` : `transform: translate(100%, 0%);`}

                        body.no-js & {
                            transform: none;
                        }
                        transition-duration: .4s;
                        transition-timing-function: cubic-bezier(.25,.5,.5,1);
                        bottom: 0;
                        background-color: var(--color-bg);
                        box-shadow: -4px 0 8px rgba(0,0,0,.1), 0 0 4px rgba(0,0,0,.05);
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
                `}>
                    <div css={css`
                        padding: 0 0 1rem 0;
                        width: 100%;
                        flex-flow: row-reverse nowrap;

                        @media (min-width: 799px) {
                            display: none;
                        }
                        body.no-js & {
                            display: none;
                        }
                    `} onClick={()=>{
                        setActive(!active);
                    }}>
                        <img src={'/images/icons/close.svg'} alt='Close Menu' />
                    </div>
                    <NavbarNavigation data={site.navigation} />
                    <div css={css`
                        margin-left: 50px;

                        @media (max-width: 870px) {
                            body.no-js & {
                                width: 100%;
                                margin: 0;
                                display: none;
                            }
                        }
                        li {
                            display: inline-block;
                            padding: .5rem;
                            filter: saturate(0);
                        }
                    `}>
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </header>
    </div>
}

export default Navbar;
