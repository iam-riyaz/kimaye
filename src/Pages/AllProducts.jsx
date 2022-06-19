import { useState } from "react"
import "./AllProducts.css"
import myData from "../local_data/myData.json"

export const AllProducts=()=>{
    const [data,setData]=useState(myData.productsdata)
    console.log(data)

    return(
        <>
        <div className="list-div">
        <p>ALL FRUITS</p> 
        <p>FRESH CUTS</p> 
        <p>FRUIT COMBOS</p>
        <p> GIFTS BY KIMAYE</p>
        </div>
         <div className="product-page-div">
            
            {data.map((e)=>{
            
              return(
                <>
                    <div className="pro-div" onClick={()=>{
                      
                    }}>
                        <img src={e.img_url} alt="" />
                        <button className="add-cart-btn">Add to Cart</button>
                        <p>{e.product_name}</p>
                        <h2 className="price">{e.price}</h2>

                    </div>
               
                </>
              )
                
            })}
         </div>
        </>
    )
}