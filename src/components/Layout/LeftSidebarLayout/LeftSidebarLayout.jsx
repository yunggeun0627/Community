/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { GoBell, GoBellFill, GoBook, GoBookmark, GoBookmarkFill, GoHome, GoHomeFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUsers, HiUsers } from "react-icons/hi";
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogOut, IoSearch, IoSearchOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { FaRegEnvelope, FaRegEnvelopeOpen, FaRegUser, FaUser } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';


function LeftSideBarLayout(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const location = useLocation();
    const MENUS = [
        {
            id: 1,
            path: "/",
            name: "home",
            icon: {
                off: <GoHome />,
                on: <GoHomeFill />,
            }
        },
        {
            id: 2,
            path: "/search",
            name: "Search",
            icon: {
                off: <IoSearchOutline />,
                on: <IoSearch />,
            }
        },
        {
            id: 3,
            path: "/timeLine",
            name: "TimeLine",
            icon: {
                off: <GoBell />,
                on: <GoBellFill />,
            }
        },
        {
            id: 4,
            path: "/note",
            name: "Note",
            icon: {
                off: <FaRegEnvelope />,
                on: <FaRegEnvelopeOpen />,
            }
        },
        {
            id: 5,
            path: "/bookMark",
            name: "Bookmark",
            icon: {
                off: <GoBookmark />,
                on: <GoBookmarkFill />,
            }
        },
        {
            id: 6,
            path: "/community",
            name: "Community",
            icon: {
                off: <HiOutlineUsers />,
                on: <HiUsers />,
            }
        },
        {
            id: 7,
            path: "",
            name: "",
            Icon: {
                off: <FaRegUser />,
                on: <FaUser />
            }
        },
    ];

    return (
        <div css={s.bodylayout}>
            <div css={s.headlayout}></div>
            <div css={s.bannerheader}>
                <button>
                    <div>
                        <span>

                        </span>
                    </div>
                </button>
                <button></button>
            </div>
            <header role='banner' css={s.headerlayout}>
                <div css={s.bannertop}>
                    <div css={s.bannerlayout}>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default LeftSideBarLayout;