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
        display: flex;
        justify-content: center;
        font-family: 'Pin Sans', -apple-system, BlinkMacSystemFont, 
        'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 
        'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 
        'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 
        'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif !important;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
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