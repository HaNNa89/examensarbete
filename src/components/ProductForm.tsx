import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Input,
	Textarea,
	useBreakpointValue,
	useToast,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOCK_PRODUCTS, Product } from "../../data/mock";
import { useProductContext } from "../hooks/useProductContext";

interface ProductFormProps {
	onSubmit: (formData: FormData) => void;
	initialData?: Product;
}

interface FormData {
	title: string;
	subheading: string;
	categorie: string;
	price: number;
	id: number;
	description: string;
	ingredients: string[];
	img: string;
}

function ProductForm({ onSubmit }: ProductFormProps) {
	const { productId } = useParams();
	const { products } = useProductContext();
	const toast = useToast();

	const [formData, setFormData] = useState<FormData>({
		title: "",
		subheading: "",
		categorie: "",
		price: 0,
		id: 0,
		description: "",
		ingredients: [],
		img: "",
	});

	useEffect(() => {
		const allProducts = [...products, ...MOCK_PRODUCTS];
		if (productId) {
			const selectedProduct: Product | undefined = allProducts.find(
				(p) => p.id === Number(productId)
			);

			if (selectedProduct) {
				setFormData({
					title: selectedProduct.title,
					subheading: selectedProduct.subheading || "",
					categorie: selectedProduct.categorie || "",
					price: selectedProduct.price,
					id: selectedProduct.id,
					description: selectedProduct.description || "",
					ingredients: selectedProduct.ingredients || [],
					img: selectedProduct.img || "",
				});
			}
		} else {
			setFormData({
				title: "",
				subheading: "",
				categorie: "",
				price: 0,
				id: 0,
				description: "",
				ingredients: [],
				img: "",
			});
		}
	}, [products, productId]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		console.log(`name: ${name}, value: ${value}`);
		setFormData({ ...formData, [name]: parseFloat(value) });
	};

	const handleIngredientsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData({ ...formData, ingredients: value.split(",") });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const storedProductsJSON = localStorage.getItem("products");
		const storedProducts: Product[] = storedProductsJSON
			? JSON.parse(storedProductsJSON)
			: [];

		const updatedProducts = [...storedProducts, formData];
		localStorage.setItem("products", JSON.stringify(updatedProducts));

		onSubmit(formData);
		toast({
			title: "Produkt tillagd",
			description: "Din produkt har lagts till framgångsrikt.",
			status: "success",
			duration: 5000,
			isClosable: true,
		});

		setFormData({
			title: "",
			subheading: "",
			categorie: "",
			price: 0,
			id: 0,
			description: "",
			ingredients: [],
			img: "",
		});
	};

	const isLargeScreen = useBreakpointValue({ base: false, lg: true });

	return (
		<Box my="12">
			<form onSubmit={handleSubmit}>
				{isLargeScreen ? (
					<Flex gap="6">
						<Box>
							<Heading mb="4">Product Form</Heading>
							<VStack spacing="8">
								<Flex gap="4">
									<Box>
										<FormControl>
											<FormLabel mt="1">Title</FormLabel>
											<Input
												type="text"
												name="title"
												value={formData.title}
												onChange={handleChange}
											/>
										</FormControl>
										<FormControl>
											<FormLabel mt="1">Subheading</FormLabel>
											<Input
												type="text"
												name="subheading"
												value={formData.subheading}
												onChange={handleChange}
											/>
										</FormControl>
										<FormControl>
											<FormLabel mt="1">Category</FormLabel>
											<Input
												type="text"
												name="categorie"
												value={formData.categorie}
												onChange={handleChange}
											/>
										</FormControl>
										<FormControl>
											<FormLabel mt="1">Price</FormLabel>
											<Input
												type="number"
												name="price"
												value={formData.price.toString()}
												onChange={handleNumberChange}
											/>
										</FormControl>
									</Box>
									<Box>
										<FormControl>
											<FormLabel mt="1">ID</FormLabel>
											<Input
												type="number"
												name="id"
												value={formData.id.toString()}
												onChange={handleNumberChange}
											/>
										</FormControl>
										<FormControl>
											<FormLabel mt="1">Description</FormLabel>
											<Textarea
												name="description"
												value={formData.description}
												onChange={handleChange}
											/>
										</FormControl>
										<FormControl>
											<FormLabel mt="1">
												Ingredients (comma-separated)
											</FormLabel>
											<Input
												type="text"
												name="ingredients"
												value={formData.ingredients.join(",")}
												onChange={handleIngredientsChange}
											/>
										</FormControl>
										<FormControl>
											<FormLabel mt="1">Image URL</FormLabel>
											<Input
												type="text"
												name="img"
												value={formData.img}
												onChange={handleChange}
											/>
										</FormControl>
									</Box>
								</Flex>
							</VStack>
						</Box>
						<Box mt="4">
							<Heading mb="4">Product Preview</Heading>
							<Box width="15rem" height="20rem">
								<Image
									src={formData.img}
									alt={formData.title}
									objectFit="cover"
									width="100%"
									height="100%"
								/>
							</Box>
						</Box>
					</Flex>
				) : (
					<Flex direction="column">
						<VStack spacing="8">
							<FormControl>
								<FormLabel mt="1">Title</FormLabel>
								<Input
									type="text"
									name="title"
									value={formData.title}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel mt="1">Subheading</FormLabel>
								<Input
									type="text"
									name="subheading"
									value={formData.subheading}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel mt="1">Category</FormLabel>
								<Input
									type="text"
									name="categorie"
									value={formData.categorie}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel mt="1">Price</FormLabel>
								<Input
									type="number"
									name="price"
									value={formData.price.toString()}
									onChange={handleNumberChange}
								/>
							</FormControl>

							<FormControl>
								<FormLabel mt="1">ID</FormLabel>
								<Input
									type="number"
									name="id"
									value={formData.id.toString()}
									onChange={handleNumberChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel mt="1">Description</FormLabel>
								<Textarea
									name="description"
									value={formData.description}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel mt="1">Ingredients (comma-separated)</FormLabel>
								<Input
									type="text"
									name="ingredients"
									value={formData.ingredients.join(",")}
									onChange={handleIngredientsChange}
								/>
							</FormControl>
							<FormControl>
								<FormLabel mt="1">Image URL</FormLabel>
								<Input
									type="text"
									name="img"
									value={formData.img}
									onChange={handleChange}
								/>
							</FormControl>
						</VStack>

						<Flex mt="6" width="15rem">
							<Box width="15rem" height="20rem">
								<Image
									src={formData.img}
									alt={formData.title}
									objectFit="cover"
									width="100%"
									height="100%"
								/>
							</Box>
						</Flex>
					</Flex>
				)}
				<Center>
					<Button
						type="submit"
						mt={8}
						py={1}
						px={6}
						fontSize={18}
						border="1px"
						bgColor="#1A1A1C"
						textColor="white"
						_hover={{
							bg: "whiteAlpha.200",
							borderWidth: "2px",
							boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
						}}
					>
						Add Product
					</Button>
				</Center>
			</form>
		</Box>
	);
}

export default ProductForm;
