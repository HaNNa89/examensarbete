import {
	Box,
	Button,
	Center,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	IconButton,
	Image,
	Text,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCartContext";

function ShoppingCart() {
	const {
		isOpen,
		closeCart,
		cartItems,
		decreaseQuantity,
		increaseQuantity,
		calculateTotal,
		removeFromCart,
	} = useCart();

	return (
		<Flex>
			<IconButton
				icon={<HiOutlineShoppingBag />}
				colorScheme="white"
				aria-label="cart"
				display={{ base: "block", md: "none" }}
			/>

			<Drawer isOpen={isOpen} size="xs" placement="right" onClose={closeCart}>
				<DrawerOverlay />
				<DrawerContent bg="#1A1A1C">
					<DrawerCloseButton />
					<DrawerHeader>
						<Center>Shopping Cart</Center>
					</DrawerHeader>
					<DrawerBody>
						<Flex direction="column" justifyContent="space-between">
							{cartItems.length > 0 ? (
								cartItems.map((product) => (
									<Flex key={product.id} gap={2}>
										<Box w="150px">
											<Image
												src={product.img}
												alt={product.title}
												maxH="100%"
												maxW="100%"
												objectFit="cover"
											/>
										</Box>
										<HStack spacing={20}>
											<Flex direction="column" justifyContent="space-between">
												<Box>
													<Text fontSize="16">{product.title}</Text>
													<Text fontSize="16">{product.subheading}</Text>
													<Text fontSize="16">{product.price} SEK</Text>
												</Box>

												<Flex
													justifyContent="center"
													align="center"
													border="1px"
													gap={4}
													mt={4}
												>
													<Box
														as="button"
														fontSize="14px"
														fontWeight={600}
														_hover={{
															bg: "whiteAlpha.200",

															boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
														}}
														onClick={() => decreaseQuantity(product.id)}
														cursor="pointer"
													>
														-
													</Box>
													<Text fontSize={14}>{product.quantity}</Text>
													<Box
														as="button"
														fontSize="14px"
														fontWeight={600}
														_hover={{
															bg: "whiteAlpha.200",

															boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
														}}
														onClick={() => increaseQuantity(product.id)}
														cursor="pointer"
													>
														+
													</Box>
												</Flex>
											</Flex>
											<Flex direction="column" mb={20}>
												<IconButton
													icon={<AiFillDelete />}
													colorScheme="white"
													aria-label="delete"
													size="xs"
													fontSize={20}
													onClick={() => removeFromCart(product.id)}
													cursor="pointer"
												/>
											</Flex>
										</HStack>
									</Flex>
								))
							) : (
								<Flex direction="column">
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
											onClick={closeCart}
										>
											Start shopping!
										</Box>
									</Link>
								</Flex>
							)}
						</Flex>
						{cartItems.length > 0 && (
							<>
								<Divider mt={4} />

								<Flex
									justifyContent="space-between"
									align="center"
									py={4}
									px={2}
								>
									<Text>Total:</Text>
									<Text>{calculateTotal()} SEK</Text>
								</Flex>
							</>
						)}
					</DrawerBody>
					<DrawerFooter>
						<Button>Order</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
}

export default ShoppingCart;
