import { LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { GetProductById } from '../../Services/MyApiService';
import Button from '@material-ui/core/Button';
import FormatCurrency  from '../../Helpers/FormatCurrency';
import './ProductDetails.scss';

const ProductDetails: React.FC = () => {
    const { productId } = useParams();
    const id: string = productId ?? '';

    const product = GetProductById(id);
    const price: number = product.data?.price ?? 0;

    if (!product.doneLoading) {
        return <LinearProgress />;
    } 

    if (product.error != null) {
        return <div>Oops there was an error while trying to fetch the product ...</div>;
    }
     
    return (
        <div className="ProductDetails">
            <div className="left-column">
                <img src={product.data?.image} alt={product.data?.title} />
            </div>
            <div className="right-column">
                <div className="product-description">
                    <span>{product.data?.category}</span>
                    <h2>{product.data?.title}</h2>
                    <p>{product.data?.description}</p>
                </div>
                <div className="reviews">
                    <span>Reviews</span>
                    <p>{product.data?.rating.rate} Rating with {product.data?.rating.count} Reviews.</p>
                </div>
                <div className="product-price">
                    <span className="price">{FormatCurrency(price)}</span>
                    <Button variant="outlined" color="primary">Add to cart</Button>
                </div>
            </div>
        </div>
    );
};
  
export default ProductDetails;