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

const OrderContext = createContext<OrderContextProps>(null as never);

// eslint-disable-next-line react-refresh/only-export-components
export const useOrder = () => useContext(OrderContext);

export function OrderProvider({ children }: { children: React.ReactNode }) {
	const [order, setOrder] = useState<Order | undefined>();
	const [confirmedOrderItems, setConfirmedOrderItems] = useState<CartItem[]>(
		[]
	);
	const { cartItems, clearShoppingCart } = useCart();

	const handleOrderSubmit = async (customerData: Customer) => {
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
		} catch (error) {
			console.log(error);
		}

		setConfirmedOrderItems(cartItems);
		clearShoppingCart();
		console.log("Cart Items after clearing:", confirmedOrderItems);
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
