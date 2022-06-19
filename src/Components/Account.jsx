
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
  } from '@chakra-ui/react'
  import React from 'react'
  
  
  
  
  
  
  
  
  export const Account=()=>{
     
  
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
     
        <div  class="iconify" data-icon="akar-icons:shopping-bag" ref={btnRef} colorScheme='teal' onClick={onOpen}>
         <img src="https://static.thenounproject.com/png/4038155-200.png" alt="" />
        </div>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bgColor={"black"} color={"white"}>SIGN IN </DrawerHeader>
  
            <DrawerBody>
                <p>Email Address</p>
              <Input marginBottom={"50px"} placeholder='Email address' />
              <br />
              <p >Password</p>
              <Input marginBottom={"50px"} placeholder='Password' />
              
              <Button width={"100%"} border={"2px solid black"} >Sign in</Button>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )}