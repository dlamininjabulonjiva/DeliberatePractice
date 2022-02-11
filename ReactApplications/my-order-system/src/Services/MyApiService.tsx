import { useState, useEffect } from "react";
import { ProductItem } from '../Components/Product/ProductItem';

function useFetchData<Payload>(
    url: string
  ): {
    data: Payload | null;
    doneLoading: boolean;
    error: any;
  } {
    const [data, setData] = useState<Payload | null>(null);
    const [doneLoading, isDoneLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((payload: Payload) => {
          setData(payload);
          isDoneLoading(true);
        })
        .catch(error => setError(error));;
    }, [url]);
  
    return {
      data,
      doneLoading,
      error
    };
}

export function GetAllProducts() {
    const products = useFetchData<ProductItem[]>('https://fakestoreapi.com/products');
    return products;
}