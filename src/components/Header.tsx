import { Box, Flex, Heading } from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUser } from "react-icons/pi";
import SearchBar from "./SearchBar";

function Header() {
	return (
		<Flex direction="column" px={6} py={2} align="center">
			<Flex
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				align="center"
				width="100%"
			>
				<Heading fontSize={{ base: "20px", sm: "26px", md: "30px" }}>
					Café o´neil
				</Heading>
				<Box display={{ base: "none", md: "block" }} mt={4}>
					<SearchBar />
				</Box>
				<Flex
					justifyContent="space-between"
					gap={4}
					fontSize={{ base: "20px", sm: "26px", md: "30px" }}
				>
					<PiUser />
					<IoMdHeartEmpty />
					<HiOutlineShoppingBag />
				</Flex>
			</Flex>
			<Box display={{ base: "block", md: "none" }} mt={4}>
				<SearchBar />
			</Box>
		</Flex>
	);
}

export default Header;
