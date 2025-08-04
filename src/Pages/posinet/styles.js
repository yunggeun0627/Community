import { css } from "@emotion/react";

export const layout = css`
    background-color: white;
    padding: 2rem;
    height: 8rem;
`;

export const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem 2rem;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 39%;
    border-bottom: 0.1rem solid #d1d8e4;
`;

export const logo = css`
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    color: #443f92;
    cursor: pointer;
    text-decoration: none;
`;

export const searchBox = css`
    display: flex;
    position: relative;
    margin: 0 0 1.2rem;
    margin-bottom: 0;
    border: 0.1rem solid #443f92;
    width: 44.5rem;
    height: 4.6rem;
    border-radius: 1.4rem;
    font-size: 1.4rem;
    
    & > input {
        padding: 0 2rem;
        width: calc(100% - 6rem);
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 1.2rem 0 0 1.2rem;
        outline: 0;
        font-size: 1.3rem;
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 6rem;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        background-repeat: no-repeat;
        background-size: 2.7rem;
        background-position: center;
        border: 0;
        border-radius: 0 1.2rem 1.2rem 0;
        font-size: 1.3rem;
        cursor: pointer;
    }
`;

export const NavContainer = css`
    width: 100%;
    background-color: #fff;
    border-bottom: 0.2rem solid #e82f2f;

    &:hover {
        color: #e72f2f;
    }
`;

export const navBox = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    gap: 2rem;
    font-size: 2.5rem;
    cursor: pointer;
    
    & > a {
        text-decoration: none;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.28%;
        height: 100%;
        text-align: center;
        cursor: pointer;
    }
`;

export const MainContainer = css`
    width: 106rem;
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 1rem 0 0 0;
`;

export const MainLayout = css`
    display: flex;
    width: 80rem;
    flex: 0 0 auto;
    overflow: hidden;
    flex-direction: column;
    margin: 0 1rem 0 0;
    
    & > header {
        margin: 0 0 1rem 0;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    
    
`;