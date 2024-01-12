import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { CiCircleMinus, CiCirclePlus, CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCartContext";

function ShoppingCartCheckout() {
	//const product = MOCK_PRODUCTS[0];
	const {
		cartItems,
		decreaseQuantity,
		increaseQuantity,
		calculateTotal,
		removeFromCart,
	} = useCart();
	return (
		<>
			{cartItems.length > 0 ? (
				<>
					{cartItems.map((product) => (
						<Flex
							key={product.id}
							alignItems="flex-start"
							m={["2", "8", "12"]}
							gap={["0", "8", "24"]}
						>
							<Box
								width={["6rem", "10rem", "10rem"]}
								height={["11rem", "15rem", "15rem"]}
							>
								<Image
									src={product.img}
									alt={product.title}
									objectFit="cover"
									width="100%"
									height="100%"
								/>
							</Box>
							<Text m="2">{product.title}</Text>
							<Text m="2">{product.price} SEK</Text>
							<Flex alignItems="center">
								<IconButton
									icon={<CiCircleMinus />}
									aria-label="Plus"
									fontSize="1.5rem"
									w="fit-content"
									bg="none"
									color="white"
									_hover={{ bg: "none" }}
									onClick={() => decreaseQuantity(product.id)}
								/>
								<Text>{product.quantity}</Text>
								<IconButton
									icon={<CiCirclePlus />}
									aria-label="Minus"
									fontSize="1.5rem"
									w="fit-content"
									bg="none"
									color="white"
									_hover={{ bg: "none" }}
									onClick={() => increaseQuantity(product.id)}
								/>
							</Flex>
							<IconButton
								icon={<CiTrash />}
								aria-label="Trashcan"
								fontSize="1.5rem"
								w="fit-content"
								bg="none"
								color="white"
								_hover={{ bg: "none" }}
								onClick={() => removeFromCart(product.id)}
							/>
						</Flex>
					))}

					<Flex justifyContent="space-between" align="center" py={2} px={2}>
						<Text>Total:</Text>
						<Text>{calculateTotal()} SEK</Text>
					</Flex>
				</>
			) : (
				<Flex direction="column" align="center">
					<Text>Oops your shopping cart is empty...</Text>
					<Link to="/">
						<Box
							as="button"
							width="250px"
							height="40px"
							mt={10}
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
		</>
	);
}

export default ShoppingCartCheckout;
