/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { GoBell, GoBellFill, GoHome, GoHomeFill, GoQuestion } from "react-icons/go";
import { LuMessageCircleMore, LuSearch } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAddBox, MdKeyboardArrowDown, MdOutlineAddBox } from "react-icons/md";
import Swal from 'sweetalert2';
import { FaCompass, FaRegCompass } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';


function LeftSideBarLayout(props) {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const location = useLocation();
    const MENUS = [
        {
            id: 1,
            path: "/Home",
            name: "홈",
            icon: {
                off: <GoHome />,
                on: <GoHomeFill />,
            }
        },
        {
            id: 2,
            path: "/Home",
            name: "홈",
            icon: {
                off: <GoHome />,
                on: <GoHomeFill />,
            }
        },
        {
            id: 3,
            path: "/Compass",
            name: "탐색",
            icon: {
                off: <FaCompass />,
                on: <FaRegCompass />,
            }
        },
        {
            id: 4,
            path: "/Made",
            name: "만들다",
            icon: {
                off: <MdOutlineAddBox />,
                on: <MdAddBox />,
            }
        },
        {
            id: 5,
            path: "/Update",
            name: "업데이트",
            icon: {
                off: <GoBell />,
                on: <GoBellFill />,
            }
        },
        {
            id: 6,
            path: "/Message",
            name: "메세지",
            icon: {
                off: <LuMessageCircleMore />,
                on: <AiFillMessage />,
            }
        },
        {
            id: 7,
            path: "/Option",
            name: "추가 옵션",
            icon: {
                off: <IoSettingsOutline />,
                on: <IoSettings />,
            }
        }
    ];

    const handleSearchBoxChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div css={s.all}>
            <div css={s.Rightlayout}>
                <div role='banner' css={s.Rightlayout2}>
                    <div aria-disabled="false" css={s.Rightlayout3} role='button' tabIndex="0">
                        <div data-test-id="hiddenContentContainer" css={s.Rightlayout4}>
                            <div css={s.Rightlayout5}>
                                <div css={s.Rightlayout6}>
                                    <div css={s.Rightlayout7}>콘텐츠로 건너뛰기</div>
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
                                                                <LuSearch />
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
                                                <div css={s.accountButton}>
                                                    <button aria-label='계정' css={s.accountButton2}>
                                                        <div css={s.accountButton3}>
                                                            <MdKeyboardArrowDown />
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id="Content" css={s.ContentBar}>
                    <div css={s.leftlayout}>
                        <div css={s.leftlayout2}>
                            <div css={s.leftlayout3}>
                                <div css={s.iconBox}>
                                    <div css={s.icon}>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </nav>
                <div aria-label="꼬리말 부동 버튼" css={s.footerButtons}>
                    <div css={s.footerButtons2}>
                        <div css={s.footerButtons3}>
                            <div css={s.footerButtons4}>
                                <div css={s.footerButtons5}>
                                    <div aria-label='더 보기' css={s.footerButtons6}>
                                        <button css={s.footerButtons7}>
                                            <div css={s.footerButtons8}>
                                                <div css={s.footerButtons9}>
                                                    <GoQuestion />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.MainContent}>
                    <div css={s.MainContainer}>
                        <div css={s.MainContainer2}>
                            <h1 css={s.ButtonName}>홈</h1>
                        </div>
                        <div aria-live='polite' css={s.ButtonName2}>
                            홈 피드에 로드된 핀 더 보기
                        </div>
                        <div aria-busy="false" css={s.masonryContainer}>
                            <div css={s.masonryContainer2}>

                            </div>  
                        </div>
                    </div>
                </div>
                <div css={s.footerbutton}>
                    <div css={s.footerbutton2}></div>
                    <div css={s.footerbutton3}></div>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBarLayout;