import React, { ReactNode, createContext, useContext, useReducer } from "react";

interface Product {
	title: string;
	subheading: string;
	categorie: string;
	price: number;
	id: number;
	description: string;
	ingredients: string[];
	img: string;
}

interface ProductContextProps {
	products: Product[];
	addProduct: (newProduct: Product) => void;
	updateProduct: (updatedProduct: Product) => void;
	deleteProduct: (productId: number) => void;
}

type AddProductAction = { type: "ADD_PRODUCT"; payload: Product };
type UpdateProductAction = { type: "UPDATE_PRODUCT"; payload: Product };
type DeleteProductAction = { type: "DELETE_PRODUCT"; payload: number };

type ProductAction =
	| AddProductAction
	| UpdateProductAction
	| DeleteProductAction;

const ProductContext = createContext<ProductContextProps | undefined>(
	undefined
);

const productReducer = (state: Product[], action: ProductAction): Product[] => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return [...state, action.payload];
		case "UPDATE_PRODUCT":
			return state.map((product) =>
				product.id === action.payload.id ? action.payload : product
			);
		case "DELETE_PRODUCT":
			return state.filter((product) => product.id !== action.payload);
		default:
			return state;
	}
};

interface ProductProviderProps {
	children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
	const [products, dispatch] = useReducer(productReducer, []);
	const addProduct = (newProduct: Product) => {
		dispatch({ type: "ADD_PRODUCT", payload: newProduct });
	};

	const updateProduct = (updatedProduct: Product) => {
		dispatch({ type: "UPDATE_PRODUCT", payload: updatedProduct });
	};

	const deleteProduct = (productId: number) => {
		dispatch({ type: "DELETE_PRODUCT", payload: productId });
	};

	return (
		<ProductContext.Provider
			value={{ products, addProduct, updateProduct, deleteProduct }}
		>
			{children}
		</ProductContext.Provider>
	);
};

const useProductContext = (): ProductContextProps => {
	const context = useContext(ProductContext);
	if (!context) {
		throw new Error("useProductContext must be used within a ProductProvider");
	}
	return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ProductProvider, useProductContext };
