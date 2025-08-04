/** @jsxImportSource @emotion/react */
import { useLocation } from 'react-router-dom';
import * as s from './styles.js';
import React from 'react';

function TopSidebarLayout(props) {
    const location = useLocation();
    const MENUS = [
        {
            id: 1,
            path: "",
            name: "positivent.co.kr",
        },
        {
            id: 2,
            path: "/positivenet/information",
            name: "information",
        },
        {
            id: 3,
            path: "/",
            name: "sports",
        },
        {
            id: 4,
            path: "/",
            name: "game",
        },
        {
            id: 5,
            path: "/",
            name: "community",
        },
        {
            id: 6,
            path: "/",
            name: "gallery",
        }
    ]

    return (
        <div css={s.layout}>
            <header>
            </header>
            <main>
                <div>
                    
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default TopSidebarLayout;