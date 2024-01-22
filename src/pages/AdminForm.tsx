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
    </Center>
  );
}
export default AdminForm;
