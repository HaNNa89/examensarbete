import { Flex, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function CustomerForm() {
	return (
		<Flex px={4} py={6}>
			<VStack spacing={2}>
				<Flex gap={2}>
					<FormControl>
						<FormLabel>First name</FormLabel>
						<Input></Input>
					</FormControl>

					<FormControl>
						<FormLabel>Last name</FormLabel>
						<Input></Input>
					</FormControl>
				</Flex>

				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input></Input>
				</FormControl>
				<FormControl>
					<FormLabel>Phone number</FormLabel>
					<Input></Input>
				</FormControl>

				<FormControl>
					<FormLabel>Address</FormLabel>
					<Input></Input>
				</FormControl>

				<Flex gap={2}>
					<FormControl>
						<FormLabel>Zip code</FormLabel>
						<Input></Input>
					</FormControl>

					<FormControl>
						<FormLabel>City</FormLabel>
						<Input></Input>
					</FormControl>
				</Flex>
			</VStack>
		</Flex>
	);
}
export default CustomerForm;
