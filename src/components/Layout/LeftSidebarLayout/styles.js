import { css } from "@emotion/react";

export const ContentBar = css`
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 0.1rem solid #e5e5e0;
    height: 100vh;
    width: 7.2rem;
    z-index: 672;
`; 

export const layout = css`
    height: 100%;
    padding-bottom: 1.6rem;
    padding-top: 1.6rem;
    box-sizing: border-box;
`;

export const layout2 = css`
    gap: 2.4rem;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
`; 

export const layout3 = css`
    gap: 2.4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

export const iconBox = css`
    display: flex;
    align-items: center;
    gap: 2.4rem;
    flex-direction: column;
`;

export const icon = css`
    display: block;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
    transition: transform 85ms ease-out;
    background-color: #ffe1e100;
    border: 0rem;
    padding: 0rem;
    cursor: pointer;
`;