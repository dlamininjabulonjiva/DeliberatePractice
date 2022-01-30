import Button from '@material-ui/core/Button';
import './Product.scss';
import { ProductItem } from './ProductItem'

type ProductProps = {
    product: ProductItem;
    addProductToCart: (clickedProduct: ProductItem) => void;
};

const Product: React.FC<ProductProps> = ({ product, addProductToCart }) => (
    <div className="Product">
        <img src={product.image} alt={product.title} />
        <div className='ProductInfo'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>${product.rating.rate}</h3>
        </div>
        <Button onClick={() => addProductToCart(product)}>Add to cart</Button>
    </div>
);

export default Product;