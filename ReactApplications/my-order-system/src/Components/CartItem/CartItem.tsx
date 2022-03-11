import Button from '@material-ui/core/Button';
import { ProductItem } from '../Product/ProductItem';
import FormatCurrency  from '../../Helpers/FormatCurrency';
import './CartItem.scss';

type CartItemProps = {
    product: ProductItem;
    addProductToCart: (clickedProduct: ProductItem) => void;
    removeProductFromCart: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ product, addProductToCart, removeProductFromCart }) => (
    <div className='CartItem'>
        <div>
            <h4 data-testid="title">
                {product.title}
            </h4>
            <div className='information'>
                <p data-testid="price">
                    Price: {FormatCurrency(product.price)}
                </p>
                <p data-testid="total">
                    Total: {FormatCurrency(product.numberOfProducts * product.price)}
                </p>
            </div>
            <div className='buttons'>
                <Button
                    size='small'
                    data-testid="removeProduct"
                    disableElevation
                    variant='contained'
                    onClick={() => removeProductFromCart(product.id)}
                    >
                    -
                </Button>
                <p>{product.numberOfProducts}</p>
                <Button
                    size='small'
                    data-testid="addProduct"
                    disableElevation
                    variant='contained'
                    onClick={() => addProductToCart(product)}
                    >
                    +
                </Button>
            </div>
        </div>
        <img src={product.image} alt={product.title} />
    </div>
)

export default CartItem;