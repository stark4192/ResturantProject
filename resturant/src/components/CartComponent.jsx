import { React} from "react";
import useCart  from '../hooks/useCartContext';
import { Button, Badge, Text, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const CartComponent = () => {
  const { cartCount } = useCart();

  return (
    <Box ml="0">
    <Button className="cart" fontSize="24px" border="1px solid">
      <FaShoppingCart />
      {cartCount > 0 && (
        <Badge
          borderRadius="50%"
          colorScheme="red"
          fontSize="20px"
          position="absolute"
          top="-15px"
          right="-10px"
        >
          {cartCount}
        </Badge>
      )}
      <Text className="carttext">Cart</Text>
    </Button>
    </Box>
  );
};

export default CartComponent;
