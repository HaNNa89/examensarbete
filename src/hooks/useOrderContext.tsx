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
	cart: CartItem[];
	customerData: Customer;
}

interface OrderContextProps {
	order?: Order;
	handleOrderSubmit: (customerData: Customer, cartItems: CartItem[]) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }: { children: React.ReactNode }) {
	const [order, setOrder] = useState<Order | undefined>(undefined);
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
		"cartItems",
		[]
	);

	const handleOrderSubmit = (customerData: Customer) => {
		const createOrder: Order = {
			cart: cartItems,
			customerData: customerData,
		};
		setOrder(createOrder);
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
