import { Center, Divider, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomerForm, { Customer } from "../components/CustomerForm";
import ShoppingCartCheckout from "../components/ShoppingCartCheckout";
import { useCart } from "../hooks/useCartContext";
import { useOrder } from "../hooks/useOrderContext";

function Checkout() {
	const { order, handleOrderSubmit } = useOrder();
	const { cartItems } = useCart();
	console.log("Checkout cartItems:", cartItems);
	console.log("Order:", order);

	const navigate = useNavigate();
	const handleSubmit = (values: Customer) => {
		handleOrderSubmit(values);
		navigate("/orderconfirmation");
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Center flexDir="column">
			<Heading as="h1" mt="4" mb="10">
				Checkout
			</Heading>
			<Divider w={["20rem", "35rem", "49rem"]} />
			<ShoppingCartCheckout />
			<CustomerForm onSubmit={handleSubmit} />
		</Center>
	);
}

export default Checkout;
