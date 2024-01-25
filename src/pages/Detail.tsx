import {
	Box,
	Card,
	CardBody,
	Center,
	Flex,
	HStack,
	Heading,
	IconButton,
	Image,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import { MOCK_PRODUCTS } from "../../data/mock";
import { useCart } from "../hooks/useCartContext";
import {
	useFavoritesContext,
	useToggleFavorite,
} from "../hooks/useFavoritesContext";
import { useProductContext } from "../hooks/useProductContext";

interface DetailProduct {
	img: string;
	title: string;
	subheading: string;
	categorie: string;
	price: number;
	id: number;
	description: string;
	ingredients: string[];
}

function Detail() {
	const { productName } = useParams();
	const { products } = useProductContext();
	const allProducts = [...products, ...MOCK_PRODUCTS];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { favoriteProducts } = useFavoritesContext();
	const toggleProductFavorite = useToggleFavorite();

	const product: DetailProduct | undefined = allProducts.find(
		(p) => p.title === productName
	);

	if (!product) {
		return (
			<Center>
				<Text>Product not found!</Text>;
			</Center>
		);
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { addToCart } = useCart();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isOpen, setIsOpen] = useState(false);

	const handletoggleMenuBox = () => {
		setIsOpen(!isOpen);
	};

	const handleAddToCartClick = () => {
		addToCart(product);
	};

	const isProductLiked = favoriteProducts.some(
		(favProduct) => favProduct.title === product.title
	);

	const handleToggleLike = () => {
		const isLiked = favoriteProducts.some(
			(favProduct) => favProduct.title === product.title
		);

		toggleProductFavorite({
			title: product.title,
			img: product.img,
			price: product.price,
			isLiked,
			id: product.id,
		});
	};

	return (
		<Flex
			direction={{ base: "column", md: "row" }}
			justifyContent="center"
			alignItems="center"
			py={50}
		>
			<Box alignContent="center" justifyContent="center" w="300px" h="500px">
				<Image
					src={product.img}
					alt={product.title}
					width="100%"
					height="100%"
					objectFit="cover"
				/>
			</Box>
			<Card
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				maxW="900px"
				m={30}
				bg="#1A1A1C"
				color="white"
				borderRadius="none"
			>
				<Flex alignItems="center" justifyContent="center">
					<Stack
						w={{ base: "100%", sm: "400px" }}
						ml={{ base: "0", sm: "22", md: "0" }}
					>
						<CardBody>
							<Heading>{product.title}</Heading>
							<Text>{product.subheading}</Text>
							<Text py={4}>{product.description}</Text>
							<Text fontWeight={600}>{product.price} SEK</Text>

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
								onClick={handleAddToCartClick}
							>
								Order
							</Box>
							<IconButton
								icon={isProductLiked ? <GoHeartFill /> : <GoHeart />}
								aria-label={isProductLiked ? "Unlike" : "Like"}
								fontSize="1.5rem"
								bg="none"
								color="white"
								_hover={{ bg: "none" }}
								onClick={handleToggleLike}
							/>

							<Flex direction="column" mt={14}>
								<Flex align="center">
									<HStack>
										<Text>Ingredients</Text>
										<IconButton
											icon={<FaChevronDown />}
											colorScheme="white"
											aria-label="down"
											fontSize={14}
											onClick={handletoggleMenuBox}
										/>
									</HStack>
								</Flex>

								{isOpen && (
									<Box>
										<UnorderedList>
											{product.ingredients.map((ingredient, index) => (
												<ListItem key={index}>{ingredient}</ListItem>
											))}
										</UnorderedList>
									</Box>
								)}
							</Flex>
						</CardBody>
					</Stack>
				</Flex>
			</Card>
		</Flex>
	);
}

export default Detail;
