import {
	Flex,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MOCK_PRODUCTS } from "../../data/mock";

interface ProductItems {
	title: string;
}
function SearchBar() {
	const [searchProduct, setSearchproduct] = useState("");
	const [searchResult, setSearchResult] = useState<ProductItems[]>([]);

	const handleSearch = () => {
		const filteredProductItems = MOCK_PRODUCTS.filter((product) =>
			product.title.toLowerCase().includes(searchProduct.toLowerCase())
		);
		setSearchResult(filteredProductItems);
		console.log(filteredProductItems);
	};
	return (
		<Flex position="relative" alignSelf="center">
			<InputGroup>
				<Input
					placeholder="search"
					w="300px"
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
						onClick={handleSearch}
					/>
				</InputRightElement>
			</InputGroup>
		</Flex>
	);
}

export default SearchBar;
