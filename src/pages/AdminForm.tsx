import { Center, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { MOCK_PRODUCTS, Product } from '../../data/mock';
import ProductForm from '../components/ProductForm';

function AdminForm() {
  const addProduct = (newProduct: Product) => {
    MOCK_PRODUCTS.push(newProduct);
    console.log('Product added:', newProduct);
  };

  const { productId } = useParams();

  if (productId === 'new') {
    return (
      <Center>
        <ProductForm onSubmit={addProduct} />
      </Center>
    );
  }

  const product: Product | undefined = MOCK_PRODUCTS.find(
    (p) => p.id === Number(productId)
  );

  if (!product) {
    return (
      <Center>
        <Text>Product not found!</Text>;
      </Center>
    );
  }

  return (
    <Center>
      <ProductForm onSubmit={addProduct} />
      {/* <ProductForm onSubmit={updateProduct} initialData={product} /> */}
    </Center>
  );
}
export default AdminForm;
