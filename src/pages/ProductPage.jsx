import React, {useContext} from 'react';
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import {slugify} from "transliteration";

const ProductPage = () => {
    const {product} = useContext(Context);
    const navigate = useNavigate();
    const {productName} = useParams();

    const currentProduct = product.products.find(product => slugify(product.name) === productName);

    const currentSubcatalog = product.subcatalogs.find(
        (subcatalog) => currentProduct.subcatalogName === subcatalog.name
    );

    return (
        <div className="product-page">
            <div className="catalog-info">
                <h1>{currentProduct.name}</h1>
                <div className="catalog-info__btns">
                    <button onClick={() => navigate('/')}>Главная</button>
                    <p>&nbsp;—&nbsp;</p>
                    <button onClick={() => navigate('/catalog')}>Каталог</button>
                    <p>&nbsp;—&nbsp;</p>
                    <button onClick={() => navigate(`/catalog/${slugify(currentSubcatalog.catalogName)}`)}>
                        {currentSubcatalog.catalogName}
                    </button>
                    <p>&nbsp;—&nbsp;</p>
                    <button
                        onClick={() => navigate(`/catalog/${slugify(currentSubcatalog.catalogName)}/${slugify(currentProduct.subcatalogName)}`)}>
                        {currentProduct.subcatalogName}
                    </button>
                </div>
            </div>


            <div className="product-block">
                <img src={currentProduct.image} alt={currentProduct.name}/>
                <div className="product-block__description">
                    <h2>Описание</h2>
                    <p>{currentProduct.description}</p>
                </div>
                <div className="card">
                    <div className="card-content">
                        <p className="price">Цена</p>
                        <p className="status">
                            <span className="dot"></span> Под заказ
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="buy-button">от {currentProduct.price} руб. /пар.</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;