import NavBar from '../core/components/NavBar/NavBar';
import CustomizationProduct from '../core/components/CustomizationProduct/CustomizationProduct';
import Footer from '../core/components/Footer/Footer';

const CustomProductPage = () => {
    return (
        <>
            <div className="flex flex-col">
                <NavBar />
                <CustomizationProduct className="flex-grow my-4"/>
                <Footer />
            </div>
        </>
    );
};

export default CustomProductPage;