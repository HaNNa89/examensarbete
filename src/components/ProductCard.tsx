import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCartContext';
import {
  useFavoritesContext,
  useToggleFavorite,
} from '../hooks/useFavoritesContext';

interface Product {
  img: string;
  title: string;
  price: number;
  id: number;
  subheading: string;
}

interface CartContext {
  addToCart: (product: Product) => void;
}

function ProductCard({ product }: { product: Product }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const { img, title, price } = product;
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const { favoriteProducts } = useFavoritesContext();
  const toggleProductFavorite = useToggleFavorite();

  const isProductLiked = favoriteProducts.some(
    (favProduct) => favProduct.title === title
  );

  const handleToggleLike = () => {
    const isLiked = favoriteProducts.some(
      (favProduct) => favProduct.title === title
    );

    toggleProductFavorite({ title, img, price, isLiked });
  };

  const cart = useCart() as CartContext;
  const { addToCart } = cart;

  const handleOrderClick = () => {
    addToCart(product);
  };

  return (
    <Flex>
      {isLargeScreen ? (
        <Box
          width="15rem"
          height="20rem"
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          overflow="hidden"
          bg="white"
          position="relative"
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.08)' }}
          cursor="pointer"
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
        >
          <Link to={`/id/${product.title}`}>
            <Image
              src={img}
              alt={title}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Link>
          <Box
            bg="rgba(0, 0, 0, 0.6)"
            p="2px"
            color="white"
            position="absolute"
            top="60%"
            left="0"
            right="0"
            bottom="0"
            opacity={showOverlay ? '1' : '0'}
            transition="opacity 0.3s"
            zIndex="1"
          >
            <Flex direction="column">
              <Flex justify="space-between" align="center">
                <Box>
                  <Heading fontSize={20}>{title}</Heading>
                  <Text fontSize={16} mt="0.2rem">
                    Price: {price}kr
                  </Text>
                </Box>
                <IconButton
                  icon={isProductLiked ? <GoHeartFill /> : <GoHeart />}
                  aria-label={isProductLiked ? 'Unlike' : 'Like'}
                  fontSize="1.5rem"
                  w="fit-content"
                  bg="none"
                  color="white"
                  _hover={{ bg: 'none' }}
                  onClick={handleToggleLike}
                />
              </Flex>
              <Button
                bg="none"
                border="1px"
                mt="0.2rem"
                borderColor="white"
                textColor="white"
                _hover={{
                  bg: 'whiteAlpha.200',
                  borderWidth: '2px',
                  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
                }}
                onClick={handleOrderClick}
              >
                Order
              </Button>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Flex direction="column" width="15rem">
          <Box width="15rem" height="20rem">
            <Link to={`/id/${product.title}`}>
              <Image
                src={img}
                alt={title}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Link>
          </Box>
          <Flex direction="column" height="8rem" m="1" justify="space-between">
            <Flex justify="space-between" align="center">
              <Box>
                <Heading fontSize={20}>{title}</Heading>
                <Text fontSize={16} mt="0.2rem">
                  Price: {price}kr
                </Text>
              </Box>
              <IconButton
                icon={isProductLiked ? <GoHeartFill /> : <GoHeart />}
                aria-label={isProductLiked ? 'Unlike' : 'Like'}
                fontSize="1.5rem"
                w="fit-content"
                bg="none"
                color="white"
                _hover={{ bg: 'none' }}
                onClick={handleToggleLike}
              />
            </Flex>
            <Button
              bg="none"
              border="1px"
              mt="0.2rem"
              borderColor="white"
              textColor="white"
              _hover={{
                bg: 'whiteAlpha.200',
                borderWidth: '2px',
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
              }}
              onClick={handleOrderClick}
            >
              Order
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default ProductCard;
