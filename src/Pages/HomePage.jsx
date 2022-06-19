import { useState } from "react";
import {Carousel} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./HomePage.css"




export const HomePage=()=>{
    return(
        <>

        
       
{/* slider */}
<div className="slide">
  <div className="text-slide">
    <h1>SAVOUR ERATHEY FLAVORS</h1>
    <h1>KIYMAYE FRESH DATES</h1>
    <Link to={"/allproducts"}>
<button className="hero-btn">Shop Now</button>
</Link>
  </div>
 {/* <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Date-launch-post-whatsapp-banner-desktop.jpg?v=1654259038" alt="" /> */}
</div>
{/* slider end-------------- */}




{/* product start */}
<div className="heading">
  <h1>KIMAYE RECOMMENDS</h1>
  <p>A Handpicked and Curated Fruit offering</p>
</div>
<div className="products-div">

<div className="indv-product">
<img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_670x.png?v=1614338437" alt="" />
<h2 className="title">ALL FRUITS</h2>
<p className="dis">Pick and choose from a wide range of delicious fruits</p>
<Link to={"/allproducts"}>
<button >Shop Now</button>
</Link>
</div>

<div className="indv-product">
<img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_670x.png?v=1614338730" alt="" />
<h2 className="title">FRESH CUTS</h2>
<p className="dis">We want to spoon-feed you… quite literally</p>
<Link to={"/allproducts"}>
<button >Shop Now</button>
</Link>
</div>

<div className="indv-product">
<img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080" alt="" />
<h2 className="title">FRUIT COMBOS</h2>
<p className="dis">Indulge in fruit combinations created by us</p>
<Link to={"/allproducts"}>
<button >Shop Now</button>
</Link>
</div>

<div className="indv-product">
<img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_670x.jpg?v=1631516874" alt="" />
<h2 className="title">GIFTS BY KIMAYE</h2>
<p className="dis">Healthy & memorable gifts for your loved ones</p>
<Link to={"/allproducts"}>
<button >Shop Now</button>
</Link>
</div>
</div>
{/* end of products */}



{/* start of ads */}
<div className="ads-div">

    <div ><img className="scratch" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi-top-cut.png?v=1599122573" alt="" /></div>
    <div className="uper-green">
    <div className="green-div">
        <img className="img-ads" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_570x.png?v=1622009438" alt="" />
        <div className="text-div">
            <h1>WE’D LIKE TO SAY KIMAHI…</h1>
            <p>Many of us share common safety concerns about the food we eat.

<br />
<br />
When it comes to fruits, these concerns are even more serious in terms of the way they are grown and handled throughout their farm-to-home journey. We make eating fruits a worry-free and enjoyable experience for you.
<br />
<br />
Since 2009, we have set the benchmark for fruit safety and quality in 35 countries. Kimaye is now expanding its footprint in India, bringing you multiple varieties of fruit that are grown, packaged, and delivered in the safest and most socially responsible manner.</p>
    <div className="tags">
    Kimaye is #allSafe#allGood
    </div>
    <div className="btn-div">
    <button className="btn">Learn More</button>
    </div>
        </div>
    </div>
    </div>
</div>
{/* end of ads */}



{/* start of footer */}
{/* <div className="footer-div">
  <img src="https://www.linkpicture.com/q/Screenshot-105_1.png" alt="" />
</div> */}
{/* end of footer */}
</>




    )
}




