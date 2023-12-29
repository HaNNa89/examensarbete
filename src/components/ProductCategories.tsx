import { Flex, HStack, Text } from "@chakra-ui/layout";
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
		<Flex>
			<Flex justifyContent="center">
				<HStack>
					{categories.map((category, index) => (
						<Text
							key={index}
							onClick={() => handleCategoryClick(category)}
							cursor="pointer"
							fontWeight={currentCategory === category ? "bold" : "normal"}
						>
							{category}
						</Text>
					))}
				</HStack>
			</Flex>
		</Flex>
	);
}

export default ProductCategories;
