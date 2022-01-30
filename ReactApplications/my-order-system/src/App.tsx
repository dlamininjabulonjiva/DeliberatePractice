import { useState } from 'react';
import { useQuery } from 'react-query';

import Product from './Product/Product';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { ProductItem } from './Product/ProductItem'
import './App.scss';

const getProducts = async (): Promise<ProductItem[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const addProductToCart = (clickedProductItem: ProductItem) => null;

const App = () => {
  const { data, isLoading, error } = useQuery<ProductItem[]>(
    'products',
    getProducts
  );

  if (isLoading) {
    return <LinearProgress />;
  } 

  if (error) {
    return <div>Oops there was an error while trying to fetch the products ...</div>;
  } 

  return (
    <div className="App">
      <Grid container spacing={3}>
        {data?.map(productItem => (
          <Grid item key={productItem.id} xs={12} sm={4}>
            <Product product={productItem} addProductToCart={addProductToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
