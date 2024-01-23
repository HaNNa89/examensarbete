import { Button, Center, Flex, Grid, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../../data/mock';
import AdminCard from '../components/AdminCard';
import { useProductContext } from '../hooks/useProductContext';

function Admin() {
  const navigate = useNavigate();
  const { products } = useProductContext();

  if (products.length === 0 && MOCK_PRODUCTS.length === 0) {
    return (
      <Center>
        <Heading>No products found!</Heading>
      </Center>
    );
  }

  const allProducts = [...MOCK_PRODUCTS, ...products];

  const handleAddProductClick = () => {
    navigate('/adminForm/new');
  };

  return (
    <Center>
      <Flex direction="column" align="center" gap="6" m="6">
        <Heading>Admin!</Heading>
        <Button
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
          onClick={handleAddProductClick}
        >
          Add Product
        </Button>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
          justifyContent="center"
        >
          {allProducts.map((product) => (
            <AdminCard key={product.id} product={product} />
          ))}
        </Grid>
      </Flex>
    </Center>
  );
}

export default Admin;
