import ProductDetails from "../ProductDetails/ProductDetails";
import CustomizationForm from "../CustomizationForm/CustomizationForm";

const CustomizationProduct = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full h-full bg-[#b87333] bg-opacity-60 p-4">
            <div className="flex flex-col sm:flex-row rounded-3xl bg-[#eeeeee] w-full max-w-6xl mx-auto shadow-lg">
                <ProductDetails />
                <CustomizationForm />
            </div>
        </main>
    );
};

export default CustomizationProduct;
