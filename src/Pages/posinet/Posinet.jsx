/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { LuSearch } from 'react-icons/lu';


function Posinet(props) {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchBoxChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div role='banner' css={s.layout}>
            <div aria-disabled="false" css={s.layout2} role='button' tabIndex="0">
                <div data-test-id="hiddenContentContainer" css={s.layout3}>
                    <div css={s.layout4}>
                        <div css={s.layout5}>
                            <div css={s.layout6}>콘텐츠로 건너뛰기</div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-test-id="header" id="HeaderContent" css={s.headerlayout}>
                <div css={s.headerlayout2}>
                    <div css={s.headerlayout3}>
                        <div id="NagHeaderContent" css={s.Nags}></div>
                        <div css={s.headerlayout4}>
                            <div css={s.headerlayout5}>
                                <div css={s.headerlayout6}>
                                    <div css={s.searchBox}>
                                        <div id="searchBox" css={s.searchBox2}>
                                            <div css={s.searchBox3}>
                                                <div css={s.searchBox4}>
                                                    <div css={s.searchicon}>
                                                        <svg aria-label="검색 아이콘" role="img" css={s.searchicon2} >
                                                            <LuSearch />
                                                        </svg>
                                                    </div>
                                                    <div css={s.searchicon3}>
                                                        <input type="text" placeholder="검색" name="searchBoxInput" value={searchValue} onChange={handleSearchBoxChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div css={s.profileimg}>
                                        <a aria-label="내 프로필" css={s.profileimg2} href="">
                                            <div css={s.profileimg3} >
                                                <div css={s.profileimg4} >
                                                    <div css={s.profileimg5}>
                                                        <div css={s.profileimg6}>
                                                            <div css={s.profileimg7}>
                                                                <div css={s.profileimg8}>
                                                                        <img src="default.jpg" alt="내 프로필" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        </div>
                                        <div >
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posinet;