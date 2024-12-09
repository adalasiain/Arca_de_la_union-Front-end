import NavBar from '../core/components/NavBar/NavBar';
import CustomizationProduct from '../core/components/CustomizationProduct/CustomizationProduct';
import Footer from '../core/components/Footer/Footer';

const CustomProductPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <CustomizationProduct className="my-4"/>
                <Footer />
            </div>
        </>
    );
};

export default CustomProductPage;