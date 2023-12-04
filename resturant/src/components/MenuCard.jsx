import { Card, Text, Stack, Divider, CardFooter, ButtonGroup, Button, CardBody, Heading, Image} from "@chakra-ui/react"
import { BiLike, BiShare } from 'react-icons/bi';
import { useState } from 'react';
import { useCart } from '../hooks/useCartContext';

const MenuCard = ({ menu}) => {

  const {updateCartCount} = useCart();

  const handleAddToCart = () => {
    updateCartCount((prevCount) => prevCount + 1);
  };
  const [liked, setLiked] = useState(false);      
  const toggleLike = () => {
  setLiked(!liked);
    };
    return(
      <>
        <Card maxW='sm' borderRadius={10} overflow='hidden'>
            <CardBody>
            <Image boxSize='400px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'></Image>
            <Stack mt='6' spacing='3'>
            <Heading fontSize='2xl'>{menu.name}</Heading>
            <Text>
                {menu.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
        {menu.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={handleAddToCart}>
        Add to cart
      </Button>
    </ButtonGroup>
    <Button flex='1' variant='ghost' leftIcon={<BiLike color={liked ? 'pink' : 'inherit'} />}onClick={toggleLike}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
  </CardFooter>
        </Card>
      </>
    )
}
export default MenuCard
