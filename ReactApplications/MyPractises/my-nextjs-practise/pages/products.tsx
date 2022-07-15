import DisplayProducts from "@src/components/products/Display-products";
import { GetAllProducts } from "@src/services/Products-service";
import { NextPage } from "next";

const Products: NextPage = () => {
    const products = GetAllProducts();

    if (!products.doneLoading) {
        return <div>Loading ...</div>;
    } 

    if (products.error != null) {
        return <div>Oops there was an error while trying to fetch the products ...</div>;
    } 

    return (
        <>
            <DisplayProducts products={ products?.data } />  
        </>
    );
}

export default Products;