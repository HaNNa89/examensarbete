import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/imprima';
import '@fontsource/indie-flower';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.tsx';
import Admin from './pages/Admin.tsx';
import AdminForm from './pages/AdminForm.tsx';
import Checkout from './pages/Checkout.tsx';
import Detail from './pages/Detail.tsx';
import Favorites from './pages/Favorites.tsx';
import Home from './pages/Home.tsx';
import OrderConfirmation from './pages/OrderConfirmation.tsx';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#1A1A1C',
        color: 'white',
        margin: 0,
      },
    },
  },
  fonts: {
    heading: `'Indie Flower', sans-serif`,
    body: `'Imprima', sans-serif`,
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="/id/:productName" element={<Detail />} />
      <Route path="/admin/:productId" element={<AdminForm />} />
      <Route path="admin" element={<Admin />} />
      <Route path="orderconfirmation" element={<OrderConfirmation />} />
      <Route path="categories/:category" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
