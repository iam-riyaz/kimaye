import { useState } from "react"
import "./AllProducts.css"
import myData from "../local_data/myData.json"

export const AllProducts=()=>{
    const [data,setData]=useState(myData.productsdata)
    console.log(data)
    return(
        <>
        
         <div className="product-page-div">
            
            {data.map((e)=>{
            
              return(
                <>
                    <div className="pro-div">
                        <img src={e.img_url} alt="" />
                        <p>{e.product_name}</p>
                        <h2>{e.price}</h2>

                    </div>
               
                </>
              )
                
            })}
         </div>
        </>
    )
}