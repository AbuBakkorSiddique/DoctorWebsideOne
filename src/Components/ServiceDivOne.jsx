

//images 
import ServicesHeroImage from '../Images/ServicesHeroImage.png'

import '../Css/ServiceDivOne.css' ; 

function ServiceDivOne() {
  return (
<>
<div className="ServiceDivOne container">
<div  data-aos="zoom-out-right">
   <div className='text-sky-700'>
   <h1> We Offer Quality Services</h1> 
   </div>
   <div>
    <p> From the moment a patient steps through your doors to the successful</p>
    <p> collection of payments, our dedicated Revenue Cycle Management </p>
    <p> (RCM) team is committed to identifying and resolving any obstacles </p>
    <p> hindering your financial growth.</p>
   </div>
</div>
<div data-aos="zoom-out-left">
    <img src={ServicesHeroImage} alt="ServicesHeroImage" />
</div>

</div>

</>
  )
}

export default ServiceDivOne