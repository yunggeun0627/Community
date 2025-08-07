import { css } from "@emotion/react";

export const layout = css`
    display: block;
    unicode-bidi: isolate;
    box-sizing: border-box;
`;

export const layout2 = css`
    width: 100%;
    border-radius: 0rem;
    transition: transform 85ms ease-out;
    cursor: pointer;
`;

export const layout3 = css`
    height: 1px;
    width: 1px;
`;

export const layout4 = css`
    background-color: #e60023;
`;

export const layout5 = css`
    display: flex;
    height: 7.5rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const layout6 = css`
    text-align: center;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
`;

export const headerlayout = css`
    left: 7.2rem;
    z-index: 671;
    right: 0rem;
    top: 0rem;
    position: fixed;
    box-sizing: border-box;
    
`;

export const headerlayout2 = css`
    box-sizing: border-box;
`;

export const headerlayout3 = css`
    width: calc(12/var(--g-ncols)*100%);
    background-color: #ffffff;
`;

export const Nags = css`
    display: block;
    unicode-bidi: isolate;
`;

export const headerlayout4 = css`
    box-sizing: border-box;
`;

export const headerlayout5 = css`
    display: flex;
    flex-direction: column;
    height: 8rem;
    width: 100%;
    margin-left: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-top: 0rem;
    `;

export const headerlayout6 = css`
    align-items: center;
    flex-direction: row;
    width: calc(12/var(--g-ncols)*100%);
    flex: 1 1 auto;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    min-height: 0rem;
    min-width: 0rem;
`;

export const searchBox = css`
    display: flex;
    height: 5.6rem;
    align-items: center;
    width: calc(12/var(--g-ncols)*100%);
    flex-direction: row;
    box-sizing: border-box;
`;

export const searchBox2 = css`
    min-width: 40.7rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    flex: 1 1 auto;
    min-height: 0rem;
    box-sizing: border-box;
`;

export const searchBox3 = css`
    background-color: #f1f1f1;
    height: 4.8rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`;

export const searchBox4 = css`
    padding: 0rem 0rem 0rem 1.6rem;
    height: 100%;
    flex: 1 1 auto;
    min-height: 0rem;
    min-width: 0rem;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`;

export const searchicon = css`
    margin-right: 0.8rem;
    flex: 0 0 auto;
    box-sizing: border-box;
`;

export const searchicon2 = css`
    color: #62625b;
    fill: currentColor;
    stroke-width: 0;
    vertical-align: middle;
    height: 1.8rem;
    width: 1.8rem;
`;

export const searchicon3 = css`
    height: 100%;
    flex: 1 1 auto;
    min-height: 0rem;
    min-width: 0rem;
    box-sizing: border-box;

    & > input {
        background-color: transparent;
        border: none;
        color: #333;
        font-size: 1.6rem;
        font-weight: normal;
        height: 100%;
        outline: none;
        padding: 0;
        width: 100%;
    }
`;

export const profileimg = css`
    display: block;
    box-sizing: border-box;
`;

export const profileimg2 = css`
    border-radius: 1.6rem;
    display: block;
    text-decoration: none;
    color: inherit;
    outline: none;
    transition: transform 85ms ease-out;
    width: calc(12/var(--g-ncols)*100%);
    cursor: pointer;
`;

export const profileimg3 = css`
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 1.6rem;
`;

export const profileimg4 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    flex-direction: row;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
`;

export const profileimg5 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    flex-direction: row;
    box-sizing: border-box;
    height: 3.8rem;
    width: 3.8rem;
`;

export const profileimg6 = css`
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    position: relative;
`;

export const profileimg7 = css`
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    will-change: transform;
    overflow: hidden;
    position: relative;
`;

export const profileimg8 = css`
    display: block;
    background-color: #ffffff;
    padding-bottom: 100%;
    position: relative;
    box-sizing: border-box;

    & > img {
        color: transparent;
        position: absolute;
        border: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }
`;
