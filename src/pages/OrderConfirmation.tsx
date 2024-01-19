import {
	Box,
	Flex,
	Heading,
	Image,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useCart } from "../hooks/useCartContext";
import { useOrder } from "../hooks/useOrderContext";

function OrderConfirmation() {
	const isLargeScreen = useBreakpointValue({ base: false, md: true });
	const { order } = useOrder();
	console.log("Hej Order in OrderConfirmation:", order);
	const { cartItems } = useCart();
	if (!order) {
		return <Text>no order available</Text>;
	}
	return (
		<Flex direction="column" align="center" justify="center" p="4">
			<Heading as="h1" mt="4" mb="6">
				Order Confirmation
			</Heading>
			<Text fontSize="lg" mb="4">
				Thank you for your order
			</Text>
			<Text fontSize="lg" mb="6">
				Order: {order.orderId}
			</Text>
			<Text fontSize="lg" mb="6">
				Order date: {order.orderDate}
			</Text>
			<Flex overflowX="auto">
				{isLargeScreen ? (
					<Table variant="simple" minWidth="80%">
						<Thead>
							<Tr>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Product
								</Th>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Pieces
								</Th>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Date
								</Th>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Recipient
								</Th>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Price
								</Th>
							</Tr>
						</Thead>
						{order.cart.map((item) => (
							<Tbody key={item.id}>
								<Tr>
									<Td w={["30%", "20%", "20%"]} fontSize={["sm", "md", "lg"]}>
										<Image
											src={item.img}
											alt={item.title}
											objectFit="cover"
											width="100%"
											height="100%"
										/>
									</Td>
									<Td fontSize={["sm", "md", "lg"]}>{item.quantity}</Td>

									<Td fontSize={["sm", "md", "lg"]}>{order.totalPrice}</Td>
									<Td fontSize={["sm", "md", "lg"]}>{item.price}</Td>
								</Tr>
							</Tbody>
						))}
					</Table>
				) : (
					<Table variant="simple" minWidth="80%">
						<Thead display={"table-header-group"}>
							<Tr>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Product
								</Th>
							</Tr>
						</Thead>
						{order.cart.map((item) => (
							<Tbody>
								<Tr>
									<Td fontSize={["sm", "md", "lg"]} mb={["4", "0"]}>
										<Flex direction="column" align="start">
											<Box w="30">
												<Image
													src={item.img}
													alt={item.title}
													objectFit="cover"
													width="100%"
													height="auto"
													mb={["4", "0"]}
												/>
											</Box>
											<Text fontSize={["sm", "md", "lg"]}>{item.quantity}</Text>

											<Text fontSize={["sm", "md", "lg"]}>
												{order.totalPrice}
											</Text>
											<Text fontSize={["sm", "md", "lg"]}>{item.price}</Text>
										</Flex>
									</Td>
								</Tr>
							</Tbody>
						))}
					</Table>
				)}
			</Flex>
			<Flex align="center" gap="2" mt="6">
				<Heading fontSize={["lg", "xl", "2xl"]}>Total Price:</Heading>
				<Text fontSize={["md", "lg", "xl"]}>{order.totalPrice}</Text>
			</Flex>
		</Flex>
	);
}

export default OrderConfirmation;
