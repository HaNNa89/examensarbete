import {
	Flex,
	IconButton,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MOCK_PRODUCTS } from "../../data/mock";

interface ProductItems {
	title: string;
	categorie: string;
	img: string;
}

function SearchBar() {
	const [searchProduct, setSearchproduct] = useState("");
	const [searchResult, setSearchResult] = useState<ProductItems[]>([]);

	useEffect(() => {
		if (searchProduct.trim() === "") {
			setSearchResult([]);
		} else {
			const filteredProductItems = MOCK_PRODUCTS.filter(
				(product: ProductItems) =>
					product.title.toLowerCase().includes(searchProduct.toLowerCase())
			);
			setSearchResult(filteredProductItems);
		}
	}, [searchProduct]);

	return (
		<Flex position="relative">
			<InputGroup>
				<Input
					placeholder="search"
					maxW="300px"
					onChange={(event) => {
						setSearchproduct(event.target.value);
					}}
				/>
				<InputRightElement>
					<IconButton
						icon={<FaSearch />}
						colorScheme="white"
						aria-label="search"
						size="xs"
						fontSize={20}
					/>
				</InputRightElement>
			</InputGroup>

			<Flex
				direction="column"
				justifyContent="flex-start"
				position="absolute"
				zIndex={1}
				top="100%"
				left={0}
				bg="#1A1A1C"
				p={2}
			>
				<Text>Result: </Text>
				{searchResult.length === 0 ? (
					<Text>No result found</Text>
				) : (
					<Flex direction="column">
						{searchResult.map((result, index) => (
							<Flex
								align="center"
								justifyContent="space-between"
								p={2}
								key={index}
							>
								<Text>{result.title}</Text>
								<Image
									src={result.img}
									maxW="30%"
									maxH="30%"
									objectFit="cover"
								/>
							</Flex>
						))}
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}

export default SearchBar;
