import { Center, Divider, Heading } from '@chakra-ui/react';
import CheckoutCard from '../components/CheckoutCard';

function Checkout() {
  return (
    <Center flexDir="column">
      <Heading m="8">Checkout</Heading>
      <Divider w={['20rem', '35rem', '49rem']} />
      <CheckoutCard />
    </Center>
  );
}

export default Checkout;
