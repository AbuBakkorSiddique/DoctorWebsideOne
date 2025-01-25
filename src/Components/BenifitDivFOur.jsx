import '../Css/BenifitDivFOur.css'
//images 

import BenifitDIvfourImage from '../Images/ServicesDIvFOur.png'
function BenifitDivFOur() {
  return (
<>


<div className='BenifitDivFOur container bg-slate-100 rounded-lg' >

<div className='BenifitDivFOur_sub'> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h2> Outsourcing medical billing improves  </h2>
        <h2> cash flow.</h2>
    </div>
    <div className='BenifitDivFOur_p'>
        <p> Selecting Right Medical Billing as your revenue cycle management  </p>
        <p> partner can elevate your revenue potential by up to 30%. You'll enjoy </p>
        <p>increased patient time and faster payments without the need for  </p>
        <p> fcontinuous training investments. We specialize in crafting error-free  </p>
        <p> costs by minimizing claim processing time, conducting daily billing and.</p>
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={BenifitDIvfourImage} alt="BenifitDIvfourImage" />
</div>
</div>
</div>









</>
  )
}

export default BenifitDivFOur