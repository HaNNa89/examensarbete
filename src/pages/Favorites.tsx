import { Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { MOCK_PRODUCTS, Product } from "../../data/mock";
import ProductCard from "../components/ProductCard";

interface FavoriteProduct {
	img: string;
	title: string;
	price: number;
	id: number;
	isLiked: boolean;
}

function Favorites() {
	const favoriteProductsFromLocalStorage: FavoriteProduct[] = JSON.parse(
		localStorage.getItem("favoriteProducts") || "[]"
	);

	const favoriteProducts: Product[] = MOCK_PRODUCTS.filter((product) =>
		favoriteProductsFromLocalStorage.some(
			(favProduct) => favProduct.title === product.title
		)
	);

	return (
		<Flex direction="column" alignItems="center">
			<Heading m="8">Favorites</Heading>
			{favoriteProducts.length === 0 ? (
				<Center>
					<Text fontSize={20}>No favorites added</Text>
				</Center>
			) : (
				<Flex flexWrap="wrap" justifyContent="center">
					<Grid
						templateColumns={{
							base: "repeat(1, 1fr)",
							md: "repeat(2, 1fr)",
							lg: "repeat(4, 1fr)",
						}}
						gap={6}
						justifyContent="center"
					>
						{favoriteProducts.map((product: Product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</Grid>
				</Flex>
			)}
		</Flex>
	);
}

export default Favorites;
