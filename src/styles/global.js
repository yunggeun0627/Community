import { css } from "@emotion/react";

export const global = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
    
    html {
        font-size: 62.5%;
        font-family: "Noto Sans KR", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        background-color: #f3f4f5;
        overflow-y: scroll;
        min-height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        min-height: 100%;
        background-color: #f3f4f5;
        display: flex;
        justify-content: center;
    }

    #root {
        width: 100%;
        max-width: 140rem;
        font-size: 1.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;