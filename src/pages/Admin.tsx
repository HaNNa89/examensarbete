import { Center, Flex, Grid, Heading } from '@chakra-ui/react';
import { MOCK_PRODUCTS, Product } from '../../data/mock';
import AdminCard from '../components/AdminCard';
import ProductForm from '../components/ProductForm';

function Admin() {
  const addProduct = (newProduct: Product) => {
    MOCK_PRODUCTS.push(newProduct);
    console.log('Product added:', newProduct);
  };

  return (
    // Render out all products and add 'Add Product' button along with 'Delete' and 'Edit' buttons
    <Center>
      <Flex direction="column" align="center" gap="6" m="6">
        <Heading>Admin!</Heading>
        <ProductForm onSubmit={addProduct} />

        {/* Map and render AdminCard for each product */}
        <Center>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={6}
            justifyContent="center"
          >
            {MOCK_PRODUCTS.map((product) => (
              <AdminCard key={product.id} product={product} />
            ))}
          </Grid>
        </Center>
      </Flex>
    </Center>
  );
}

export default Admin;
