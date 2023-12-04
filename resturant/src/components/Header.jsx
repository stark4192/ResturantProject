import {React, useState, useEffect} from 'react'
import {HStack, Button, useBreakpointValue, Text} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import { signInWithPopup, signOut, GoogleAuthProvider, getAuth, browserSessionPersistence, setPersistence} from 'firebase/auth';
import { CartProvider } from '../hooks/useCartContext';
import app from '../services/Auth'
import CartComponent from './CartComponent';
import ColorModeSwitch from './ColorModeSwitchx';
const Header =()=>{

const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Guest');
const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  useEffect(() => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Persist the user's login status
        if (auth.currentUser) {
          setUserName(`HI! ${auth.currentUser.displayName}`);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        console.error('Error setting persistence:', error);
      });
  }, [auth]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const name = `HI! ${user.displayName}`;
      setUserName(name);
      localStorage.setItem('userName', name);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserName('Guest');
      localStorage.removeItem('userName');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isUsernameVisible = useBreakpointValue({ base: false, md: true });
return(
<HStack>
    {isUsernameVisible&&(
      <Text className="username" id="userNameText">
          {userName}
      </Text>
      )}
      <HStack className="right-header-container" spacing="4">
      {!isUsernameVisible && (
          <Text className="username" id="userNameText">
            {userName}
          </Text>
        )}
        <Button
          className={!isAuthenticated ? 'userLogin' : 'userLogout'}
          fontSize="24px"
          border="1px solid"
          onClick={!isAuthenticated ? handleLogin : handleLogout}
        >
          <FaUser /> {!isAuthenticated ? 'Log In' : 'Log Out'}
        </Button>
        <CartProvider>
        <CartComponent/>
        </CartProvider>
        <ColorModeSwitch/>
      </HStack>
    </HStack>
)
}

export default Header