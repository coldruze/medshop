import React from 'react';
import NavButton from "../components/NavButton";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navbar-block" onClick={() => navigate(`/`)}>
                <div className="navbar-img">
                    <img src='/assets/logo.webp' alt=""/>
                </div>
                <div className="navbar-info">
                    <h1>Мед Портал</h1>
                    <p>Магазин медицинских товаров</p>
                </div>
            </div>
            <div className="navbar-btns">
                <NavButton to="/">Главная</NavButton>
                <NavButton to="/catalog">Каталог</NavButton>
                <NavButton to="/info">О компании</NavButton>
                <NavButton to="/contacts">Контакты</NavButton>
            </div>
        </div>
    );
};

export default NavBar;