import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartProvider } from './hooks/useCartContext';
import { FavoritesContextProvider } from './hooks/useFavoritesContext';
function App() {
  return (
    <>
      <CartProvider>
        <FavoritesContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </FavoritesContextProvider>
      </CartProvider>
    </>
  );
}

export default App;
