import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "./Login.css"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input
  } from '@chakra-ui/react'

export const Login=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    return(
        <>
           <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer className="slide-login"
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay  />
        <DrawerContent className='slide-login'>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody >
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter className='slide-login'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </>
    )
}