

//small compontnts 
import HomeHeroSection from "../Components/HomeHeroSection";
import HomeFeaturesSection from "../Components/HomeFeaturesSection";
import HomeServicesSection from "../Components/HomeServicesSection";
import HomeENDBanner from "../Components/HomeENDBanner";
import HomeSpace from "../Components/HomeSpace";

import "../Css/HomePage.css";

//components
import MasterLayout from "../MasterLayout/MasterLayout";

function HomePage() {
  return (
    <>
      <div className="HomePage">
        <MasterLayout>
           <HomeHeroSection/> 
           <HomeFeaturesSection/>
           <HomeServicesSection/>
           <HomeENDBanner/>
           <HomeSpace/>
        </MasterLayout>
      </div>
    </>
  );
}

export default HomePage;
