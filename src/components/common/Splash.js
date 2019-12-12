import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'

const Splash = (props) => {

    return (<div className="splash-circuit" css={css`
        padding-top: 2rem;
        display: flex;
        flex-direction: column-reverse;
        @media (max-width: 870px) {
            overflow: hidden;
        }
        @media (min-width: 871px) {
            flex-direction: column;
        }
    `}>
        <div className="splash-circuit-image" css={css`
            max-width: 63rem;
            box-sizing: border-box;
            
            width: 100%;
            position: relative;
            margin: auto;

            &:before {
                pointer-events: none;
                content: "";
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                max-width: 100%;
                width: 100%;
                height: 222px;
                background-image: url(/img/circuit.svg);
                background-repeat: no-repeat;
                background-position: top left;
                background-size: auto 100%;
                transform: translateZ(-1px);
                
                @media (min-width: 871px) {
                    width: 900px;
                    height: 333px;
                    bottom: unset;
                    top: -10px;
                    left: -50px;
                    background-size: contain;
                }
            }
        `}></div>
        <div className="splash-circuit-grid" css={css`
            max-width: 63rem;
            margin: auto;
            box-sizing: border-box;

            width: 100%;
            display: flex;
            justify-content: space-between;
            grid-gap: 2rem;
            position: relative;
            z-index: 1;
        `}>
            <div className="splash-circuit-grid-item" css={css`
                padding-left: 2rem;
                padding-right: 2rem;
                padding-top: 1rem;
                padding-bottom: 0rem;
                
                @media (min-width: 871px) {
                    padding-top: 4rem;
                    padding-bottom: 3rem;
                    width: 60%;
                    max-width: 600px;
                }
            `}>
                <h1>
                    <Link css={css`
                        color: var(--color-primary);
                        font-size: 32px;
                        @media (min-width: 871px) {
                            font-size: 60px;
                        }
                        &:hover {
                            color: var(--color-primary);
                            text-decoration: none;
                        }
                    `}>
                        Blog
                    </Link>
                </h1>
                { (props.subtitle || props.description) && <div className="splash-circuit-grid-text" css={css`
                    @media (min-width: 871px) {
                        margin-top: 4rem;
                    }
                `}>
                    { props.subtitle && <h3 css={css`
                        color: #53696a;
                        margin-bottom: 2rem;
                        font-size: 1.5rem;
                    `}>{props.subtitle}</h3> }
                    { props.description && <p>{props.description}</p> }
                </div> }
            </div>
            {props.image && 
                <div className="splash-circuit-grid-item" css={css`
                    justify-content: space-around;
                    -webkit-box-align: center;
                    align-items: center;
                    @media (min-width: 871px) {
                        width: 40%;
                        margin-left: 2rem;
                        padding-top: 4rem;
                    }
                `}>
                    <img className="splash-circuit-feature" alt="" src={props.image}/>
                </div>}
        </div>
    </div>);
}



export default Splash
