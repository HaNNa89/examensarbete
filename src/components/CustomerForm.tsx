import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Form, Link } from "react-router-dom";
import * as yup from "yup";
import { useOrder } from "../hooks/useOrderContext";

const CustomerSchema = yup.object({
	firstName: yup.string().min(2).required("Please enter your first name"),
	lastName: yup.string().min(2).required("Please enter your last name"),
	email: yup.string().required("Please enter your email addres"),
	phone: yup.string().min(10).required("Please enter your phone number"),
	address: yup.string().min(4).required("Please enter your address"),
	zipcode: yup.string().min(5).max(6).required("Please enter a valid zip code"),
	city: yup.string().min(2).required("Please enter your city"),
});

export type Customer = yup.InferType<typeof CustomerSchema>;

function CustomerForm() {
	const { handleOrderSubmit } = useOrder();
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
		onSubmit: (values) => {
			handleOrderSubmit(values);
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Flex direction="column" justifyContent="center" px={4} py={10}>
				<Heading mb={12} textAlign="center">
					Your contact details
				</Heading>
				<VStack spacing={4}>
					<Flex gap={4}>
						<FormControl>
							<FormLabel ml={2}>First name</FormLabel>
							<Input
								name="firstName"
								type="text"
								id="firstName"
								autoComplete="firstName"
								value={formik.values.firstName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.firstName && formik.errors.firstName && (
								<Text color="red">{formik.errors.firstName}</Text>
							)}
						</FormControl>

						<FormControl>
							<FormLabel ml={2}>Last name</FormLabel>
							<Input
								name="lastName"
								type="text"
								id="lastName"
								autoComplete="lastName"
								value={formik.values.lastName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.lastName && formik.errors.lastName && (
								<Text color="red">{formik.errors.lastName}</Text>
							)}
						</FormControl>
					</Flex>

					<FormControl>
						<FormLabel ml={2}>Email</FormLabel>
						<Input
							name="email"
							type="text"
							id="email"
							autoComplete="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email && (
							<Text color="red">{formik.errors.email}</Text>
						)}
					</FormControl>
					<FormControl>
						<FormLabel ml={2}>Phone number</FormLabel>
						<Input
							name="phone"
							type="tel"
							id="phone"
							autoComplete="phone"
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.phone && formik.errors.phone && (
							<Text color="red">{formik.errors.phone}</Text>
						)}
					</FormControl>

					<FormControl>
						<FormLabel ml={2}>Address</FormLabel>
						<Input
							name="address"
							type="text"
							id="address"
							autoComplete="address"
							value={formik.values.address}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.address && formik.errors.address && (
							<Text color="red">{formik.errors.address}</Text>
						)}
					</FormControl>

					<Flex gap={4}>
						<FormControl>
							<FormLabel ml={2}>Zip code</FormLabel>
							<Input
								name="zipcode"
								type="text"
								id="zipcode"
								autoComplete="zipcode"
								value={formik.values.zipcode}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.zipcode && formik.errors.zipcode && (
								<Text color="red">{formik.errors.zipcode}</Text>
							)}
						</FormControl>

						<FormControl>
							<FormLabel ml={2}>City</FormLabel>
							<Input
								name="city"
								type="text"
								id="city"
								autoComplete="city"
								value={formik.values.city}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.city && formik.errors.city && (
								<Text color="red">{formik.errors.city}</Text>
							)}
						</FormControl>
					</Flex>
					<Flex py={10}>
						<Link to="/orderconfirmation">
							<Button
								type="submit"
								width="200px"
								height="40px"
								bg="none"
								color="white"
								border="1px"
								_hover={{
									bg: "whiteAlpha.200",
									borderWidth: "2px",
									boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
								}}
							>
								Place Your Order
							</Button>
						</Link>
					</Flex>
				</VStack>
			</Flex>
		</Form>
	);
}
export default CustomerForm;
