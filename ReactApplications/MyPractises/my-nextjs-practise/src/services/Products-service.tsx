
import { ProductModel } from "@src/components/products/Product-model";
import { useEffect, useState } from "react";

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
  const products = useFetchData<ProductModel[]>('https://fakestoreapi.com/products');
  return products;
}