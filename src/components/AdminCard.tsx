import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Product {
  img: string;
  title: string;
  price: number;
  id: number;
  subheading?: string;
}

function AdminCard({ product }: { product: Product }) {
  const { img, title, price } = product;

  return (
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
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AdminCard;
