import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    return (
        <Routes>
            {user.isAdmin && adminRoutes.map(({path, Component}) =>
                <Route path={path} key={path} Component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} key={path} Component={Component} exact/>
            )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;