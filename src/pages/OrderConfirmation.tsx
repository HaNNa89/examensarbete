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

import { BsPatchCheck } from "react-icons/bs";

function OrderConfirmation() {
	const isLargeScreen = useBreakpointValue({ base: false, md: true });
	const { order } = useOrder();
	console.log("Hej Order in OrderConfirmation:", order);
	const { cartItems } = useCart();
	if (!order) {
		return <Text>no order available</Text>;
	}
	return (
		<Flex direction="column" align="center" justify="center" p="4" py={10}>
			<Heading as="h1" mt="4" mb="10">
				Order Confirmation
			</Heading>

			<Text fontSize={50} mb={6}>
				<BsPatchCheck />
			</Text>

			<Flex direction="column" align="center" py={6}>
				<Heading fontSize="28" fontWeight={700} mb="4">
					Thank you {order.customerData.firstName} for your order!
				</Heading>
				<Text fontSize="20" mb="2">
					Order number: {order.orderId}
				</Text>
				<Text fontSize="20" mb="6">
					Order date: {order.orderDate}
				</Text>
			</Flex>

			<Flex direction="column" align="center">
				<Heading fontSize="28" mb="4">
					Contact Information
				</Heading>
				<Flex fontSize="20" gap={2}>
					<Text>{order.customerData.firstName}</Text>
					<Text>{order.customerData.lastName}</Text>
				</Flex>
				<Text fontSize="20">{order.customerData.phone}</Text>
				<Text fontSize="20">{order.customerData.email}</Text>
				<Text fontSize="20">{order.customerData.address}</Text>
				<Flex fontSize="20" gap={2} mb={6}>
					<Text>{order.customerData.zipcode}</Text>
					<Text>{order.customerData.city}</Text>
				</Flex>
			</Flex>
			<Flex overflowX="auto" mt={10}>
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
