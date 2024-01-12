import { Box, Flex, HStack, Select } from '@chakra-ui/react';
import { useState } from 'react';

function ProductCategories({
  onSelectCategory,
}: {
  onSelectCategory: (category: string) => void;
}) {
  const categories = ['Brunch', 'Cake', 'Cookie'];

  const [, setCurrentCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
    onSelectCategory(category);
  };

  return (
    <Flex justifyContent="center">
      <Box>
        {/* Dropdown for smaller screens */}
        <Select
          display={{ base: 'block', lg: 'none' }}
          onChange={(e) => handleCategoryClick(e.target.value)}
        >
          <option value="" disabled selected>
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>

        {/* Horizontal list for larger screens */}
        <HStack display={{ base: 'none', lg: 'flex' }}>
          {categories.map((category, index) => (
            <Box
              mt={6}
              py={1}
              px={6}
              key={index}
              onClick={() => handleCategoryClick(category)}
              cursor="pointer"
              fontSize={18}
              border="1px"
              _hover={{
                bg: 'whiteAlpha.200',
                borderWidth: '2px',
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
              }}
            >
              {category}
            </Box>
          ))}
        </HStack>
      </Box>
    </Flex>
  );
}

export default ProductCategories;
