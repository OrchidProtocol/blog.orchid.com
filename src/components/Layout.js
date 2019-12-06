import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'

import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Splash from './Splash.js'
import './all.css'

const TemplateWrapper = ({ children, bodyClass }) => {

    return (
    <>
        <Helmet>
            <html lang="en" />
            <body css={bodyClass} />
        </Helmet>

        <div className="viewport">

            <script dangerouslySetInnerHTML={{
                /*Removes the 'no-js' class*/
                __html: `
                    document.addEventListener('DOMContentLoaded', (()=>{
                        document.body.classList.remove('no-js');
                    })
                    document.body.classList.remove('no-js');
                    `,
            }}></script>

            <Navbar />

            <Splash />

            <main css={css`
                font-size: 16px;
                padding: 0 4rem 4rem 4rem;
                @media (max-width: 870px) {
                    padding: 1rem;
                }
                overflow-x: hidden;
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
                    `} src="/images/coral-electric.svg" />
                    <img alt="" css={css`
                        bottom: 0;
                        left: 2rem;
                        position: absolute;
                        @media (max-width: 870px) {
                            display: none;
                        }
                    `} src="/images/coral-real.svg" />
                    <img alt="" css={css`
                        right: 5rem;
                        bottom: 0;
                        max-width: 4rem;
                        position: absolute;
                        @media (min-width: 871px) {
                            display: none;
                        }
                    `} src="/images/coral-real-mobile.svg" />
                    <img alt="" css={css`
                        position: absolute;
                        right: 0;
                        top: 3rem;
                    `} src="/images/footer-fish.svg" />
                </div>
                {/* The footer at the very bottom of the screen */}
                <Footer />
            </div>
        </div>

    </>
  )
}

export default TemplateWrapper
