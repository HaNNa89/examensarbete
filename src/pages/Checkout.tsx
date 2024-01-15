import { Center, Divider, Heading } from "@chakra-ui/react";
import ShoppingCartCheckout from "../components/ShoppingCartCheckout";

function Checkout() {
	const handleOrderClick = () => {};
	return (
		<Center flexDir="column">
			<Heading m="8">Checkout</Heading>
			<Divider w={["20rem", "35rem", "49rem"]} />
			<ShoppingCartCheckout />
			{/** 			<Divider w={["20rem", "35rem", "49rem"]} />
			<Flex mt="2rem" justify="space-between" w={["20rem", "35rem", "49rem"]}>
				<Heading>Total:</Heading>
				<Button
					bg="none"
					w="10rem"
					border="1px"
					borderColor="white"
					textColor="white"
					_hover={{
						bg: "whiteAlpha.200",
						borderWidth: "2px",
						boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
					}}
					onClick={handleOrderClick}
				>
					Order
				</Button>
			</Flex>*/}

			{/* fyll på med ett form där man kan skriva in namn och adress */}
		</Center>
	);
}

export default Checkout;
