import {
	Box,
	Center,
	Divider,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import { MOCK_PRODUCTS } from "../../data/mock";
import ProductCard from "../components/ProductCard";

function Home() {
	return (
		<>
			<Flex
				direction={{ base: "column", lg: "row" }}
				align="center"
				justifyContent="space-between"
			>
				<Flex
					direction="column"
					justifyContent="center"
					align="center"
					flex={{ base: 1, lg: 1 }}
					order={{ base: 2, lg: 1 }}
				>
					<Heading
						mt={4}
						fontSize={{
							base: "28px",
							sm: "38px",
							md: "48px",
							lg: "58px",
						}}
					>
						Café o´neil
					</Heading>
					<Text
						fontSize={{
							base: "14x",
							sm: "16x",
							md: "18px",
							lg: "20px",
						}}
						mt={2}
					>
						Breakfast, Brunch & Everything You Need
					</Text>
					<Divider width="200px" mt={8} color="white" />
				</Flex>
				<Box
					maxW={{
						base: "100%",
						sm: "500px",
						lg: "600px",
					}}
					order={{ base: 1, lg: 2 }}
				>
					<Image
						src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
						alt="a bunch of pancakes with syrup"
						objectFit="cover"
						width="100%"
						height="100%"
					/>
				</Box>
			</Flex>

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
								{MOCK_PRODUCTS.map((product, index) => (
									<ProductCard key={index} product={product} />
								))}
							</Grid>
						</Center>
					</Box>
				</Center>
			</Box>

			<Flex direction="column" align="center">
				<Box maxW="600px">
					<Text fontSize="25px" py={6}>
						Welcome to Café O'Neil
					</Text>
					<Text fontSize="18px">
						An oasis of coziness and homeliness nestled in the heart of the
						city. We invite you to a warm and inviting atmosphere where each
						visit feels like coming home. With our passion for quality coffee,
						homemade delights, and personalized service, we aim to create
						memorable moments for every guest. Explore our selection of
						delightful pastries, savor our meticulously brewed coffee, and
						unwind in Café O'Neil's charming ambiance. Welcome home to us.
					</Text>
				</Box>
			</Flex>
		</>
	);
}

export default Home;
