import MasterLayout from "../MasterLayout/MasterLayout";


// components 
import ServiceDivOne from "../Components/ServiceDivOne";
import ServicesTitle from "../Components/ServicesTitle";
import ServicesDivTwo from "../Components/ServicesDivTwo";
import ServicesDIvThree from "../Components/ServicesDIvThree";
import ServiceDIvFour  from "../Components/ServiceDIvFour";
import ServiceDivSix from "../Components/ServiceDivSix";
function ServicesPage() {
  return (
    <>
      <div>
        <MasterLayout>
            <ServiceDivOne/>
            <ServicesTitle/>
            <ServicesDivTwo/>
            <ServicesDIvThree/>
            <ServiceDIvFour/>
            <ServiceDivSix/>
        </MasterLayout>
      </div>
    </>
  );
}

export default ServicesPage;
