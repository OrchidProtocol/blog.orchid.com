import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import config from '../../utils/siteConfig'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Splash from './Splash.js'


// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
    <>
        <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body css={bodyClass} />
        </Helmet>

        <div className="viewport">

            <script dangerouslySetInnerHTML={{
                /*Removes the 'no-js' class*/
                __html: `
                        document.body.classList.remove('no-js');
                        window.requestAnimationFrame(()=>{
                            document.body.classList.remove('no-js');
                        })
                    `,
            }}></script>

            <Navbar site={site} />

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
                    <img css={css`
                        bottom: 0;
                        left: -4rem;
                        height: 14.25rem;
                        width: auto;
                        position: absolute;
                        @media (max-width: 870px) {
                            display: none;
                        }
                    `} src="/images/coral-electric.svg" />
                    <img css={css`
                        bottom: 0;
                        left: 2rem;
                        position: absolute;
                        @media (max-width: 870px) {
                            display: none;
                        }
                    `} src="/images/coral-real.svg" />
                    <img css={css`
                        right: 5rem;
                        bottom: 0;
                        max-width: 4rem;
                        position: absolute;
                        @media (min-width: 871px) {
                            display: none;
                        }
                    `} src="/images/coral-real-mobile.svg" />
                    <img css={css`
                        position: absolute;
                        right: 0;
                        top: 3rem;
                    `} src="/images/footer-fish.svg" />
                </div>
                {/* The footer at the very bottom of the screen */}
                <Footer site={site} />
            </div>
        </div>

    </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
