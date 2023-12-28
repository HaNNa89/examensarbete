import {
	Flex,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUser } from "react-icons/pi";

function Header() {
	return (
		<Flex px={6} py={2} justify="space-between" align="center">
			<Heading>Café o´neil</Heading>
			<Flex position="relative" alignSelf="center">
				<InputGroup>
					<Input placeholder="search" w="300px" />
					<InputRightElement>
						<IconButton
							icon={<FaSearch />}
							aria-label="search"
							size="xs"
							fontSize={20}
						/>
					</InputRightElement>
				</InputGroup>
			</Flex>
			<Flex gap={4} fontSize={30}>
				<PiUser />
				<IoMdHeartEmpty />
				<HiOutlineShoppingBag />
			</Flex>
		</Flex>
	);
}

export default Header;
