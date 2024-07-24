import React from 'react';
import {useNavigate} from "react-router-dom";

const NavButton = ({children, to}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <button className="navbar-button" onClick={handleClick}>
            {children}
        </button>
    );
};

export default NavButton;