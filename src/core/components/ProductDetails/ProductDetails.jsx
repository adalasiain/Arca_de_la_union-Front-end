import Carousel from "../Carousel/Carousel";

const ProductDetails = () => {
    return (
        <div className="flex flex-col justify-between items-center w-full sm:w-2/5 p-6 md:p-12 md:pr-0">
            <Carousel />
            <div className="flex justify-evenly mt-4">
                <strong className="text-3xl text-gray-900">Costo: </strong>
                <p className="text-3xl font-semibold text-gray-900 px-3">$9,999</p>
            </div>
        </div>
    );
};

export default ProductDetails;