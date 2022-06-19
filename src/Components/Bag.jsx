// import {
//     Box,
   
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
//   } from '@chakra-ui/react';
//   import {
//     HamburgerIcon,
//     CloseIcon,
    
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';



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
  
  
  
  
  
  
  
  
  export const Bag=()=>{
     
  
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
     
        <div  class="iconify" data-icon="akar-icons:shopping-bag" ref={btnRef} colorScheme='teal' onClick={onOpen}>
         <img src="https://www.pngitem.com/pimgs/m/247-2473425_shopping-bag-comments-shopping-bag-icon-svg-hd.png" alt="" />
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
            <DrawerHeader bgColor={"black"} color={"white"}>SHOPPING CART</DrawerHeader>
  
            <DrawerBody>
              <p style={{textAlign:"center"}}>No products in the cart.</p>
              <Button border={"2px solid black"} marginTop={"50px"} width={"100%"}>CONTINUE SHOPPING</Button>
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
    )
  
  
  
    
   
    //       const { isOpen, onToggle } = useDisclosure();
  
    // return (
    //   <Box>
    //     <Flex
    //     // margin={"10%"}
    //       margin={"0px 00px 0px 00px"}
    //       bg={useColorModeValue('rgb(230, 230, 230)', 'gray.800')}
    //       color={useColorModeValue('black', 'white')}
    //       minH={'60px'}
    //       py={{ base: 2 }}
    //       px={{ base: 4 }}
    //       borderBottom={1}
    //       borderStyle={'solid'}
    //       borderColor={useColorModeValue('gray.200', 'gray.900')}
    //       align={'center'}>
    //       <Flex
    //         flex={{ base: 1, md: 'auto' }}
    //         ml={{ base: -2 }}
    //         display={{ base: 'flex', md: 'none' }}>
    //         <IconButton
    //           onClick={onToggle}
    //           icon={
    //             isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
    //           }
    //           variant={'ghost'}
    //           aria-label={'Toggle Navigation'}
    //         />
    //       </Flex>
    //       <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
    //         <Text
    //           textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
    //           fontFamily={'heading'}
    //           color={useColorModeValue('gray.800', 'white')}>
    //           Logo
    //         </Text>
  
    //         <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
    //           {/* <DesktopNav /> */}
    //         </Flex>
    //       </Flex>
  
    //       <Stack
    //         flex={{ base: 1, md: 0 }}
    //         justify={'flex-end'}
    //         direction={'row'}
    //         spacing={6}>
    //         <Button
    //           as={'a'}
    //           fontSize={'sm'}
    //           fontWeight={400}
    //           variant={'link'}
    //           href={'#'}>
    //           Sign In
    //         </Button>
    //         <Button
    //           display={{ base: 'none', md: 'inline-flex' }}
    //           fontSize={'sm'}
    //           fontWeight={600}
    //           color={'white'}
    //           bg={'pink.400'}
    //           href={'#'}
    //           _hover={{
    //             bg: 'red.300',
    //           }}>
    //           Sign Up
    //         </Button>
    //       </Stack>
    //     </Flex>
  
    //     <Collapse in={isOpen} animateOpacity>
    //       {/* <MobileNav /> */}
    //     </Collapse>
    //   </Box>
    // );
  }