import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {slugify} from "transliteration";

const SubcatalogItem = ({subcatalog}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const subcatalogName = slugify(subcatalog.name);

    return (
        <div className="catalog__item" onClick={() => navigate(`${currentPath}/${subcatalogName}`)}>
            <p className="catalog__item-name">{subcatalog.name}</p>
            <p className="catalog__item-description">{subcatalog.description}</p>
        </div>
    );
};

export default SubcatalogItem;