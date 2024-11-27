import NavBar from '../core/components/NavBar/NavBar';
import CustomizationProduct from '../core/components/CustomizationProduct/CustomizationProduct';
import Footer from '../core/components/Footer/Footer';
import Products from '../core/components/PruebaProducts';

const CustomProductPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <NavBar />
                <CustomizationProduct className="flex-grow"/>
                <Products/>
                <Footer />
            </div>
        </>
    );
};

export default CustomProductPage;