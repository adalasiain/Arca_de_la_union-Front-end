import NavBar from '../core/components/NavBar/NavBar';
import ContactUs from '../core/components/ContactUs/ContactUs';
import Footer from '../core/components/Footer/Footer';

const ContactUsPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <ContactUs/>
                <Footer />
            </div>
        </>
    );
}

export default ContactUsPage;