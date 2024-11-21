import NavBar from '../core/components/NavBar/NavBar';
import CustomizationProduct from '../core/components/CustomizationProduct/CustomizationProduct';
import Footer from '../core/components/Footer/Footer';

const CustomProductPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <NavBar />
                <CustomizationProduct className="flex-grow"/>
                <Footer />
            </div>
        </>
    );
};

export default CustomProductPage;