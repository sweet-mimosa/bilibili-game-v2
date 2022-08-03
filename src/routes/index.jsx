import React, { Suspense,lazy } from "react";
import { Route,Routes,Navigate } from 'react-router-dom'
const Choose = lazy(() => import('@/pages/Choose'));
const Find = lazy(() => import('@/pages/Find'));
const Mine = lazy(() => import('@/pages/Mine'));
const Search = lazy(() => import('@/pages/Search'));

const RouteConfig = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path='/' element={<Choose/>}></Route>
                <Route path='/choose' element={<Choose/>}></Route>
                <Route path='/find' element={<Find/>}></Route>
                <Route path='/mine' element={<Mine/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
            </Routes>
        </Suspense>
    )
}


export default RouteConfig;