import { useState } from 'react';

import Product from './Product';
import LinearProgress from '@material-ui/core/LinearProgress';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import { ProductItem } from './ProductItem';
import Cart from '../Cart/Cart';
import './DisplayProducts.scss';
import { GetAllProducts } from '../../Services/MyApiService';

const DisplayProducts: React.FC = () => {
    const allProducts = GetAllProducts();
  
    const [cartOpen, cartIsOpen] = useState(false);
    const [productItemsInCart, setProductItemsInCart] = useState([] as ProductItem[]);

    const getNumberOfProducts = (products: ProductItem[]) => {
        return products.reduce((num: number, products) => num + products.numberOfProducts, 0)
    };

    const addProductToCart = (clickedProduct: ProductItem) => {
        setProductItemsInCart(products => {
        const isProductInCart = products.find(product => product.id === clickedProduct.id);

        if (isProductInCart) {
            return products.map(prod =>
            prod.id === clickedProduct.id
                ? { ...prod, numberOfProducts: prod.numberOfProducts + 1 }
                : prod
            );
        }

        return [...products, { ...clickedProduct, numberOfProducts: 1 }];
        });
    };

    const removeProductFromCart = (id: number) => {
        setProductItemsInCart(products =>
        products.reduce((num, product) => {
            if (product.id === id) {
            if (product.numberOfProducts === 1) {
                return num;
            } 
            return [...num, { ...product, numberOfProducts: product.numberOfProducts - 1 }];
            } else {
            return [...num, product];
            }
        }, [] as ProductItem[])
        );
    };

    if (!allProducts.doneLoading) {
        return <LinearProgress />;
    } 

    if (allProducts.error != null) {
        return <div>Oops there was an error while trying to fetch the products ...</div>;
    } 

    return (
        <div className="App">
          <Drawer anchor='right' open={cartOpen} onClose={() => cartIsOpen(false)}>
            <Cart
              products={productItemsInCart}
              addProductToCart={addProductToCart}
              removeProductFromCart={removeProductFromCart}
            />
          </Drawer>
          <IconButton className='CartIconButton' onClick={() => cartIsOpen(true)}>
            <Badge badgeContent={getNumberOfProducts(productItemsInCart)} color='error'>
              <AddShoppingCartIcon />
            </Badge>
          </IconButton> 
          <Grid container spacing={3}>
            {allProducts?.data?.map(productItem => (
              <Grid item key={productItem.id} xs={12} sm={3}>
                <Product product={productItem} addProductToCart={addProductToCart} />
              </Grid>
            ))}
          </Grid>
        </div>
    );
};

export default DisplayProducts;
