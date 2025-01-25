import '../Css/AboutHeroSection.css'


import AboutHeroSectionImage from '../Images/about.png'

function AboutHeroSection() {
  return (
<>

<div className="AboutHeroSection">


<div className='AboutHeroSection_left' data-aos="zoom-in-right">
<div className='text-sky-700'>
    <h2>Curious To Know About Us? </h2>

</div>

<div className='AboutHeroSection_p'>
    <p> From the moment a patient steps through your doors to the successful</p>
    <p> collection of payments, our dedicated Revenue Cycle Management </p>
    <p> (RCM) team is committed to identifying and resolving any obstacles</p>
    <p> hindering your financial growth.</p>
</div>

<div className='AboutHeroSection_left_button'> 
  <button  type='button' className='text-white bg-sky-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> Call Us </button>
  <button type='button' className='text-white bg-green-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> Leave a Message</button>

</div>


</div >
<div className='AboutHeroSection_right' data-aos="zoom-in-left">
<img src={AboutHeroSectionImage} alt="AboutHeroSectionImage" />
</div>



</div>



</>
  )
}

export default AboutHeroSection