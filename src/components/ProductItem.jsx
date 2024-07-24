import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {slugify} from "transliteration";

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const productName = slugify(product.name);

    return (
        <div className="product__item" onClick={() => navigate(`${currentPath}/${productName}`)}>
            <img src={product.image} alt={product.name}/>
            <div className="product__item-info">
                <p className="product__item-name">{product.name}</p>
                <p className="product__item-price">{product.price} руб.</p>
            </div>
        </div>
    );
};

export default ProductItem;