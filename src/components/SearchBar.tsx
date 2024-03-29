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
import { useNavigate } from "react-router-dom";
import { MOCK_PRODUCTS } from "../../data/mock";

interface ProductItems {
	title: string;
	category: string;
	img: string;
}

function SearchBar() {
	const navigate = useNavigate();
	const [searchProduct, setSearchProduct] = useState("");
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

	const handleNavigateToDetail = (title: string) => {
		navigate(`/id/${title}`);
		handleCloseSearchResult();
	};

	const handleCloseSearchResult = () => {
		setSearchProduct("");
		setSearchResult([]);
	};

	return (
		<Flex position="relative" justifyContent="center">
			<InputGroup>
				<Input
					placeholder="search"
					w={{ base: "100%", sm: "300px", md: "400px" }}
					onChange={(event) => {
						setSearchProduct(event.target.value);
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

			{searchProduct && (
				<Flex
					direction="column"
					justifyContent="flex-start"
					position="absolute"
					zIndex={1}
					top="100%"
					left={0}
					bg="#1A1A1C"
					p={2}
					width="100%"
				>
					{searchResult.length === 0 ? (
						<Text>No result found</Text>
					) : (
						<Flex direction="column">
							{searchProduct && (
								<Flex justifyContent="space-between" py={4}>
									<Text fontSize={18}>Result: </Text>
								</Flex>
							)}

							{searchResult.map((result, index) => (
								<Flex
									align="center"
									justifyContent="space-between"
									p={2}
									key={index}
									cursor="pointer"
									onClick={() => handleNavigateToDetail(result.title)}
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
			)}
		</Flex>
	);
}

export default SearchBar;
