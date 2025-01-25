

//images 

import HOmeServiceOne from '../Images/HomeServiceOne.png' ;
import HOmeServiceTwo from '../Images/HOmeServicesTwo.png' ;
import HOmeServiceThree from '../Images/HOmeServiceTHree.png' ;
import HOmeServiceFour from '../Images/HomeSErviceFOur.png' ;
import HOmeServiceFive from '../Images/HOmeSErviceFive.png' ;
import HOmeSErviceSix from '../Images/HomeServiceSix.png' ; 



import '../Css/HomeServicesSection.css'

function HomeServicesSection() {
  return (
<>

<div className='HomeServicesSection'>
<div className='HomeServicesSection_Tile text-center text-sky-800' data-aos="zoom-out-down">
<h1> Medical Billing Services We Offer</h1>
</div>
<div className='HomeServicesSection_items'>
    <div className='HomeServicesSection_items_One' data-aos="zoom-out-down">



    <div className="card bg-base-100 w-96  shadow-xl">
  <figure>
    <img
      src={HOmeServiceOne}
      alt="HOmeServiceOne" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-sky-700">CODING AND MEDICAL BILLING</h2>
    <p>Accurate medical billing and coding play a crucial role in securing reimbursements promptly. Precision is key; even minor errors can cause payment delays. At Right Medical Billing, our dedicated team ensures healthcare facilities receive rightful reimbursements from patients and payers for services rendered.</p>

  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={HOmeServiceTwo}
      alt="HOmeServiceTwo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Streamlined Accounts Management</h2>
    <p>At Vcare Medical Billing, we proactively handle your practice's accounts receivable. Identifying any pending payments owed to the provider or healthcare facility, we diligently pursue outstanding balances from patients or payors. Timely payment posting ensures an efficient billing workflow.</p>

  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={HOmeServiceThree}
      alt="HOmeServiceThree" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Credentialing and Contract Foundation</h2>
    <p>Establishing a healthcare facility hinges on credentialing and contracting, forming the bedrock of relationships with both insurance companies and patients. At RMB, we negotiate insurance payer contracts and maintain their currency, .</p>

  </div>
</div>

    </div>
    <div className='HomeServicesSection_items_two' data-aos="zoom-out-down">


    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={HOmeServiceFour}
      alt="HOmeServiceFour" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Expert Out-of-Network Negotiations</h2>
    <p>At Vcare Medical Billing, we adeptly negotiate out-of-network claims with major pricing vendors like Multiplan, Zelis, Viant, and GCS. Leveraging decades of expertise, our negotiation and settlement team excels in this intricate aspect of billing. We're recognized industry-wide as specialists in out-of-network billing.</p>
    
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={HOmeServiceFive}
      alt="HOmeServiceFive" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Eligibility and Insurance Verification</h2>
    <p>Accurate eligibility and insurance benefits verification are crucial for obtaining precise information on coverage and reimbursement. It's essential for healthcare facilities to confirm each patient's eligibility and benefits to secure payment for provided services. Count on us as an integral part of your team in this pivotal process.</p>

  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={HOmeSErviceSix}
      alt="HOmeSErviceSix" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Complete RCM Services</h2>
    <p>Vcare Medical Billing manages the entire revenue cycle, supporting from patient arrival to payment receipt. We assist in compliance, workflow, and staff training, acting as an extension of your team.
Beyond financial relief, we enhance your RCM operations nationwide. Your success is our success, backed by expertise, tailored solutions,</p>

  </div>
</div>


    </div>


</div>


</div>
</>
  )
}

export default HomeServicesSection