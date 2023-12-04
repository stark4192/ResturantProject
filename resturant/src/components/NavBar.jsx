
import {HStack, Image, Divider} from '@chakra-ui/react';
import logos from '../assets/logo.svg';
import Header from './Header';
import SearchComponent from './SearchComponent';
import MapIcon from './MapIcon';

const NavBar = () => {
  return (
    <>
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logos} boxSize='60px'/>
      <SearchComponent/>
      <Header/>
    </HStack>
    <Divider />
    <MapIcon></MapIcon>
    </>

    );
  };

export default NavBar;
  




