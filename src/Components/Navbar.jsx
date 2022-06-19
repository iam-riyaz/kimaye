import "./Navbar.css"
// import styled from "styled-components"
import { Link } from "react-router-dom"
import { Login } from "./Login"
import { Bag } from "./Bag"
import { Account } from "./Account"
// import { Tr } from "@chakra-ui/react"




export const Navbar=()=>{


  return(
    <>
    <div className="loc">Delivering in Mumbai and Delhi | Same day delivery!</div>
    <div className="main-nav">
      <div className="left">
       <select name="" id="">
          <option value=""> <Link to={"/allproducts"}>  ALL FRUITS </Link></option>
          <option value=""> <Link to={"/allproducts"}> FREASH CUT </Link></option>
       </select>
        <select name="" id="">
          <option value="">LEARN</option>
          <option value="">OUR STORY</option>
        </select>
        <select name="" id="">
          <option value=""> GROW</option>
        </select>
      </div>
      <div className="middle"><Link to={"/"}><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt="" /></Link></div>
      <div className="right"> 
      <div className="loction"><div><img src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png" alt="" /></div>
      <div>Mumbai</div></div>
      <span className="iconify" data-icon="ei:search"></span>  
     
      
     <Account/>
      
      
      
   
     
     
   
      <Bag/>
      
      
        </div>
    </div>
    </>
  )
}