import { Box, Flex, HStack } from "@chakra-ui/layout";
import { useState } from "react";

function ProductCategories({
	onSelectCategory,
}: {
	onSelectCategory: (category: string) => void;
}) {
	const categories = ["Brunch", "Cake", "Cookie"];

	const [currentCategory, setCurrentCategory] = useState<string | null>(null);

	const handleCategoryClick = (category: string) => {
		setCurrentCategory(category);
		onSelectCategory(category);
	};
	return (
		<Flex justifyContent="center">
			<Flex>
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
								bg: "whiteAlpha.200",
								borderWidth: "2px",
								boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
							}}
						>
							{category}
						</Box>
					))}
				</HStack>
			</Flex>
		</Flex>
	);
}

export default ProductCategories;
