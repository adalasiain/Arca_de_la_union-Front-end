import Footer from "../core/components/Footer/Footer";
import NavBar from "../core/components/NavBar/NavBar";
import Error from "../core/components/Error/Error";

const ErrorPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <Error />
                <Footer />
            </div>
        </>
    );
}

export default ErrorPage;