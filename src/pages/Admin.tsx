import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import { MOCK_PRODUCTS, Product } from '../../data/mock';
import ProductForm from '../components/ProductForm';

function Admin() {
  const addProduct = (newProduct: Product) => {
    MOCK_PRODUCTS.push(newProduct);
    console.log('Product added:', newProduct);
  };

  return (
    // render ut alla producter och lägg till knapp 'Add Product' samt 'Delite' och 'Edit'
    <Center>
      <Flex direction="column" align="center" gap="6" m="6">
        <Heading>Admin!</Heading>
        <Button
          type="submit"
          mt={3}
          py={1}
          px={6}
          fontSize={18}
          border="1px"
          bgColor="#1A1A1C"
          textColor="white"
          _hover={{
            bg: 'whiteAlpha.200',
            borderWidth: '2px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
          }}
        >
          Add Product
        </Button>
        <ProductForm onSubmit={addProduct} />
      </Flex>
    </Center>
  );
}

export default Admin;
