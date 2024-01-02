import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { CiCircleMinus, CiCirclePlus, CiTrash } from 'react-icons/ci';

function CheckoutCard() {
  return (
    <Flex alignItems="flex-start" m={['2', '8', '12']} gap={['0', '8', '24']}>
      <Box
        width={['6rem', '10rem', '10rem']}
        height={['11rem', '15rem', '15rem']}
      >
        <Image
          src={
            'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
          }
          alt={''}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <Text m="2">Titel</Text>
      <Text m="2">Pris</Text>
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
