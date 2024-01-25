import { Center, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { MOCK_PRODUCTS, Product } from "../../data/mock";
import ProductForm from "../components/ProductForm";
import { useProductContext } from "../hooks/useProductContext";

function AdminForm() {
	const { products } = useProductContext();
	const allProducts = [...MOCK_PRODUCTS, ...products];
	const { addProduct, updateProduct } = useProductContext();
	const navigate = useNavigate();

	const { productId } = useParams();

	if (productId === "new") {
		return (
			<Center>
				<ProductForm onSubmit={addProduct} />
			</Center>
		);
	}

	const product: Product | undefined = allProducts.find(
		(p) => p.id === Number(productId)
	);

	if (!product) {
		return (
			<Center>
				<Text>Product not found</Text>;
			</Center>
		);
	}

	const handleUpdateProduct = (updatedProduct: Product) => {
		updateProduct(updatedProduct);
		navigate("/admin");
	};

	return (
		<Center>
			<ProductForm onSubmit={handleUpdateProduct} initialData={product} />
		</Center>
	);
}

export default AdminForm;
