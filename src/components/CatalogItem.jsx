import React from 'react';
import {useNavigate} from "react-router-dom";
import {slugify} from "transliteration";

const CatalogItem = ({catalog}) => {
    const navigate = useNavigate();
    const catalogName = slugify(catalog.name);

    return (
        <div className="catalog__item" onClick={() => navigate(`/catalog/${catalogName}`)}>
            <p className="catalog__item-name">{catalog.name}</p>
            <p className="catalog__item-description">{catalog.description}</p>
        </div>
    );
};

export default CatalogItem;