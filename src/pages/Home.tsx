import { Box, Center, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { MOCK_PRODUCTS } from "../../data/mock";
import ProductCard from "../components/ProductCard";
import ProductCategories from "../components/ProductCategories";

function Home() {
	const [currentCategory, setCurrentCategory] = useState<string | null>(null);

	const filteredProducts = currentCategory
		? MOCK_PRODUCTS.filter((product) => product.categorie === currentCategory)
		: MOCK_PRODUCTS;
	return (
		<>
			<ProductCategories onSelectCategory={setCurrentCategory} />
			<Box mx="auto" maxW="1200px" px="1rem">
				<Center>
					<Box w="100%" mt="2rem">
						<Center>
							<Grid
								templateColumns={{
									base: "repeat(1, 1fr)",
									md: "repeat(2, 1fr)",
									lg: "repeat(4, 1fr)",
								}}
								gap={6}
								justifyContent="center" // Centrerar innehållet horisontellt
							>
								{filteredProducts.map((product, index) => (
									<ProductCard key={index} product={product} />
								))}
							</Grid>
						</Center>
					</Box>
				</Center>
			</Box>
		</>
	);
}

export default Home;
