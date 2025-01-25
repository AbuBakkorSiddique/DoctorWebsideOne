
import '../Css/BenifitDIvOne.css'

//images 
import BenifitImageDivOne from '../Images/benefits-hero.png'



function BenifitDIvOne() {
  return (
<>

<div className='BenifitDIvOne container bg-slate-100 rounded-lg' >

<div className='BenifitDIvOne_sub '> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h3> Advantages of Outsourcing
        </h3>
        <h3> Medical Billing Solutions</h3>
    </div>
    <div className='BenifitDIvOne_p'>
        <p> Outsourcing medical billing to a third-party company offers numerous </p>
        <p> benefits. Healthcare providers often save time and money through this</p>
        <p> approach, enabling them to concentrate more on delivering quality  </p>
        <p> care, enhancing patient flow, and boosting satisfaction. </p>
       
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={BenifitImageDivOne} alt="BenifitImageDivOne" />
</div>
</div>
</div>




</>
  )
}

export default BenifitDIvOne