import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "./useLocalStorage";

interface Product {
	id: number;
	price: number;
	img: string;
	title: string;
	subheading: string;
}

interface CartItem extends Product {
	quantity: number;
}

interface CartContext {
	cartItems: CartItem[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	increaseQuantity: (productId: number) => void;
	decreaseQuantity: (productId: number) => void;
	calculateTotal: () => number;
	isOpen: boolean;
	openCart: () => void;
	closeCart: () => void;
}

const CartContext = createContext<CartContext>({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
	increaseQuantity: () => {},
	decreaseQuantity: () => {},
	calculateTotal: () => 0,
	openCart: () => {},
	closeCart: () => {},
	isOpen: false,
});

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartContext {
	return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
		"cartItems",
		[]
	);
	const [isOpen, setIsOpen] = useState(false);

	const addToCart = (product: Product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);
		openCart();
		if (existingItem) {
			const updatedCart = cartItems.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCartItems(updatedCart);
			openCart();
		} else {
			setCartItems([
				...cartItems,
				{
					...product,
					quantity: 1,
					title: product.title,
					subheading: product.subheading,
					img: product.img,
				},
			]);
		}
	};

	const removeFromCart = (productId: number) => {
		const updatedCart = cartItems.filter((item) => item.id !== productId);
		setCartItems(updatedCart);
	};

	const increaseQuantity = (productId: number) => {
		const updatedCart = cartItems.map((item) =>
			item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
		);
		setCartItems(updatedCart);
	};

	const decreaseQuantity = (productId: number) => {
		const updatedCart = cartItems.map((item) =>
			item.id === productId && item.quantity > 1
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
		setCartItems(updatedCart);
	};

	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);

	const cartValues: CartContext = {
		cartItems,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		calculateTotal,
		isOpen,
		openCart,
		closeCart,
	};

	return (
		<CartContext.Provider value={cartValues}>
			{children} <ShoppingCart />
		</CartContext.Provider>
	);
}
