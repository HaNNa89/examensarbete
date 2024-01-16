import { Flex, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import * as yup from "yup";

const CustomerSchema = yup.object({
	firstName: yup.string().min(2).required("Please enter your first name"),
	lastName: yup.string().min(2).required("Please enter your last name"),
	email: yup.string().required("Please enter your email addres"),
	phone: yup.string().min(10).required("Please enter your phone number"),
	address: yup.string().min(4).required("Please enter your address"),
	zipcode: yup.string().min(5).max(6).required("Please enter your "),
	city: yup.string().min(2).required("Please enter your city"),
});

export type Customer = yup.InferType<typeof CustomerSchema>;

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
