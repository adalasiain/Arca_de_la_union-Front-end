import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CustomProductPage from '../pages/CustomProductPage';
import ShoppingCart from '../pages/ShoppingCart';
import GalleryPage from '../pages/GalleryPage';
import ContactUsPage from '../pages/ContactUsPage';
import AboutUsPage from '../pages/AboutUsPage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/customize-product",
    element: <CustomProductPage />
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />
  },
  {
    path: '/gallery',
    element: <GalleryPage />
  },
  {
    path: '/contact-us',
    element: <ContactUsPage />
  },
  {
    path: '/about-us',
    element: <AboutUsPage />
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default Router;