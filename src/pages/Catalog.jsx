import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import CatalogItem from "../components/CatalogItem";
import { fetchCatalogs } from "../http/productAPI";
import {useNavigate} from "react-router-dom";

const Catalog = () => {
    const { product } = useContext(Context);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchCatalogs().then(data => {
    //         console.log("Fetched catalogs data: ", data);
    //         product.setCatalogs(data);
    //     }).catch(error => {
    //         console.error("Error fetching catalogs: ", error);
    //     });
    // }, []);

    return (
        <div className="catalog">
            <div className="catalog-info">
                <h1>Каталог товаров</h1>
                <div className="catalog-info__btns">
                    <button onClick={() => navigate('/')}>Главная&nbsp;</button>
                    <p>— Каталог</p>
                </div>
            </div>
            <div className="catalog-content">
                {product.catalogs.map(catalog => (
                    <CatalogItem key={catalog.id} catalog={catalog} />
                ))}
            </div>
        </div>
    );
};

export default observer(Catalog);
