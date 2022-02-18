import { useParams } from "react-router-dom";
import { GetProductById } from '../../Services/MyApiService';
import './ProductDetails.scss';

type ProductDetailsProps = {
};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
    const { productId } = useParams();
    const id: string = productId ?? '';
    const product = GetProductById(id);

    console.log(product);

    return (
        <div className="ProductDetails">
            <h2>My Details : {product.data?.category}</h2>
        </div>
    );
};
  
export default ProductDetails;