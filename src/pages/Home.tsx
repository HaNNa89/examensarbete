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
			<Flex>
				<Flex
					direction="column"
					justifyContent="center"
					align="center"
					flex={1}
				>
					<Heading fontSize="70px">Café o´neil</Heading>
					<Text mt={2}>Breakfast, Brunch & Everything You Need</Text>
					<Divider width="200px" mt={8} color="white" />
				</Flex>
				<Box maxW="600px" justifyContent="flex-end" flex={1}>
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
		</>
	);
}

export default Home;
