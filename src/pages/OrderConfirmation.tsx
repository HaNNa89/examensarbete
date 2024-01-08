import {
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

function OrderConfirmation() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h1" m="6">
        Order Confirmation
      </Heading>
      <Text fontSize="larger">Order: IG56789</Text>
      <Table variant="simple" mt="6">
        <Thead>
          <Tr>
            <Th color="white" fontSize="larger">
              Product
            </Th>
            <Th color="white" fontSize="larger">
              Pices
            </Th>
            <Th color="white" fontSize="larger">
              Address
            </Th>
            <Th color="white" fontSize="larger">
              Recipient
            </Th>
            <Th color="white" fontSize="larger">
              Price
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Image</Td>
            <Td>3</Td>
            <Td>Address</Td>
            <Td>Recipient</Td>
            <Td>Price</Td>
          </Tr>
        </Tbody>
      </Table>
      <Flex align="center" gap="2" mt="6">
        <Heading>Total Price:</Heading>
        <Text fontSize="1.8rem">150kr</Text>
      </Flex>
    </Flex>
  );
}

export default OrderConfirmation;
