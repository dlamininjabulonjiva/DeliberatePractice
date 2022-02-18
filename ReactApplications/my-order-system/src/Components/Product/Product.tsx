import Button from '@material-ui/core/Button';
import './Product.scss';
import { ProductItem } from './ProductItem';
import FormatCurrency  from '../../Helpers/FormatCurrency';
import React from "react";
import { useNavigate } from "react-router-dom";

type ProductProps = {
    product: ProductItem;
    addProductToCart: (clickedProduct: ProductItem) => void;
};

const Product: React.FC<ProductProps> = ({ product, addProductToCart }) => {
    const navigate = useNavigate();

    return (
        <div className="Product">
            <img 
                src={product.image} 
                alt={product.title}
                onClick={() => {
                    navigate("/details/" + product.id);
                }}
            />
            <div className='ProductInfo'>
                <h3>{product.title}</h3>
                <h3>{FormatCurrency(product.price)}</h3>
            </div>
            <Button onClick={() => addProductToCart(product)}>Add to cart</Button>
        </div>
    );
};

export default Product;