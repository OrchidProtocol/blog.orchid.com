import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'
import { Location } from '@reach/router'

import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Splash from './Splash.js'
import '../all.css'

const TemplateWrapper = ({ children, bodyClass, customText }) => {

    return (
        <>
            <Helmet>
                <html lang={process.env.GATSBY_TARGET_LANG} />
                <body css={bodyClass} />
                <link rel="icon" type="image/ico" href="/img/favicon.ico" />
                <link rel="icon" type="image/png" href="/img/favicon.png" />
                <link rel="manifest" href="/manifest.webmanifest" />
                <meta name="theme-color" content="#5f45ba" />
            </Helmet>

            <Location>
                {({ location }) => {
                    return <Helmet>
                        <link rel="alternate" href={`https://blog.ko.orchid.com${location.pathname}`} hreflang="ko" />
                        <link rel="alternate" href={`https://blog.orchid.com${location.pathname}`} hreflang="x-default" />
                        <link rel="alternate" href={`https://blog.ja.orchid.com${location.pathname}`} hreflang="ja" />
                        <link rel="alternate" href={`https://blog.zh.orchid.com${location.pathname}`} hreflang="zh" />
                        <link rel="alternate" href={`https://blog.id.orchid.com${location.pathname}`} hreflang="id" />
                        <link rel="alternate" href={`https://blog.ru.orchid.com${location.pathname}`} hreflang="ru" />

                        {
                            process.env.GATSBY_TARGET_LANG === "en" || !process.env.GATSBY_TARGET_LANG ?
                                <meta rel="canonical" href={`https://blog.orchid.com${location.pathname}`} /> :
                                <meta rel="canonical" href={`https://blog.${process.env.GATSBY_TARGET_LANG.toLowerCase()}.orchid.com${location.pathname}`} />
                        }
                    </Helmet>
                }}
            </Location>

            <div className="viewport">

                <script dangerouslySetInnerHTML={{
                    /*Removes the 'no-js' class*/
                    __html: `
                    document.addEventListener('DOMContentLoaded', ()=>{
                        document.body.classList.remove('no-js');
                    });
                    document.body.classList.remove('no-js');
                    `,
                }}></script>

                <Navbar />
                <div css={css`
                    background-color: #52319c;
                    transition: background-color 0.25s ease;
                    &:hover {
                        background-color: var(--orc-purple);
                    }
                    position: relative;
                    padding: 2rem 0;
                    color: white;
                    text-align: left;
                    img {
                        height: auto;
                    }
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    @media (max-width: 1200px) {
                        flex-direction: column;
                    }
                `}>
                    <a css={css`
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 100;
                    `} href="https://www.orchid.com/priv8"></a>
                    <div css={css`
                        width: 75%;
                        max-width: 350px;
                        position: relative;
                        @media (max-width: 1200px) {
                            width: 100%;
                            max-width: 250px;
                            margin: -1rem 0;
                        }
                    `}>
                        <img alt="" height="246" src="/img/priv8-logo.svg" width="500" />
                        <picture css={css`
                            position: absolute;
                            top: 10%;
                            left: 32.5%;
                            width: 35%;
                            height: 100%;
                        `}>
                            <source srcset="/img/priv8.webp" type="image/webp" />
                            <source srcset="/img/priv8.png" type="image/png" />
                            <img css={css`width: 100%;height: auto;`} alt="Priv8" src="/img/priv8.webp" height="175" width="175" />
                        </picture>
                    </div>
                    <div css={css`
                        padding: 1rem;
                        @media (max-width: 1200px) {
                            padding-bottom: 0;
                        }
                    `}>
                        <h2 css={css`
                            font-weight: 300;
                            font-size: 28px;
                            letter-spacing: 3px;
                            font-family: "Noto Sans",sans-serif;
                            margin-bottom: 1rem;
                            color: white;
                            @media (max-width: 1200px) {
                                display: none;
                            }
                        `}>A VIRTUAL SUMMIT ON DIGITAL PRIVACY</h2>
                        <p css={css`
                            @media (max-width: 1200px) {
                                font-size: 16px;
                                margin: 0;
                            }
                        `}>
                            Featuring Edward Snowden, Audrey Tang, Zooko Wilcox, Cindy Cohn &amp; more!
                        </p>
                        <h3 css={css`
                            font-weight: 500;
                            font-size: 21px;
                            font-family: "Noto Sans",sans-serif;
                            color: white;
                            @media (max-width: 1200px) {
                                display: none;
                            }
                        `}>
                            March 23 - 25, 2021
                        </h3>
                    </div>
                </div>


                <Splash customText={customText} />

                <main css={css`
                font-size: 16px;
            `}>
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

                <div css={css`
                background-color: var(--color-bg);
                width: 100%;
                position: relative;
                overflow: hidden;
            `}>
                    <div css={css`
                    max-width: 63rem;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    margin: auto;
                    overflow: visible;
                    @media (min-width: 871px) {
                        left: calc(50% - 31.5rem);
                    }
                `}>
                        <img alt="" css={css`
                        bottom: 0;
                        left: -4rem;
                        height: 14.25rem;
                        width: auto;
                        position: absolute;
                        @media (max-width: 870px) {
                            display: none;
                        }
                    `} src="/img/coral-electric.svg" />
                        <img alt="" css={css`
                        bottom: 0;
                        left: 2rem;
                        position: absolute;
                        @media (max-width: 870px) {
                            display: none;
                        }
                    `} src="/img/coral-real.svg" />
                        <img alt="" css={css`
                        right: 5rem;
                        bottom: 0;
                        max-width: 4rem;
                        position: absolute;
                        @media (min-width: 871px) {
                            display: none;
                        }
                    `} src="/img/coral-real-mobile.svg" />
                        <img alt="" css={css`
                        position: absolute;
                        right: 0;
                        top: 3rem;
                    `} src="/img/footer-fish.svg" />
                    </div>
                    {/* The footer at the very bottom of the screen */}
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default TemplateWrapper
