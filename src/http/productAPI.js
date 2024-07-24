import { $host } from "./index";

export const fetchCatalogs = async () => {
    try {
        const { data } = await $host.get(`/catalogs`);
        return data;
    } catch (error) {
        console.error("Error in fetchCatalogs:", error);
        throw error;
    }
};

export const fetchSubcatalogs = async () => {
    try {
        const { data } = await $host.get(`/subcatalogs`);
        return data;
    } catch (error) {
        console.error("Error in fetchSubcatalogs:", error);
        throw error;
    }
};

export const fetchProducts = async () => {
    try {
        const { data } = await $host.get(`/products`);
        return data;
    } catch (error) {
        console.error("Error in fetchProducts:", error);
        throw error;
    }
};
