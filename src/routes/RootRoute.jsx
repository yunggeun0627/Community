import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import Posinet from '../Pages/posinet/Posinet';
import MainLayout from '../components/Layout/MainLayout/MainLAyout';



function RootRoute(props) {
    return (
        <MainLayout>
            <Routes>
                <Route path='/auth/*' element={<Auth />} />
                <Route path='/posinet' element={<Posinet />} />
            </Routes>
        </MainLayout>
    );
}

export default RootRoute;