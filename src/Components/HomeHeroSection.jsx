import '../Css/HomeHeroSection.css';

import HomeHeroImage from '../Images/HomeHeroImage.png'



function HomeHeroSection() {
  return (
<>
<div className="HomeHeroSection">


<div className='HomeHeroSection_left' data-aos="zoom-in-right">
<div className='text-sky-700 HomeHeroSection_h2'>
    <h2 className='HomeHeroSection_h2_one'>Crafting Financial Wellness </h2>
    <h2 className='HomeHeroSection_h2_two'> Where Precision Meets </h2>
    <h2 className='HomeHeroSection_h2_three'> Personalization in Medical </h2>
    <h2 className='HomeHeroSection_h2_four'> Billing Solutions.</h2>
</div>
<div className='text-green-900'>
    <h4> Our claim acceptance rate stands at 99.9%.</h4>
</div>
<div className='HomeHeroSection_p'>
    <p> From the moment a patient steps through your doors to the successful</p>
    <p> collection of payments, our dedicated Revenue Cycle Management </p>
    <p> (RCM) team is committed to identifying and resolving any obstacles</p>
    <p> hindering your financial growth.</p>
</div>

<div className='HomeHeroSection_left_button'> 
  <button  type='button' className='text-white bg-sky-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btnOne'> Call Us </button>
  <button type='button' className='text-white bg-green-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btnTwo'> Leave a Message</button>

</div>


</div>
<div className='HomeHeroSection_right' data-aos="zoom-in-left">
<img src={HomeHeroImage} alt="HomeHeroImage" />
</div>



</div>

</>
  )
}

export default HomeHeroSection