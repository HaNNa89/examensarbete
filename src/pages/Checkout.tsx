import { Center, Divider, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CustomerForm, { Customer } from "../components/CustomerForm";
import ShoppingCartCheckout from "../components/ShoppingCartCheckout";
import { useOrder } from "../hooks/useOrderContext";

function Checkout() {
	const { order, handleOrderSubmit } = useOrder();
	console.log("Order:", order);
	const navigate = useNavigate();

	const handleSubmit = (values: Customer) => {
		handleOrderSubmit(values);
		navigate("/orderconfirmation");
	};

	console.log("Current order in Checkout:", order);
	return (
		<Center flexDir="column">
			<Heading m="8">Checkout</Heading>
			<Divider w={["20rem", "35rem", "49rem"]} />
			<ShoppingCartCheckout />
			<CustomerForm onSubmit={handleSubmit} />
			<Divider w={["20rem", "35rem", "49rem"]} />
		</Center>
	);
}

export default Checkout;
