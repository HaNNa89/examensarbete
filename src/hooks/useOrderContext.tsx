import { createContext, useContext, useState } from "react";
import { Customer } from "../components/CustomerForm";
import { useCart } from "./useCartContext";

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

interface Order {
	orderId: string;
	orderDate: string;
	cart: CartItem[];
	totalPrice: number;
	customerData: Customer;
}

interface OrderContextProps {
	order?: Order;
	handleOrderSubmit: (customerData: Customer) => void;
}

//TODO:
//Kunna logga ut cartItems i kontexten, för att se att de faktiskt hämtas korrekt från local storage
//cartItems visas endast efter refresh, varför?

const OrderContext = createContext<OrderContextProps>(null as never);

// eslint-disable-next-line react-refresh/only-export-components
export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }: { children: React.ReactNode }) {
	const [order, setOrder] = useState<Order | undefined>();
	const [confirmedOrderItems, setConfirmedOrderItems] = useState<CartItem[]>(
		[]
	);
	const { cartItems, clearShoppingCart } = useCart();

	console.log("Cart Items in Order Context:", cartItems);

	const handleOrderSubmit = async (customerData: Customer) => {
		// console.log("Handle Order Submit Called");
		console.log("Cart Items in handleOrderSubmit:", cartItems);
		const orderId = Date.now().toString();
		const orderDate = new Date().toLocaleDateString();
		const totalPrice = cartItems.reduce(
			(total: number, item: { price: number; quantity: number }) =>
				total + item.price * item.quantity,
			0
		);
		const order: Order = {
			orderId,
			orderDate,
			cart: cartItems,
			totalPrice,
			customerData,
		};

		try {
			setOrder(order);
			console.log("Order:", order);
			console.log("Cart Items before clearing:", cartItems);
		} catch (error) {
			console.log(error);
		}

		setConfirmedOrderItems(cartItems);
		console.log("Confirmed Order Items:", confirmedOrderItems);

		clearShoppingCart();
		console.log("Cart Items after clearing:", confirmedOrderItems);
		console.log("Cart Items after clearing in handleOrderSubmit:", cartItems);
	};

	const orderValues: OrderContextProps = {
		order,
		handleOrderSubmit,
	};

	return (
		<OrderContext.Provider value={orderValues}>
			{children}
		</OrderContext.Provider>
	);
}
