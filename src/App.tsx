import React, { ErrorInfo, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartProvider } from './hooks/useCartContext';
import { FavoritesContextProvider } from './hooks/useFavoritesContext';
import { OrderProvider } from './hooks/useOrderContext';
import { ProductProvider } from './hooks/useProductContext';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </>
  );
}

export default App;
