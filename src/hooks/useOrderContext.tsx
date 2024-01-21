import { createContext, useContext, useState } from "react";
import { Customer } from "../components/CustomerForm";
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

const OrderContext = createContext<OrderContextProps>(null as any);

export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }: { children: React.ReactNode }) {
	const [order, setOrder] = useState<Order | undefined>();

	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
		"cartItems",

		[]
	);

	const handleOrderSubmit = (customerData: Customer) => {
		console.log("Handle Order Submit Called");
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
		setOrder(order);
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
