import NavBar from '../core/components/NavBar/NavBar';
import Footer from '../core/components/Footer/Footer';
import AboutUs from '../core/components/AboutUs/AboutUs';

const AboutUsPage = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <NavBar />
                <AboutUs/>
                <Footer />
            </div>
        </>
    );
}

export default AboutUsPage;