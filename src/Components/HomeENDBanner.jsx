///home end image 
import HomeEndImage from '../Images/HOmeEndImage.png' ; 


import '../Css/HomeENDBanner.css'

function HomeENDBanner() {
  return (
   <>
   
   <div className='HomeENDBanner container  bg-sky-700'>

    <div className='HomeENDBanner_Sub '>
        <div className='HomeENDBanner_Sub_left' data-aos="zoom-in-left">
            <div className='HomeENDBanner_Sub_left_title'>
                 <h3> Benefits of Choosing </h3>
                 <h3> Vcare Billing Services</h3>
            </div>
            <div className='HomeENDBanner_Sub_left_paragraph'>
                 <p> At Vcare Medical Billing, we relieve financial burdens and </p>
                 <p> actively work to enhance your overall RCM operations. It's </p>
                 <p> our commitment to every medical billing client nationwide</p>
                 <p> Just as you excel in your field, we excel in ours. Your </p>
                 <p> success is our success.</p>
            </div>

        </div>
        <div className='HomeENDBanner_Sub_right' data-aos="zoom-in-right">


        <img src={HomeEndImage} alt="HomeEndImage" />



        </div>

    </div>

   </div>
   
   
   </>
  )
}

export default HomeENDBanner