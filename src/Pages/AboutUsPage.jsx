import MasterLayout from "../MasterLayout/MasterLayout";
//components 
import AboutHeroSection from "../Components/AboutHeroSection";
import AboutFeatureSection from "../Components/AboutFeatureSection";
import AboutPageTitle from "../Components/AboutPageTitle";
import AboutPageLastDiv from "../Components/AboutPageLastDiv";

function AboutUsPage() {
  return (
    <>
      <div>
        <MasterLayout>
            <AboutHeroSection/>
            <AboutFeatureSection/>
            <AboutPageTitle/>
            <AboutPageLastDiv/>
        </MasterLayout>
      </div>
    </>
  );
}

export default AboutUsPage;
