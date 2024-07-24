import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import ProductItem from "../components/ProductItem";
import {fetchProducts} from "../http/productAPI";
import {slugify} from "transliteration";

const Product = () => {
    const {product} = useContext(Context);
    const {subcatalogName} = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchProducts().then(data => product.setProducts(data));
    // }, [product]);

    const currentProduct = product.products.find(
        (product) => subcatalogName === slugify(product.subcatalogName)
    );

    const currentSubcatalog = product.subcatalogs.find(
        (subcatalog) => currentProduct.subcatalogName === subcatalog.name
    );

    return (
        <div className="product">
            <div className="catalog-info">
                <h1>Каталог товаров</h1>
                <div className="catalog-info__btns">
                    <button onClick={() => navigate('/')}>Главная</button>
                    <p>&nbsp;—&nbsp;</p>
                    <button onClick={() => navigate('/catalog')}>Каталог</button>
                    <p>&nbsp;—&nbsp;</p>
                    <button onClick={() => navigate(`/catalog/${slugify(currentSubcatalog.catalogName)}`)}>
                        {currentSubcatalog.catalogName}
                    </button>
                    <p>&nbsp;—&nbsp;</p>
                    <p>
                        {currentProduct.subcatalogName}
                    </p>
                </div>
            </div>
            <div className="product-content">
                {product.products.map((product) => (
                    subcatalogName === slugify(product.subcatalogName) ?
                        <ProductItem key={product.id} product={product}/> :
                        null
                ))}
            </div>
        </div>
    );
};

export default observer(Product);
