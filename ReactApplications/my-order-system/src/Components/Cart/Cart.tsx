import CartItem from '../CartItem/CartItem';
import { ProductItem } from '../Product/ProductItem';
import FormatCurrency  from '../../Helpers/FormatCurrency';
import './Cart.scss';

type CartProps = {
    products: ProductItem[];
    addProductToCart: (clickedProduct: ProductItem) => void;
    removeProductFromCart: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({ products, addProductToCart, removeProductFromCart }) => {
    const calculateTotalAmount = (products: ProductItem[]) =>{
        return products.reduce((num: number, products) => num + products.numberOfProducts * products.price, 0);
    }

    return (
        <div className="Cart">
            <h2>Your Shopping Cart</h2>
            {products.length === 0 ? <p>No items in cart.</p> : null}
            {products.map(product => (
                <CartItem
                    key={product.id}
                    product={product}
                    addProductToCart={addProductToCart}
                    removeProductFromCart={removeProductFromCart}
                />
            ))}
            <h2>Total: {FormatCurrency(calculateTotalAmount(products))}</h2>
        </div>
    );
};
  
export default Cart;