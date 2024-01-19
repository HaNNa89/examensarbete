import React, { createContext, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

interface Product {
  title: string;
  img: string;
  price: number;
  id: number;
  isLiked: boolean;
}

type FavoritesContextType = {
  favoriteProducts: Product[];
  setFavoriteProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

function useToggleFavorite() {
  const { favoriteProducts, setFavoriteProducts } = useFavoritesContext();

  const toggleProductFavorite = (
    product: Product & {
      title: string;
      img: string;
      price: number;
      isLiked: boolean;
    }
  ) => {
    const isAlreadyFavorited = favoriteProducts.some(
      (favProduct) => favProduct.title === product.title
    );

    if (!isAlreadyFavorited) {
      setFavoriteProducts([...favoriteProducts, product]);
    } else {
      const updatedFavoriteProducts = favoriteProducts.filter(
        (favProduct) => favProduct.title !== product.title
      );
      setFavoriteProducts(updatedFavoriteProducts);
    }
  };

  return toggleProductFavorite;
}

function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesContextProvider'
    );
  }
  return context;
}

const FavoritesContextProvider: React.FC<{ children: React.ReactNode }> =
  function ({ children }) {
    const [favoriteProducts, setFavoriteProducts] = useLocalStorage(
      'favoriteProducts',
      []
    );

    return (
      <FavoritesContext.Provider
        value={
          {
            favoriteProducts,
            setFavoriteProducts,
          } as unknown as FavoritesContextType
        }
      >
        {children}
      </FavoritesContext.Provider>
    );
  };
// eslint-disable-next-line react-refresh/only-export-components
export { FavoritesContextProvider, useFavoritesContext, useToggleFavorite };
