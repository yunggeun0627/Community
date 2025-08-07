/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { GoBell, GoBellFill, GoHome, GoHomeFill } from "react-icons/go";
import { LuMessageCircleMore } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAddBox, MdOutlineAddBox } from "react-icons/md";
import Swal from 'sweetalert2';
import { FaCompass, FaRegCompass } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';


function LeftSideBarLayout(props) {
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

    return (
        <nav id="Content" css={s.ContentBar}>
            <div css={s.layout}>
                <div css={s.layout2}>
                    <div css={s.layout3}>
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
    )
}

export default LeftSideBarLayout;