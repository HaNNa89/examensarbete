import { Flex, Heading } from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUser } from "react-icons/pi";
import SearchBar from "./SearchBar";

function Header() {
	return (
		<Flex px={6} py={2} justify="space-between" align="center">
			<Heading>Café o´neil</Heading>
			<SearchBar />
			<Flex gap={4} fontSize={30}>
				<PiUser />
				<IoMdHeartEmpty />
				<HiOutlineShoppingBag />
			</Flex>
		</Flex>
	);
}

export default Header;
