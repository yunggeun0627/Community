import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import Posinet from '../Pages/posinet/Posinet';
import MainLayout from '../components/Layout/MainLayout/MainLAyout';
import usePrincipalQuery from '../queries/usePrincipalQuery';
import Loading from '../components/Loading/Loading';
import NotFound from '../Pages/NotFound/NotFound';
import AdminRoute from './AdminRoute';


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
                    <Route path='/admin/*' element={<AdminRoute />} />
                    <Route path='/' element={<Posinet />} />
                    <Route path='*' element={ <NotFound /> } />
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