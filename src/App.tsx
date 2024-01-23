import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartProvider } from './hooks/useCartContext';
import { FavoritesContextProvider } from './hooks/useFavoritesContext';
import { OrderProvider } from './hooks/useOrderContext';
import { ProductProvider } from './hooks/useProductContext';
function App() {
  return (
    <>
      <ProductProvider>
        <OrderProvider>
          <CartProvider>
            <FavoritesContextProvider>
              <Header />
              <Outlet />
              <Footer />
            </FavoritesContextProvider>
          </CartProvider>
        </OrderProvider>
      </ProductProvider>
    </>
  );
}

export default App;
