import FormatCurrency from "@src/helpers/Format-currency";
import { ProductModel } from "./Product-model";

interface DisplayProductsProps {
    products: ProductModel[] | null;
}

const DisplayProducts: React.FunctionComponent<DisplayProductsProps> = ({ products }) => {
    return (
        <>
            {products && products.map((product: ProductModel) => {
                return <div key={ product.id } className="max-w-md mb-3 p-2 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img
                                    className="h-48 w-full object-cover md:h-full md:w-48"
                                    src={ product.image }
                                    alt={ product.title }
                                />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    { FormatCurrency(product.price) }
                                </div>
                                <a
                                    href="#"
                                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                                >
                                    { product.title }
                                </a>
                                <p className="mt-2 text-gray-500">
                                    { product.description }
                                </p>
                            </div>
                        </div>
                    </div>;
            })}
        </>
    );
}

export default DisplayProducts;