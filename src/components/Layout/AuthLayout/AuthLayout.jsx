import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function AuthLayout({children}) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h1 css={s.title}>포지넷 회원 가입</h1>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;