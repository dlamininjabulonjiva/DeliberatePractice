import { useState, useEffect } from "react";
import { ProductItem } from '../Product/ProductItem';

// export class MyApiService {
//     useFetchData(url: string) {
//         const [data, dataSet] = useState(null);
      
//         useEffect(() => {
//           fetch(url)
//             .then((resp) => resp.json())
//             .then((d) => {
//               dataSet(d);
//             });
//         }, [url]);
      
//         return {
//           data
//         };
//     }
// }