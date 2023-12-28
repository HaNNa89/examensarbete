import {
	Flex,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FaHeart, FaUser } from "react-icons/fa6";
import { PiHandbagSimpleFill } from "react-icons/pi";

function Header() {
	return (
		<Flex justify="space-between" align="center">
			<Heading>Café o´neil</Heading>
			<Flex position="relative" alignSelf="center">
				<InputGroup>
					<Input placeholder="search" w="300px" />
					<InputRightElement>
						<IconButton icon={<FaSearch />} aria-label="search" fontSize={25} />
					</InputRightElement>
				</InputGroup>
			</Flex>
			<Flex gap={2} fontSize={25}>
				<FaHeart />
				<PiHandbagSimpleFill />
				<FaUser />
			</Flex>
		</Flex>
	);
}

export default Header;
