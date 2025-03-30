import React from 'react'
import {Link} from'react-router-dom'
import './home.css';
import Bannerimg from "../Assets/home-banner-background.png";
import Dogcat from "../Assets/Rectangle 1 (1).png";
import Cat from "../Assets/ai-generative-cute-cat-isolated-on-solid-background-photo.jpg"
import Fish from "../Assets/YSTZepmJPEyu6iNbMR26RA.jpg"
import Parrot from "../Assets/image-61945-800.jpg"
import Dog from"../Assets/KOA_Nassau_2697x1517.jpg";
import Rabbit from "../Assets/2d157475da3f359c2bfcd10875aaa872.jpg"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Shipping from "../Assets/17843261.png"
import Return from "../Assets/11202519.png"
import Support from "../Assets/5178386.png"
import Secured from "../Assets/6992183.png"
import catdry1 from "../Assets/drycatfood1.png"
import caytdry2 from "../Assets/drycatfood2.png"

  function Home(){
    const catFoodItems=[
      { id:1,src:caytdry2,alt:"dryfood2"},
      {id:2,src:catdry1,alt:"dryfood1"}
    ];
    return(
      <div className="home-container">
      
  <div className="home-banner-container">
    <div className="home-image-container">
      <img  className=" img1"  src={Bannerimg} alt= " " />
      </div>
    <div className="home-text-section">
      <h1 className="heading"> <span>TAKE </span>CARE OF <br></br>YOUR  <span>LOVELY</span> PET</h1>
      <p className="text">Discover premium pet food, stylish accessories, grooming essentials<br></br> and loving adoption services all in one place!</p>
     <button>Our Services</button>
     <button>Explore More</button>
      </div>
      <div className="home-img-container"> 
      <img className=" img2" src={Dogcat} alt=" "/>

      </div>
    </div>
    <div className="pets-img-container">
     <Link to="/Cat"> 
<img className="Cat" src={Cat}/></Link>
<img className="Dog" src={Dog}/>
<img className="Fish" src={Fish}/>
<img className="Parrot" src={Parrot}/>
<img className=" Rabbit" src={Rabbit}/>

</div>
<div className="part-3">
  <h1>What we can do</h1>
  <p><span>Caring</span> for Paws</p>
  <p>Clothings with <span>LOVE</span></p>
  <p><span>Connecting </span>Hearts</p>
  <p>Pet Food | Pet Fashion | Pet Adoption </p>

</div>





<div className="services-container">
  <div className="card">
    <div className="card-container">
     <img src={Shipping} /> 
    <h3>Fast Shipping</h3>
    <p>Order by 2pm local time to get
    free delivery on...</p>
  </div>
  </div>
  <div className="card">
    <div className="card-container">
    <img src={Return} /> 
    <h3>Easy Returns</h3>
    <p>Customers can exchange or
    return products within...</p>
  </div>
  </div>
  <div className="card">
    <div className="card-container">
    <img src={Support} /> 
  <h3>24/7 Support</h3>
  <p>Always ready to serve you day
  or night.</p>
</div>
</div>
<div className="card">
    <div className="card-container">
    <img src={Secured} /> 
  <h3>Secure Payment</h3>
  <p>Protect customer financial
  information, including...</p>
</div>
 </div>

</div>

<div className="cat-products-container" >
 <div className="cat-cart">
  <div className="cat-food">
<img src={catdry1}/>
<p>$853.93</p>
<p>Whiskas Mackerel Flavour</p>
  </div>
  </div>
  <div className="cat-cart">
  <div className="cat-food">
<img src={catdry1}/>
<p>$853.93</p>
<p>Whiskas Mackerel Flavour</p>
  </div></div>
  <div className="cat-cart">
  <div className="cat-food">
<img src={catdry1}/>
<p>$853.93</p>
<p>Whiskas Mackerel Flavour</p>
  </div>
  </div>
  <div className="cat-cart">
  <div className="cat-food">
<img src={catdry1}/>
<p>$853.93</p>
<p>Whiskas Mackerel Flavour</p>
  </div>
  </div>
  <div className="cat-cart">
  <div className="cat-food">
<img src={catdry1}/>
<p>$853.93</p>
<p>Whiskas Mackerel Flavour</p>
  </div>
  </div>
 { /*<div> {catFoodItems.map((item)=>(
    <img key={item.id} src={item.src} alt={item.alt}/>
 ))}</div>
 */}
</div>

<Footer />
  
</div>
  

   
    )
  }

export default Home;