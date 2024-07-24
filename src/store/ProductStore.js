import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._catalogs = [
            {id: 1, name: 'Каталог1', description: 'Описание каталога'},
            {id: 2, name: 'Каталог2', description: 'Описание каталога'},
            {id: 3, name: 'Каталог3', description: 'Описание каталога'}
        ];
        this._subcatalogs = [
            {id: 1, name: 'Подкаталог1', description: 'Описание подкаталога', catalogName: 'Каталог1'},
            {id: 2, name: 'Подкаталог2', description: 'Описание подкаталога', catalogName: 'Каталог1'},
            {id: 3, name: 'Подкаталог3', description: 'Описание подкаталога', catalogName: 'Каталог1'},
            {id: 4, name: 'Подкаталог4', description: 'Описание подкаталога', catalogName: 'Каталог2'},
            {id: 5, name: 'Подкаталог5', description: 'Описание подкаталога', catalogName: 'Каталог2'},
            {id: 6, name: 'Подкаталог6', description: 'Описание подкаталога', catalogName: 'Каталог2'},
            {id: 7, name: 'Подкаталог7', description: 'Описание подкаталога', catalogName: 'Каталог3'},
            {id: 8, name: 'Подкаталог8', description: 'Описание подкаталога', catalogName: 'Каталог3'},
            {id: 9, name: 'Подкаталог9', description: 'Описание подкаталога', catalogName: 'Каталог3'}
        ];
        this._products = [
            {id: 1, name: 'Медицинский костюм1', description: 'Крутой классный костюм Крутой классный костюм Крутой классный костюм Крутой классный костюм Крутой классный костюм', price: 9999.99, image: '/assets/logo.webp',
                subcatalogName: 'Подкаталог1'},
            {id: 2, name: 'Медицинский костюм2', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог1'},
            {id: 3, name: 'Медицинский костюм3', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/fucku.webp',
                subcatalogName: 'Подкаталог1'},
            {id: 4, name: 'Медицинский костюм4', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог2'},
            {id: 5, name: 'Медицинский костюм5', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог2'},
            {id: 6, name: 'Медицинский костюм6', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог2'},
            {id: 7, name: 'Медицинский костюм7', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог3'},
            {id: 8, name: 'Медицинский костюм8', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог3'},
            {id: 9, name: 'Медицинский костюм9', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог3'},
            {id: 10, name: 'Медицинский костюм10', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/logo.webp',
                subcatalogName: 'Подкаталог4'},
            {id: 11, name: 'Медицинский костюм11', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог4'},
            {id: 12, name: 'Медицинский костюм12', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/fucku.webp',
                subcatalogName: 'Подкаталог4'},
            {id: 13, name: 'Медицинский костюм13', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог5'},
            {id: 14, name: 'Медицинский костюм14', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог5'},
            {id: 15, name: 'Медицинский костюм15', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог5'},
            {id: 16, name: 'Медицинский костюм16', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог6'},
            {id: 17, name: 'Медицинский костюм17', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог6'},
            {id: 18, name: 'Медицинский костюм18', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог6'},
            {id: 19, name: 'Медицинский костюм19', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/logo.webp',
                subcatalogName: 'Подкаталог7'},
            {id: 20, name: 'Медицинский костюм20', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог7'},
            {id: 21, name: 'Медицинский костюм21', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/fucku.webp',
                subcatalogName: 'Подкаталог7'},
            {id: 22, name: 'Медицинский костюм22', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог8'},
            {id: 23, name: 'Медицинский костюм23', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог8'},
            {id: 24, name: 'Медицинский костюм24', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог8'},
            {id: 25, name: 'Медицинский костюм25', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог9'},
            {id: 26, name: 'Медицинский костюм26', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог9'},
            {id: 27, name: 'Медицинский костюм27', description: 'Крутой классный костюм', price: 9999.99, image: '/assets/aga.jpg',
                subcatalogName: 'Подкаталог9'}
        ];
        makeAutoObservable(this);
    }

    setCatalogs(catalogs) {
        this._catalogs = catalogs;
    }

    setSubcatalogs(subcatalogs) {
        this._subcatalogs = subcatalogs;
    }

    setProducts(products) {
        this._products = products;
    }

    get catalogs() {
        return this._catalogs;
    }

    get subcatalogs() {
        return this._subcatalogs;
    }

    get products() {
        return this._products;
    }
}
