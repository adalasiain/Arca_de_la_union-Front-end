import NavBar from '../core/components/NavBar/NavBar';
import Footer from '../core/components/Footer/Footer';

const GalleryPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <main className='flex-grow'>
                    <h1 className='font-bold text-center'>Galería de Imagenes</h1>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default GalleryPage;