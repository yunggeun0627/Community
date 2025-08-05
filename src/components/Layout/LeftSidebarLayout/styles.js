import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-right: 0.1rem solid #dbdbdb;
    padding: 2rem 0;
    width: 7.2rem;
    font-size: 2.4rem;

    & > header{
        
    }

    & > main {
        flex-grow: 1;
    }

    & > footer {

    }
`;