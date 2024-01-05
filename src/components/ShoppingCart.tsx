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
	useDisclosure,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MOCK_PRODUCTS } from "../../data/mock";

function ShoppingCart() {
	const product = MOCK_PRODUCTS[0];
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex>
			<IconButton
				icon={<HiOutlineShoppingBag />}
				colorScheme="white"
				aria-label="cart"
				onClick={onOpen}
				display={{ base: "block", md: "none" }}
			/>

			<Drawer isOpen={isOpen} size="xs" placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent bg="#1A1A1C">
					<DrawerCloseButton />
					<DrawerHeader>
						<Center>Shopping Cart</Center>
					</DrawerHeader>
					<DrawerBody>
						<Flex direction="column" justifyContent="space-between">
							<Flex gap={2}>
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
											>
												-
											</Box>
											<Text fontSize={14}>8</Text>
											<Box
												as="button"
												fontSize="14px"
												fontWeight={600}
												_hover={{
													bg: "whiteAlpha.200",

													boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
												}}
											>
												+
											</Box>
										</Flex>
									</Flex>
									<Flex direction="column" mb={20}>
										<IconButton
											icon={<AiFillDelete />}
											colorScheme="white"
											aria-label="search"
											size="xs"
											fontSize={20}
										/>
									</Flex>
								</HStack>
							</Flex>

							<Divider mt={4} />

							<Flex justifyContent="space-between" align="center" py={4} px={2}>
								<Text>Total:</Text>
								<Text>800 SEK</Text>
							</Flex>
						</Flex>
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
