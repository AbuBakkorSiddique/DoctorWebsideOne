import '../Css/AboutPageLastDiv.css'

////images 
import AboutSectionLastDivImage from '../Images/about-contact.png'

function AboutPageLastDiv() {
  return (
<>

<div className="AboutPageLastDiv_Main container"> 
<div className="AboutPageLastDiv_Left" data-aos="zoom-in-right">
<div className="AboutPageLastDiv_Left_p">
    <p> Imagine us as an integral part of your team, working in tandem to</p>
    <p> streamline operations. Our goal? To save your valuable time, boost</p>
    <p> your revenue streams, and empower you to dedicate more focus to </p>
    <p> providing exceptional patient care. We take immense pride in being </p>
    <p> catalysts for our clients' growth. Don't hesitate to get in touch with</p>
    <p> us today and discover how our customized strategies and industry </p>
    <p> expertise can significantly elevate your facility's revenue cycle </p>
    <p> management.</p>
</div>
<div className="AboutPageLastDiv_Left_button">

<button  type='button' className='text-white bg-sky-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> Call Us </button>
</div>


</div>
<div className="AboutPageLastDiv_right" data-aos="zoom-in-left">
<img src={AboutSectionLastDivImage} alt="AboutSectionLastDivImage" />
</div>


</div>
</>
  )
}

export default AboutPageLastDiv