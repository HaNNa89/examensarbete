import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HiMiniBars3, HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoMdHeartEmpty } from 'react-icons/io';
import { PiUser } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" px={6} py={4} align="center">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        align="center"
        width="100%"
      >
        {isSmallScreen ? (
          <Flex align="center">
            <Flex pl="2">
              <IconButton
                icon={<HiMiniBars3 />}
                colorScheme="white"
                aria-label="search"
                fontSize={22}
                onClick={onOpen}
                display={{ base: 'block', md: 'none' }}
              />
              <Link to="admin">
                <IconButton
                  icon={<PiUser />}
                  colorScheme="white"
                  aria-label="admin"
                  fontSize={22}
                  display={{ base: 'block', md: 'none' }}
                />
              </Link>
            </Flex>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody bg="#1A1A1C">
                  <Flex
                    direction="column"
                    align="center"
                    mt={20}
                    fontSize="20px"
                    gap={4}
                  >
                    <Link to="categories/breakfast" onClick={onClose}>
                      Breakfast
                    </Link>
                    <Divider width="200px" mt={4} color="white" />
                    <Link to="categories/brunch" onClick={onClose}>
                      Brunch
                    </Link>
                    <Divider width="200px" mt={4} color="white" />
                    <Link to="categories/lunch" onClick={onClose}>
                      Lunch
                    </Link>
                    <Divider width="200px" mt={4} color="white" />
                    <Link to="categories/cake" onClick={onClose}>
                      Cake
                    </Link>
                    <Divider width="200px" mt={4} color="white" />
                    <Link to="categories/cookie" onClick={onClose}>
                      Cookie
                    </Link>
                    <Divider width="200px" mt={4} color="white" />
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Heading
              fontSize={{ base: '24px', sm: '28px', md: '30px' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Link to="/">Café o´neil</Link>
            </Heading>
          </Flex>
        ) : (
          <Box>
            <Heading
              fontSize={{ base: '24px', sm: '28px', md: '30px' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Link to="/">Café o´neil</Link>
            </Heading>
          </Box>
        )}
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
