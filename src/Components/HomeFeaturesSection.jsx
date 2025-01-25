
//images 
import HomeFeatuerONe from '../Images/HomeFeatureOne.png'
import HOmeFretureTwo from '../Images/HomeFeatureTwo.png'
import HOmeFeatuerTHree from '../Images/HomeFeatureThree.png'
import HOmeFeatureFOur from '../Images/HomeFeatureFour.png'
import HomeFeatuerFIve from '../Images/HOmeFeatureFive.png'
import HomeFeatuerSIx from '../Images/HOmeFeatureSix.png'




import '../Css/HomeFeaturesSection.css' ; 

function HomeFeaturesSection() {
  return (
<>

<div className="HomeFeaturesSection container">

<div className='HomeFeaturesSection_left ' data-aos="zoom-in-right">
<div className='text-sky-700'>
<h1> Know Our Clients </h1>
</div>
<div className='HomeFeaturesSection_left_p'>
<p>As a trusted authority in medical billing, catering to</p>
<p> a diverse spectrum of organizations, our industry- </p>
<p> standing reputation is a testament to our reliability</p>
<p> and expertise. Our tailored services cater to the </p>
<p> unique billing needs of various entities, ensuring </p>
<p> seamless operations and financial transparency.</p>
</div>

<div>
<button type='button' className='text-white bg-green-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'> Leave a Message</button>


</div>

</div>
<div className='HomeFeaturesSection_right' data-aos="zoom-in-left">

<div className='HomeFeaturesSection_right_one'>
    <div>
        <img src={HomeFeatuerONe} alt="HomeFeatuerONe" />
    </div>
    <div>
        <img src={HOmeFretureTwo} alt="HOmeFretureTwo" />
    </div>
    <div>
        <img src={HOmeFeatuerTHree} alt="HOmeFeatuerTHree" />
    </div>
</div>
<div className='HomeFeaturesSection_right_two'>
    <div>
        <img src={HOmeFeatureFOur} alt="HOmeFeatureFOur" />
    </div>
    <div>
        <img src={HomeFeatuerFIve} alt="HomeFeatuerFIve" />
    </div>
    <div>
        <img src={HomeFeatuerSIx} alt="HomeFeatuerSIx" />
    </div>
</div>



</div>



</div>

</>
  )
}

export default HomeFeaturesSection