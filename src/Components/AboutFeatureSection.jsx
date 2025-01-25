

//css 
import '../Css/AboutFeatureSection.css'

//images 

import AboutOne from '../Images/AboutOne.png';
import AboutTwo from '../Images/AboutTwo.png' ;
import AboutTHree from '../Images/AboutThree.png' ;
import AboutFour from '../Images/AboutFour.png' ; 


function AboutFeatureSection() {
  return (
<>
<div className="AboutFeatureSection container">


<div className='AboutFeatureSection_left' data-aos="zoom-in-right">

<div className='AboutFeatureSection_left_One'>
  <p> At Vcare Medical <b>Billing</b>, our pride lies in our team of dedicated </p>
  <p> experts committed to delivering top-tier medical billing and coding </p>
  <p> services. Our professionals are highly skilled in the latest coding </p>
  <p> techniques and possess extensive experience in the healthcare </p>
  <p> industry.</p>
</div>
<div className='AboutFeatureSection_left_Two'>
<p> 
We prioritize accessibility, transparency, and communication at </p>
<p> Vcare Medical Billing. <b> Establishing robust client</b> relationships is </p>
<p> crucial, and our team ensures prompt responsiveness to all queries</p>
<p> and concerns. Accessible and knowledgeable, our team members </p>
<p> provide personalized attention to every client.</p>
</div>
<div className='AboutFeatureSection_left_Three'>

<p> 
<b> Exceptional customer service defines</b> Vcare Medical Billing.  </p>
<p> Committed to excellence, our team diligently ensures accurate, </p>
<p> timely, and efficient billing services tailored to meet each client's </p>
<p> distinct requirements.</p>
</div>

</div>
<div className='AboutFeatureSection_right' data-aos="zoom-in-left">

<div className='AboutFeatureSection_right_DivOne'>
<div>
  <img src={AboutOne} alt="AboutOne" />
</div>
<div>
  <img src={AboutTwo} alt="AboutTwo" />
</div>
</div>
<div className='AboutFeatureSection_right_DivTwo'>
  <div>
    <img src={AboutTHree} alt="AboutTHree" />
  </div>
  <div>
    <img src={AboutFour} alt="AboutFour" />
  </div>

</div>

</div>






</div>

</>
  )
}

export default AboutFeatureSection