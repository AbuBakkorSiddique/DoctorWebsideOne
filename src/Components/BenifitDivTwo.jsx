import '../Css/BenifitDivTwo.css'
//images 
import BenifitDivTwoImage from '../Images/ServiceDIvTwoImage.png'




function BenifitDivTwo() {
  return (
<>
<div className='BenifitDivTwo container bg-slate-100 rounded-lg' >

<div className='BenifitDivTwo_sub'> 
<div data-aos="zoom-out-right">
    <div className='text-sky-700'>
        <h2> Outsourcing medical billing enables </h2>
        <h2> increased focus on patient care.</h2>
    </div>
    <div className='BenifitDivTwo_p'>
        <p> Reignite your financial success with our seasoned billing and coding</p>
        <p> professionals, boasting 25+ years of combined expertise.</p>
        <p> reimbursements. Even minor errors can lead to claim rejections, </p>
        <p> reimbursements. Even minor errors can lead to claim rejections, </p>
        <p> triggering lengthy resubmission procedures and payment delays.</p>
    </div>
</div>

<div data-aos="zoom-out-left">

    <img src={BenifitDivTwoImage} alt="BenifitDivTwoImage" />
</div>
</div>
</div>




</>
  )
}

export default BenifitDivTwo