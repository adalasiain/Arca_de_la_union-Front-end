import NavBar from '../core/components/NavBar/NavBar';
import Gallery from '../core/components/Gallery/Gallery';
import Footer from '../core/components/Footer/Footer';

const GalleryPage = () => {
    return (
        <>
           <div className="flex flex-col min-h-screen">
                <NavBar />
                <Gallery/>
                <Footer />
            </div>
        </>
    );
}

export default GalleryPage;