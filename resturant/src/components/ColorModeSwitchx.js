import { HStack, Switch, Text ,useColorMode} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'; 
import React from 'react'

const ColorModeSwitch = () => {

const isUsernameVisible = useBreakpointValue({ base: false, md: true });
const {toggleColorMode,colorMode} = useColorMode();

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode} marginLeft={5} marginBottom={5}/>
        <Text marginBottom={5}>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
