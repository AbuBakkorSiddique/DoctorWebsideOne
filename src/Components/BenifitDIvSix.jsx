
import '../Css/BenifitDIvSix.css' ;
//images 
import BenifitDIvSixImages from '../Images/benefits5.png'




function BenifitDIvSix() {
  return (
 <>
 
 
 
<div className='BenifitDIvSix container bg-slate-100 rounded-lg' >

<div className='BenifitDIvSix_sub'> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h2> Outsourcing billing contributes to  </h2>
        <h2> enhanced patient satisfaction.</h2>
    </div>
    <div className='BenifitDIvSix_p'>
        <p> Maintaining an in-house billing team entails significant time and </p>
        <p> financial investment. Typically, these teams also handle front desk</p>
        <p>duties, leading to a diversion of attention from patient care. When </p>
        <p> front desk tasks like claim preparation and data entry take  </p>
        <p> precedence, it hampers patient flow, ultimately impacting revenue.</p>
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={BenifitDIvSixImages} alt="BenifitDIvSixImages" />
</div>
</div>
</div>

 
 
 
 
 
 </>
  )
}

export default BenifitDIvSix