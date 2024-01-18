import { Center, Divider, Heading } from "@chakra-ui/react";
import CustomerForm from "../components/CustomerForm";
import ShoppingCartCheckout from "../components/ShoppingCartCheckout";
import { useOrder } from "../hooks/useOrderContext";

function Checkout() {
	const { order } = useOrder();

	console.log("Current order in Checkout:", order);
	return (
		<Center flexDir="column">
			<Heading m="8">Checkout</Heading>
			<Divider w={["20rem", "35rem", "49rem"]} />
			<ShoppingCartCheckout />
			<CustomerForm />
			<Divider w={["20rem", "35rem", "49rem"]} />
		</Center>
	);
}

export default Checkout;
