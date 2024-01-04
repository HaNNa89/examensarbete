import {
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Heading,
	IconButton,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { HiMiniBars3, HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiUser } from "react-icons/pi";
import SearchBar from "./SearchBar";

function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex direction="column" px={6} py={4} align="center">
			<Flex
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				align="center"
				width="100%"
			>
				{/*Hamburger menu*/}
				<IconButton
					icon={<HiMiniBars3 />}
					colorScheme="white"
					aria-label="search"
					fontSize={22}
					onClick={onOpen}
					display={{ base: "block", md: "none" }}
				/>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerBody bg="#1A1A1C">
							<Flex
								direction="column"
								align="center"
								mt={20}
								fontSize="20px"
								gap={4}
							>
								<Text>Breakfast</Text>
								<Divider width="200px" mt={4} color="white" />
								<Text>Brunch</Text>
								<Divider width="200px" mt={4} color="white" />
								<Text>Lunch</Text>
								<Divider width="200px" mt={4} color="white" />
								<Text>Cake</Text>
								<Divider width="200px" mt={4} color="white" />
								<Text>Cookie</Text>
								<Divider width="200px" mt={4} color="white" />
								<Text>Login</Text>
								<Divider width="200px" mt={4} color="white" />
								<Text>Favorites</Text>
								<Divider width="200px" mt={4} color="white" />
							</Flex>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<Heading fontSize={{ base: "24px", sm: "28px", md: "30px" }}>
					Café o´neil
				</Heading>
				<Flex display={{ base: "none", md: "block" }} mt={4}>
					<SearchBar />
				</Flex>
				<Flex
					justifyContent="space-between"
					gap={4}
					fontSize={{ base: "24px", sm: "28px", md: "30px" }}
				>
					<PiUser />
					<IoMdHeartEmpty />
					<HiOutlineShoppingBag />
				</Flex>
			</Flex>
			<Flex display={{ base: "block", md: "none" }} mt={4}>
				<SearchBar />
			</Flex>
		</Flex>
	);
}

export default Header;
