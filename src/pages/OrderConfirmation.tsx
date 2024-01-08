import {
  Box,
  Flex,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';

function OrderConfirmation() {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  return (
    <Flex direction="column" align="center" justify="center" p="4">
      <Heading as="h1" mt="4" mb="6">
        Order Confirmation
      </Heading>
      <Text fontSize="lg" mb="4">
        Thank you for your order
      </Text>
      <Text fontSize="lg" mb="6">
        Order: IG56789
      </Text>
      <Flex overflowX="auto">
        {isLargeScreen ? (
          <Table variant="simple" minWidth="80%">
            <Thead>
              <Tr>
                <Th color="white" fontSize={['sm', 'md', 'lg']}>
                  Product
                </Th>
                <Th color="white" fontSize={['sm', 'md', 'lg']}>
                  Pieces
                </Th>
                <Th color="white" fontSize={['sm', 'md', 'lg']}>
                  Date
                </Th>
                <Th color="white" fontSize={['sm', 'md', 'lg']}>
                  Recipient
                </Th>
                <Th color="white" fontSize={['sm', 'md', 'lg']}>
                  Price
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td w={['30%', '20%', '20%']} fontSize={['sm', 'md', 'lg']}>
                  <Image
                    src={
                      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
                    }
                    alt={'panckaes'}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Td>
                <Td fontSize={['sm', 'md', 'lg']}>3</Td>
                <Td fontSize={['sm', 'md', 'lg']}>14-02-24</Td>
                <Td fontSize={['sm', 'md', 'lg']}>Recipient</Td>
                <Td fontSize={['sm', 'md', 'lg']}>Price</Td>
              </Tr>
            </Tbody>
          </Table>
        ) : (
          <Table variant="simple" minWidth="80%">
            <Thead display={'table-header-group'}>
              <Tr>
                <Th color="white" fontSize={['sm', 'md', 'lg']}>
                  Product
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize={['sm', 'md', 'lg']} mb={['4', '0']}>
                  <Flex direction="column" align="start">
                    <Box w="30">
                      <Image
                        src={
                          'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
                        }
                        alt={'panckaes'}
                        objectFit="cover"
                        width="100%"
                        height="auto"
                        mb={['4', '0']}
                      />
                    </Box>
                    <Text fontSize={['sm', 'md', 'lg']}>3 pcs</Text>
                    <Text fontSize={['sm', 'md', 'lg']}>Address</Text>
                    <Text fontSize={['sm', 'md', 'lg']}>Recipient</Text>
                    <Text fontSize={['sm', 'md', 'lg']}>Price</Text>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        )}
      </Flex>
      <Flex align="center" gap="2" mt="6">
        <Heading fontSize={['lg', 'xl', '2xl']}>Total Price:</Heading>
        <Text fontSize={['md', 'lg', 'xl']}>150kr</Text>
      </Flex>
    </Flex>
  );
}

export default OrderConfirmation;
