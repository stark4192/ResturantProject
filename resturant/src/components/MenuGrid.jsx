import { SimpleGrid, Box, Spinner, Text } from '@chakra-ui/react';
import useMenus from '../hooks/useMenus';
import MenuCard from './MenuCard';
import { CartProvider } from '../hooks/useCartContext';

const MenuGrid = ({menus}) => {

    if (!menus || menus.length === 0) {
        return (
          <Box textAlign="center" mt="20">
            <Text>No items found.</Text>
          </Box>
        );
      }
    

  return (
    <CartProvider>
      <RenderMenus menus={menus} />
    </CartProvider>
  );
};

const RenderMenus = ({ menus }) => (
  <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={10} padding={10}>
    {menus.map((menu, index) => (
      <MenuCard key={index} id={menu.categoryNames} menu={menu} />
    ))}
  </SimpleGrid>
);

export default MenuGrid;
