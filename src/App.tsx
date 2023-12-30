import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { FavoritesContextProvider } from './hooks/useFavoritesContext';
function App() {
  return (
    <>
      <FavoritesContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </FavoritesContextProvider>
    </>
  );
}

export default App;
