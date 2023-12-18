import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import Admin from "./pages/Admin.tsx";
import Checkout from "./pages/Checkout.tsx";
import Detail from "./pages/Detail.tsx";
import Favorites from "./pages/Favorites.tsx";
import Home from "./pages/Home.tsx";
import OrderConfirmation from "./pages/OrderConfirmation.tsx";
import SearchResult from "./pages/SearchResult.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="checkout" element={<Checkout />} />
			<Route path="favorites" element={<Favorites />} />
			<Route path="/id/:productName" element={<Detail />} />
			<Route path="admin" element={<Admin />} />
			<Route path="orderconfirmation" element={<OrderConfirmation />} />
			<Route path="search-results/:term" element={<SearchResult />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
