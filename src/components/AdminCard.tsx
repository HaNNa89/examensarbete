import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import { CiEdit, CiTrash } from 'react-icons/ci';
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
    <Flex direction="column" width="15rem" m="6">
      <Box width="15rem" height="20rem">
        <Link to={`/admin/${product.id}`}>
          <Image
            src={img}
            alt={title}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Link>
      </Box>
      <Flex direction="column" height="6rem" m="1" justify="space-between">
        <Flex justify="space-between" align="center">
          <Box>
            <Heading fontSize={20}>{title}</Heading>
            <Text fontSize={16} mt="0.2rem">
              Price: {price}kr
            </Text>
            <IconButton
              icon={<CiTrash />}
              aria-label="Trashcan"
              fontSize="1.5rem"
              bg="none"
              color="white"
              _hover={{ bg: 'none' }}
            />
            <IconButton
              icon={<CiEdit />}
              aria-label="Trashcan"
              fontSize="1.5rem"
              bg="none"
              color="white"
              _hover={{ bg: 'none' }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AdminCard;
