import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

interface ProductFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  title: string;
  subheading: string;
  categorie: string;
  price: number;
  id: number;
  description: string;
  ingredients: string[];
  img: string;
}

function ProductForm({ onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    subheading: '',
    categorie: '',
    price: 0,
    id: 0,
    description: '',
    ingredients: [],
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, ingredients: value.split(',') });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // Spara till local storage och rensa formet efter submit
    // Se till så att produkten kommer upp direkt på sidan
  };

  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Center>
          <Button
            type="submit"
            mt={3}
            py={1}
            px={6}
            fontSize={18}
            border="1px"
            bgColor="#1A1A1C"
            textColor="white"
            _hover={{
              bg: 'whiteAlpha.200',
              borderWidth: '2px',
              boxShadow: '0 4px 8px rgba(255, 255, 255, 0.3)',
            }}
          >
            Add Product
          </Button>
        </Center>
        {isLargeScreen ? (
          <Flex gap="6">
            <Box>
              <Heading mb="4">Product Form</Heading>

              <VStack spacing="8">
                <Flex gap="4">
                  <Box>
                    <FormControl>
                      <FormLabel mt="1">Title</FormLabel>
                      <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt="1">Subheading</FormLabel>
                      <Input
                        type="text"
                        name="subheading"
                        value={formData.subheading}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt="1">Category</FormLabel>
                      <Input
                        type="text"
                        name="categorie"
                        value={formData.categorie}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt="1">Price</FormLabel>
                      <Input
                        type="number"
                        name="price"
                        value={formData.price.toString()}
                        onChange={handleNumberChange}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <FormLabel mt="1">ID</FormLabel>
                      <Input
                        type="number"
                        name="id"
                        value={formData.id.toString()}
                        onChange={handleNumberChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt="1">Description</FormLabel>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt="1">
                        Ingredients (comma-separated)
                      </FormLabel>
                      <Input
                        type="text"
                        name="ingredients"
                        value={formData.ingredients.join(',')}
                        onChange={handleIngredientsChange}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel mt="1">Image URL</FormLabel>
                      <Input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                </Flex>
              </VStack>
            </Box>
            <Box mt="4">
              <Heading mb="4">Product Preview</Heading>
              <Box
                width="15rem"
                height="20rem"
                boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                borderRadius="10px"
                overflow="hidden"
                bg="white"
                position="relative"
                cursor="pointer"
                mt="8"
              >
                <Image
                  src={formData.img}
                  alt={formData.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Flex>
        ) : (
          <Flex direction="column">
            <VStack spacing="8">
              <FormControl>
                <FormLabel mt="1">Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="1">Subheading</FormLabel>
                <Input
                  type="text"
                  name="subheading"
                  value={formData.subheading}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="1">Category</FormLabel>
                <Input
                  type="text"
                  name="categorie"
                  value={formData.categorie}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="1">Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  value={formData.price.toString()}
                  onChange={handleNumberChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel mt="1">ID</FormLabel>
                <Input
                  type="number"
                  name="id"
                  value={formData.id.toString()}
                  onChange={handleNumberChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="1">Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="1">Ingredients (comma-separated)</FormLabel>
                <Input
                  type="text"
                  name="ingredients"
                  value={formData.ingredients.join(',')}
                  onChange={handleIngredientsChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt="1">Image URL</FormLabel>
                <Input
                  type="text"
                  name="img"
                  value={formData.img}
                  onChange={handleChange}
                />
              </FormControl>
            </VStack>

            <Flex mt="6" width="15rem">
              <Box width="15rem" height="20rem">
                <Image
                  src={formData.img}
                  alt={formData.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Flex>
          </Flex>
        )}
      </form>
    </Box>
  );
}

export default ProductForm;
