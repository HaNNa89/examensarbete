import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { CiCircleMinus, CiCirclePlus, CiTrash } from 'react-icons/ci';
import { MOCK_PRODUCTS } from '../../data/mock';

function CheckoutCard() {
  const product = MOCK_PRODUCTS[0];
  return (
    <Flex alignItems="flex-start" m={['2', '8', '12']} gap={['0', '8', '24']}>
      <Box
        width={['6rem', '10rem', '10rem']}
        height={['11rem', '15rem', '15rem']}
      >
        <Image
          src={product.img}
          alt={product.title}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <Text m="2">{product.title}</Text>
      <Text m="2">{product.price}kr</Text>
      <Flex alignItems="center">
        <IconButton
          icon={<CiCirclePlus />}
          aria-label="Plus"
          fontSize="1.5rem"
          w="fit-content"
          bg="none"
          color="white"
          _hover={{ bg: 'none' }}
        />
        <Text>1</Text>
        <IconButton
          icon={<CiCircleMinus />}
          aria-label="Minus"
          fontSize="1.5rem"
          w="fit-content"
          bg="none"
          color="white"
          _hover={{ bg: 'none' }}
        />
      </Flex>
      <IconButton
        icon={<CiTrash />}
        aria-label="Trashcan"
        fontSize="1.5rem"
        w="fit-content"
        bg="none"
        color="white"
        _hover={{ bg: 'none' }}
      />
    </Flex>
  );
}

export default CheckoutCard;
