import {BrowserRouter} from "react-router-dom";
import React from "react";
import "./styles/index.scss";
import AppRouter from "./router/AppRouter";
import NavBar from "./layout/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
