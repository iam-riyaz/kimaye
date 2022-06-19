import "./Navbar.css"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Login } from "./Login"



export const Navbar=()=>{


  return(
    <>
    <div className="loc">Delivering in Mumbai and Delhi | Same day delivery!</div>
    <div className="main-nav">
      <div className="left">
       <select name="" id="">
          <option value="">ALL FRUITS</option>
          <option value="">FREASH CUT</option>
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
      <span   className="iconify" data-icon="bytesize:user">
      {/* <Login/> */}
      </span>
      <span class="iconify" data-icon="akar-icons:shopping-bag"></span>
      <div >
      
      </div>
      
        </div>
    </div>
    </>
  )
}