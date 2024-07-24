import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import SubcatalogItem from "../components/SubcatalogItem";
import {useNavigate, useParams} from "react-router-dom";
import {fetchSubcatalogs} from "../http/productAPI";
import {slugify} from "transliteration";

const Subcatalog = () => {
    const {product} = useContext(Context);
    const {catalogName} = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchSubcatalogs().then(data => product.setSubcatalogs(data));
    // }, []);

    // Find the current subcatalog based on the catalogName param
    const currentSubcatalog = product.subcatalogs.find(
        (subcatalog) => catalogName === slugify(subcatalog.catalogName)
    );

    return (
        <div className="catalog">
            <div className="catalog-info">
                <h1>Каталог товаров</h1>
                <div className="catalog-info__btns">
                    <button onClick={() => navigate('/')}>Главная</button>
                    <p>&nbsp;—&nbsp;</p>
                    <button onClick={() => navigate('/catalog')}>Каталог</button>
                    <p>&nbsp;—&nbsp;</p>
                    <p>{currentSubcatalog ? currentSubcatalog.catalogName : 'Каталог?'}</p>
                </div>
            </div>
            <div className="catalog-content">
                {product.subcatalogs.map((subcatalog) => (
                    catalogName === slugify(subcatalog.catalogName) ?
                        <SubcatalogItem key={subcatalog.id} subcatalog={subcatalog}/> :
                        null
                ))}
            </div>
        </div>
    );
};

export default observer(Subcatalog);
