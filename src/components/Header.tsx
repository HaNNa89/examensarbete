import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { PiUser } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  return (
    <Flex direction="column" px={6} py={4} align="center">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        align="center"
        width="100%"
      >
        <Box>
          <Heading
            fontSize={{ base: '24px', sm: '28px', md: '30px' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Link to="/">Café o´neil</Link>
          </Heading>
        </Box>

        <Flex display={{ base: 'none', md: 'block' }} mt={4}>
          <SearchBar />
        </Flex>
        <Flex justifyContent="space-between" align="center">
          <Link to="/admin">
            <IconButton
              icon={<PiUser />}
              colorScheme="white"
              aria-label="admin"
              fontSize={22}
              display={{ base: 'none', md: 'block' }}
            />
          </Link>
          <Link to="/favorites">
            <IconButton
              icon={<IoMdHeartEmpty />}
              colorScheme="white"
              aria-label="favorites"
              fontSize={22}
            />
          </Link>
          <Link to="/cart">
            <IconButton
              icon={<HiOutlineShoppingBag />}
              colorScheme="white"
              aria-label="cart"
              fontSize={22}
            />
          </Link>
        </Flex>
      </Flex>
      <Flex display={{ base: 'block', md: 'none' }} mt={4}>
        <SearchBar />
      </Flex>
    </Flex>
  );
}

export default Header;
