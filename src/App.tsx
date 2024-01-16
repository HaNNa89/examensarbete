import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./hooks/useCartContext";
import { FavoritesContextProvider } from "./hooks/useFavoritesContext";
import { OrderProvider } from "./hooks/useOrderContext";
function App() {
	return (
		<>
			<OrderProvider>
				<CartProvider>
					<FavoritesContextProvider>
						<Header />
						<Outlet />
						<Footer />
					</FavoritesContextProvider>
				</CartProvider>
			</OrderProvider>
		</>
	);
}

export default App;
