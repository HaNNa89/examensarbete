import {
  Box,
  Collapse,
  Flex,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';

function ProductCategories({
  onSelectCategory,
}: {
  onSelectCategory: (category: string | null) => void;
}) {
  const categories = ['All', 'Brunch', 'Cake', 'Cookie'];

  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [, setCurrentCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      setCurrentCategory(null);
    } else {
      setCurrentCategory(category);
    }
    onSelectCategory(category === 'All' ? null : category);
  };

  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex justifyContent="center" mt={2}>
      {isLargeScreen ? (
        <Box>
          <HStack>
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
      ) : (
        <Box>
          <Box
            mt={6}
            py={1}
            px={6}
            fontSize={18}
            border="1px"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            _hover={{
              bg: 'whiteAlpha.200',
              borderWidth: '2px',
              boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
            }}
          >
            Filter
          </Box>

          <Collapse in={isFilterOpen} animateOpacity>
            <Flex direction="column" alignItems="center">
              {categories.map((category, index) => (
                <Box
                  m={4}
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  fontSize={18}
                  borderBottom="1px"
                  _hover={{
                    borderBottom: '2px',
                  }}
                >
                  {category}
                </Box>
              ))}
            </Flex>
          </Collapse>
        </Box>
      )}
    </Flex>
  );
}

export default ProductCategories;
