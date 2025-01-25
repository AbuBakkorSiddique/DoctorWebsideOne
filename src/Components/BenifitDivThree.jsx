import '../Css/BenifitDivThree.css'

import BenifitDIvTHree from '../Images/ServicesDIvThree.png'

function BenifitDivThree() {
  return (
<>

<div className='BenifitDIvTHree container bg-slate-100 rounded-lg' >

<div className='BenifitDIvTHree_sub'> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h2> Outsourcing medical billing reduces </h2>
        <h2> administrative responsibilities.</h2>
    </div>
    <div className='BenifitDIvTHree_p'>
        <p> Maintaining an in-house billing team entails significant time and </p>
        <p> financial investment. Typically, these teams also handle front desk</p>
        <p>duties, leading to a diversion of attention from patient care. When </p>
        <p> front desk tasks like claim preparation and data entry take  </p>
        <p> precedence, it hampers patient flow, ultimately impacting revenue.</p>
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={BenifitDIvTHree} alt="BenifitDIvTHree" />
</div>
</div>
</div>






</>
  )
}

export default BenifitDivThree