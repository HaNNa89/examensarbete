import { Flex, Grid, Heading, Text } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

interface FavoriteProduct {
  img: string;
  title: string;
  price: number;
  id: number;
}

function Favorites() {
  const favoriteProductsFromLocalStorage: FavoriteProduct[] = JSON.parse(
    localStorage.getItem('favoriteProducts') || '[]'
  );

  return (
    <Flex direction="column" alignItems="center">
      <Heading m="8">Favorites!</Heading>
      {favoriteProductsFromLocalStorage.length === 0 ? (
        <Text>No products added</Text>
      ) : (
        <Flex flexWrap="wrap" justifyContent="center">
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={6}
            justifyContent="center"
          >
            {favoriteProductsFromLocalStorage.map(
              (product: FavoriteProduct, index) => (
                <ProductCard key={index} product={product} />
              )
            )}
          </Grid>
        </Flex>
      )}
    </Flex>
  );
}

export default Favorites;
