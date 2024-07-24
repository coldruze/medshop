import {
    ADMIN_ROUTE,
    CATALOG_ROUTE,
    CONTACTS_ROUTE, INFO_ROUTE,
    MAIN_ROUTE,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import ProductPage from "./pages/ProductPage";
import Contacts from "./pages/Contacts";
import Info from "./pages/Info";
import Subcatalog from "./pages/Subcatalog";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: CATALOG_ROUTE + '/:catalogName',
        Component: Subcatalog
    },
    {
        path: CATALOG_ROUTE + '/:catalogName' + '/:subcatalogName',
        Component: Product
    },
    {
        path: CATALOG_ROUTE + '/:catalogName' + '/:subcatalogName' + '/:productName',
        Component: ProductPage
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: INFO_ROUTE,
        Component: Info
    },
]