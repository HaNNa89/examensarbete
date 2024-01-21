import {
	Box,
	Divider,
	Flex,
	Heading,
	IconButton,
	Image,
	Text,
} from "@chakra-ui/react";
import { CiCircleMinus, CiCirclePlus, CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCartContext";
function ShoppingCartCheckout() {
	const {
		cartItems,
		decreaseQuantity,
		increaseQuantity,
		calculateTotal,
		removeFromCart,
	} = useCart();

	return (
		<Flex direction="column" w="70%" align="stretch" py={4}>
			{cartItems.length > 0 ? (
				<>
					{cartItems.map((product) => (
						<Flex key={product.id} py={4}>
							<Box
								width={["6rem", "8rem", "8rem"]}
								height={["11rem", "13rem", "13rem"]}
							>
								<Image
									src={product.img}
									alt={product.title}
									objectFit="cover"
									width="100%"
									height="100%"
								/>
							</Box>
							<Flex
								justifyContent="space-between"
								direction={{ base: "column", md: "row" }}
								flex="1"
								ml={4}
								gap={{ base: 0, sm: "4" }}
							>
								<Flex direction="column">
									<Text>{product.title}</Text>
									<Text>{product.price} SEK</Text>
								</Flex>

								<Flex
									direction={{ base: "column", sm: "row" }}
									justifyContent="space-between"
									gap={{ base: 0, sm: "4" }}
								>
									<Flex ml={-2}>
										<IconButton
											icon={<CiCircleMinus />}
											aria-label="Plus"
											fontSize="1.5rem"
											bg="none"
											color="white"
											_hover={{ bg: "none" }}
											onClick={() => decreaseQuantity(product.id)}
										/>
										<Text mt={2}>{product.quantity}</Text>
										<IconButton
											icon={<CiCirclePlus />}
											aria-label="Minus"
											fontSize="1.5rem"
											bg="none"
											color="white"
											_hover={{ bg: "none" }}
											onClick={() => increaseQuantity(product.id)}
										/>
									</Flex>
									<Flex ml={-2}>
										<IconButton
											icon={<CiTrash />}
											aria-label="Trashcan"
											fontSize="1.5rem"
											bg="none"
											color="white"
											_hover={{ bg: "none" }}
											onClick={() => removeFromCart(product.id)}
										/>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					))}
					<Divider mt={3} />
					<Flex justifyContent="space-between" align="center" px={6} mt={2}>
						<Heading fontSize={28}>Total:</Heading>
						<Text fontSize="18px">{calculateTotal()} SEK</Text>
					</Flex>
				</>
			) : (
				<Flex
					direction="column"
					justifyContent="space-between"
					align="center"
					py={6}
				>
					<Text fontSize={{ base: "16px", sm: "18px" }} mb={4}>
						Oops, your shopping cart is empty...
					</Text>
					<Link to="/">
						<Box
							as="button"
							width="200px"
							height="40px"
							mt={4}
							bg="none"
							color="white"
							border="1px"
							_hover={{
								bg: "whiteAlpha.200",
								borderWidth: "2px",
								boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
							}}
						>
							Start Your Order!
						</Box>
					</Link>
				</Flex>
			)}
		</Flex>
	);
}

export default ShoppingCartCheckout;
