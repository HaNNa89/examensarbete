import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Form } from "react-router-dom";
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
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: "",
			zipcode: "",
			city: "",
		},
		validationSchema: CustomerSchema,
		onSubmit: (values) => {},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Flex px={4} py={6}>
				<VStack spacing={2}>
					<Flex gap={2}>
						<FormControl>
							<FormLabel>First name</FormLabel>
							<Input
								name="firstName"
								type="text"
								id="firstName"
								autoComplete="firstName"
								value={formik.values.firstName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							></Input>
						</FormControl>

						<FormControl>
							<FormLabel>Last name</FormLabel>
							<Input
								name="lastName"
								type="text"
								id="lastName"
								autoComplete="lastName"
								value={formik.values.lastName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							></Input>
						</FormControl>
					</Flex>

					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							name="email"
							type="text"
							id="email"
							autoComplete="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						></Input>
					</FormControl>
					<FormControl>
						<FormLabel>Phone number</FormLabel>
						<Input
							name="phone"
							type="tel"
							id="phone"
							autoComplete="phone"
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						></Input>
					</FormControl>

					<FormControl>
						<FormLabel>Address</FormLabel>
						<Input
							name="address"
							type="text"
							id="address"
							autoComplete="address"
							value={formik.values.address}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						></Input>
					</FormControl>

					<Flex gap={2}>
						<FormControl>
							<FormLabel>Zip code</FormLabel>
							<Input
								name="zipcode"
								type="text"
								id="zipcode"
								autoComplete="zipcode"
								value={formik.values.zipcode}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							></Input>
						</FormControl>

						<FormControl>
							<FormLabel>City</FormLabel>
							<Input
								name="city"
								type="text"
								id="city"
								autoComplete="city"
								value={formik.values.city}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							></Input>
						</FormControl>

						<Flex>
							<Button type="submit">Order</Button>
						</Flex>
					</Flex>
				</VStack>
			</Flex>
		</Form>
	);
}
export default CustomerForm;
