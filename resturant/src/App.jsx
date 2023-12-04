import { Grid, GridItem , Show, Text} from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import MenuGrid from './components/MenuGrid';
import Title from './services/restaurantData.json'
import CategoryList from './components/CategoryList';
import useMenus from './hooks/useMenus'
import { useState } from 'react';

function App() {

  const { menus, loading, error } = useMenus();
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filterMenuByCategory = (categoryName) => {
    const selectedMenu = menus.filter((menu) => menu.categoryName === categoryName);
    setSelectedCategory(selectedMenu);
  };

  return (
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={{
    base :'1fr',
    lg : '200px 1fr'
  }}
  >

      <GridItem area='nav'>
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area='aside'>
          <Text fontSize={50} textAlign='center' marginBottom={10}>Category</Text>
        <CategoryList onSelectCategory={filterMenuByCategory}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Text fontSize={50} textAlign='center' textShadow='1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4)'>{Title.restaurant.name}</Text>
        <MenuGrid menus={selectedCategory ||menus}/>
      </GridItem>
  </Grid>
  )
}
export default App;
