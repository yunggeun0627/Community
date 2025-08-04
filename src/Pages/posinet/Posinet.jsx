import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


function Posinet(props) {
    

    return (
        <div css={s.layout}>
            <header>
                <div css={s.container}>
                    <h1>
                        <Link to="/posinet" css={s.logo}>
                            <span>POSINET</span>
                        </Link>
                    </h1>
                    <div css={s.searchBox}>
                        <input type="text" />
                        <button>
                            <FaSearch />
                        </button>
                    </div>
                </div>
                    <div css={s.NavContainer}>
                        <div css={s.navBox}>
                            <a class="on" href="information" target="_self">유머/정보</a>
                            <a href="sports" target="_self">스포츠</a>
                            <a href="games" target="_self">게임</a>
                            <a href="community" target="_self">커뮤니티</a>
                            <a href="gallery" target="_self">갤러리</a>
                        </div>
                </div>
                <main>
                    <div css={s.MainContainer}>
                        <div css={s.MainLayout}>
                            <header>
                                
                            </header>
                        </div>
                    </div>
                </main>
            </header>
        </div>
    );
}

export default Posinet;