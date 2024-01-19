import { Center, Flex, Heading } from '@chakra-ui/react';
import { MOCK_PRODUCTS, Product } from '../../data/mock';
import ProductForm from '../components/ProductForm';

function Admin() {
  const addProduct = (newProduct: Product) => {
    MOCK_PRODUCTS.push(newProduct);
    console.log('Product added:', newProduct);
  };

  return (
    <Center>
      <Flex direction="column" align="center" gap="6" m="6">
        <Heading>Admin!</Heading>
        <ProductForm onSubmit={addProduct} />
      </Flex>
    </Center>
  );
}

export default Admin;
