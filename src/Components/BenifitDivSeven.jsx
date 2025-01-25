import '../Css/BenifitDivSeven.css'
//images 
import BenifitDivSevenImage from '../Images/benefits6.png'

function BenifitDivSeven() {
  return (
<>


<div className='BenifitDivSeven container bg-slate-100 rounded-lg' >

<div className='BenifitDivSeven_sub'> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h2>Ensuring Patient Data Security </h2>
       
    </div>
    <div className='BenifitDivSeven_p'>
        <p> Maintaining an in-house billing team entails significant time and </p>
        <p> financial investment. Typically, these teams also handle front desk</p>
        <p>duties, leading to a diversion of attention from patient care. When </p>
        <p> front desk tasks like claim preparation and data entry take  </p>
        <p> precedence, it hampers patient flow, ultimately impacting revenue.</p>
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={BenifitDivSevenImage} alt="BenifitDivSevenImage" />
</div>
</div>
</div>






</>
  )
}

export default BenifitDivSeven