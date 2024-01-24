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
	useCart();
	if (!order) {
		return <Text>no order available</Text>;
	}
	return (
		<Flex direction="column" align="center" justify="center" p="4" py={10}>
			<Heading as="h1" mt="4" mb="10">
				Order Confirmation
			</Heading>

			<Text fontSize={60} mb={6}>
				<BsPatchCheck />
			</Text>

			<Flex direction="column" align="center" py={6}>
				<Heading
					fontSize={{ base: "22", sm: "24", md: "28" }}
					fontWeight={700}
					mb="4"
				>
					Thank you {order.customerData.firstName} for your order!
				</Heading>
				<Text fontSize={{ base: "16", sm: "18", md: "20" }} mb="2">
					Order number: {order.orderId}
				</Text>
				<Text fontSize={{ base: "16", sm: "18", md: "20" }} mb="6">
					Order date: {order.orderDate}
				</Text>
			</Flex>

			<Flex direction="column" align="center">
				<Heading fontSize={{ base: "22", sm: "24", md: "28" }} mb="4">
					Contact Information
				</Heading>
				<Flex fontSize={{ base: "16", sm: "18", md: "20" }} gap={2}>
					<Text>{order.customerData.firstName}</Text>
					<Text>{order.customerData.lastName}</Text>
				</Flex>
				<Text fontSize={{ base: "16", sm: "18", md: "20" }}>
					{order.customerData.phone}
				</Text>
				<Text fontSize={{ base: "16", sm: "18", md: "20" }}>
					{order.customerData.email}
				</Text>
				<Text fontSize={{ base: "16", sm: "18", md: "20" }}>
					{order.customerData.address}
				</Text>
				<Flex fontSize={{ base: "16", sm: "18", md: "20" }} gap={2} mb={6}>
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
								<Th color="white" fontSize={["sm", "md", "lg"]}></Th>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Quantity
								</Th>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Pieces
								</Th>
								<Th color="white" fontSize={["sm", "md", "lg"]}>
									Total
								</Th>
							</Tr>
						</Thead>
						{order.cart.map((cartItems) => (
							<Tbody key={cartItems.id}>
								<Tr>
									<Td w={["30%", "20%", "20%"]} fontSize={["sm", "md", "lg"]}>
										<Image
											src={cartItems.img}
											alt={cartItems.title}
											objectFit="cover"
											width="100%"
											height="100%"
										/>
									</Td>
									<Td fontSize={["sm", "md", "lg"]}>{cartItems.title}</Td>
									<Td fontSize={["sm", "md", "lg"]}>{cartItems.quantity}</Td>
									<Td fontSize={["sm", "md", "lg"]}>{cartItems.subheading}</Td>
									<Td fontSize={["sm", "md", "lg"]}>
										{cartItems.price * cartItems.quantity} SEK
									</Td>
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
						{order.cart.map((cartItems) => (
							<Tbody key={cartItems.id}>
								<Tr>
									<Td fontSize={["sm", "md", "lg"]} mb={["4", "0"]}>
										<Flex direction="column" align="start">
											<Box w="30">
												<Image
													src={cartItems.img}
													alt={cartItems.title}
													objectFit="cover"
													width="100%"
													height="auto"
													mb={["4", "6"]}
												/>
											</Box>
											<Flex gap={4}>
												<Text fontSize={["sm", "md", "lg"]}>
													Product: {cartItems.title}
												</Text>
												<Text fontSize={["sm", "md", "lg"]}>
													Quantity: {cartItems.quantity}
												</Text>
												<Text fontSize={["sm", "md", "lg"]}>
													Pieces: {cartItems.subheading}
												</Text>
												<Text fontSize={["sm", "md", "lg"]}>
													Total: {cartItems.price * cartItems.quantity} SEK
												</Text>
											</Flex>
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
				<Text fontWeight={800} fontSize={["md", "lg", "xl"]}>
					{order.totalPrice} SEK
				</Text>
			</Flex>
		</Flex>
	);
}

export default OrderConfirmation;
