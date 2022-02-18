import { LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { GetProductById } from '../../Services/MyApiService';
import './ProductDetails.scss';

type ProductDetailsProps = {
};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
    const { productId } = useParams();
    const id: string = productId ?? '';
    const product = GetProductById(id);

    if (!product.doneLoading) {
        return <LinearProgress />;
    } 

    if (product.error != null) {
        return <div>Oops there was an error while trying to fetch the product ...</div>;
    }
     
    return (
        <div className="ProductDetails">
            <h2>My Details : {product.data?.category}</h2>
        </div>
    );
};
  
export default ProductDetails;