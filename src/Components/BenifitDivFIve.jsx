import '../Css/BenifitDivFIve.css'

//images 

import BenifitDIvFive from '../Images/ServiceDIvSix.png'



function BenifitDivFIve() {
  return (
<>


<div className='BenifitDivFIve container bg-slate-100 rounded-lg' >

<div className='BenifitDivFIve_sub'> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h2> Outsourcing accounts receivable  </h2>
        <h2> reduces billing errors</h2>
    </div>
    <div className='BenifitDivFIve_p'>
        <p> Maintaining an in-house billing team entails significant time and </p>
        <p> financial investment. Typically, these teams also handle front desk</p>
        <p>duties, leading to a diversion of attention from patient care. When </p>
        <p> front desk tasks like claim preparation and data entry take  </p>
        <p> precedence, it hampers patient flow, ultimately impacting revenue.</p>
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={BenifitDIvFive} alt="BenifitDIvFive" />
</div>
</div>
</div>





</>
  )
}

export default BenifitDivFIve