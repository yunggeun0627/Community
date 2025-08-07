import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import Posinet from '../Pages/posinet/Posinet';
import MainLayout from '../components/Layout/MainLayout/MainLAyout';
import usePrincipalQuery from '../queries/usePrincipalQuery';
import Loading from '../components/Loading/Loading';


function RootRoute(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    const principalQuery = usePrincipalQuery();

    useEffect(() => {
        if (principalQuery.isFetched && principalQuery.isError && !pathname.startsWith("/auth")) {
            navigate("/auth/login", {
                replace: true,
            });
        }
    }, [principalQuery.isFetched])

    if (!principalQuery.isFetched) {
        return <Loading />
    }

    if (principalQuery.isFetched && principalQuery.isSuccess) {
        return (
            <MainLayout>
                <Routes>
                    <Route path='/auth/*' element={<Auth />} />
                    <Route path='/posinet' element={<Posinet />} />
                </Routes>
            </MainLayout>
        );
    }
    return (
        <Routes>
            <Route path='/auth/*' element={<Auth />} />
        </Routes>
    )

}

export default RootRoute;