import { Button, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS, Product } from '../../data/mock';
import AdminCard from '../components/AdminCard';

interface AdminProps {
  product?: Product;
}

function Admin({ product }: AdminProps) {
  if (!product && MOCK_PRODUCTS.length === 0) {
    return (
      <Center>
        <Text>No products found!</Text>
      </Center>
    );
  }
  return (
    <Center>
      <Flex direction="column" align="center" gap="6" m="6">
        <Heading>Admin!</Heading>
        <Link to={product ? `/admin/${product.id}` : '/'}>
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
          >
            Add Product
          </Button>
        </Link>
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
