import '../Css/ServiceDIvFour.css'


// images 

import ServiceDivFour from '../Images/ServicesDIvFOur.png'


function ServiceDIvFour() {
  return (
    <>

<div className='ServiceDIvFour container bg-slate-100 rounded-lg' >

<div className='ServiceDIvFour_sub'> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h1> Medical Billing and Coding</h1>
    </div>
    <div>
        <p> Reignite your financial success with our seasoned billing and coding</p>
        <p> professionals, boasting 25+ years of combined expertise.</p>
        <p> reimbursements. Even minor errors can lead to claim rejections, </p>
        <p> reimbursements. Even minor errors can lead to claim rejections, </p>
        <p> triggering lengthy resubmission procedures and payment delays.</p>
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={ServiceDivFour} alt="ServiceDivFour" />
</div>
</div>
</div>
    
    
    </>
  )
}

export default ServiceDIvFour