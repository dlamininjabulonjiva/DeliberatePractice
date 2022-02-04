import Button from '@material-ui/core/Button';
import { ProductItem } from '../Product/ProductItem';
import './CartItem.scss';

type CartItemProps = {
    product: ProductItem;
    addProductToCart: (clickedProduct: ProductItem) => void;
    removeProductFromCart: (id: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ product, addProductToCart, removeProductFromCart }) => (
    <div className='CartItem'>
        <div>
            <h4>{product.title}</h4>
            <div className='information'>
                <p>Price: ${product.price}</p>
                <p>Total: ${(product.numberOfProducts * product.price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => removeProductFromCart(product.id)}
                    >
                    -
                </Button>
                <p>{product.numberOfProducts}</p>
                <Button
                    size='small'
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