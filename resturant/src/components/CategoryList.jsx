import useMenus from "../hooks/useMenus";
import { Box, Spinner, Text, HStack, List, ListItem, Button} from "@chakra-ui/react";


const  CategoryList = ({onSelectCategory})=>{
    const { menus, loading, error } = useMenus();

    if (loading) {
      return (
        <Box textAlign="center" mt="20">
          <Spinner size="xl" />
          <Text mt="4">Loading menus...</Text>
        </Box>
      );
    }
  
    if (error) {
      return (
        <Box textAlign="center" mt="20">
          <Text fontSize="xl" color="red.500">
            Error fetching menus. Please try again later.
          </Text>
        </Box>
      );
    }

    const uniqueCategoryNames = [...new Set(menus.map((menu) => menu.categoryName))];

return (
    <List>
      {uniqueCategoryNames.map((categoryName, index) => (
        <ListItem key={index}>
          <Box
            border="1px solid"
            borderColor="blackAlpha.300"
            padding="10px"
            margin="10px"
            backgroundColor="blackAlpha.100"
            _hover={{
              backgroundColor: '#0b7dda',
              cursor: 'pointer',
              borderColor: '#0b7dda',
            }}
          >
            <HStack>
              <Button fontSize={'lg'} variant='link' onClick={()=>onSelectCategory(categoryName)}>{categoryName}</Button>
            </HStack>
          </Box>
        </ListItem>
      ))}
    </List>
);
}

export default CategoryList