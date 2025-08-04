import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import TopSidebarLayout from '../TopSidebarLayout/TopSidebarlayout.jsx';


function MainLayout({ children }) {
    return (
        <div css={s.layout}>
            <TopSidebarLayout />
            <div css={s.container}>
                { children }
            </div>
        </div>
    );
}

export default MainLayout;