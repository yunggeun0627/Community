import { css } from "@emotion/react";

export const bodylayout = css`
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    pointer-events: none !important;
    flex: 1;
    align-items: stretch;
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    border: 0rem solid black;
    flex-direction: column;
    list-style: none;
    margin: 0rem;
    min-height: 0rem;
    min-width: 0rem;
    padding: 0rem;
    text-decoration: none;
    z-index: 0;
`;

export const headlayout = css`
    z-index: 1;
    position: absolute;
    pointer-events: auto;
    right: 0rem;
    top: 0rem;
    left: 0rem;

    & > button {
        position: absolute;
        background-color: #ffffff;
        border-color: #cfd9de;
        transition-duration: 0.2s;
        cursor: pointer;
    }
    
    & > div {
        color: #0f1419;
    }
    
    & > span {
        line-height: 2rem;
        word-wrap: break-word;
        font-family: inherit;
        max-width: 100%;
        min-width: 0%;
        font-size: 1.5rem;
        white-space: nowrap;
        text-align: inherit;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`;

export const bannerheader = css`
    min-height: 100dvh;
    z-index: 0;
    flex-direction: row;
    width: 100%;
    & > * {
        pointer-events: auto;
    }
`

export const headerlayout = css`
    z-index: 3;
    align-items: flex-end;
    user-select: none;
    flex-grow: 1;
    `;

export const bannertop = css`
    transition: width 200ms ease-out;
    width: 8.8rem;
`;

export const bannerlayout = css`
    top: 0rem;
    backface-visibility: hidden;
    position: fixed;
    height: 100%;
`;