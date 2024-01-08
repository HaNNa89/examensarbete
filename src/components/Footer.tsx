import { Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<Flex>
			<Flex
				as="footer"
				direction={{ base: "column", sm: "row" }}
				justifyContent="space-between"
				align="center"
				width="100%"
				px={8}
				py={10}
				gap={{ base: "6", sm: "0" }}
			>
				<Heading fontSize={{ base: "26px", sm: "28px", md: "30px" }}>
					<Link to="/">Café O´neil</Link>
				</Heading>

				<Flex direction="column" align="center">
					<Heading fontSize={{ base: "22px", sm: "24px", md: "28px" }}>
						Contact us
					</Heading>
					<Text>hello@cafeoneil.se</Text>
					<Text>0733674103</Text>
				</Flex>

				<Flex direction="column" align="center">
					<Heading fontSize={{ base: "22px", sm: "24px", md: "28px" }} mb={2}>
						Follow us
					</Heading>
					<HStack
						fontSize={{ base: "20px", sm: "22px", md: "26px" }}
						spacing={4}
					>
						<FaInstagram />
						<FaFacebook />
						<FaPinterest />
					</HStack>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Footer;
