import MasterLayout from "../MasterLayout/MasterLayout";


//components 
import BenifitDivOne from '../Components/BenifitDIvOne'
import BenifitTitle from "../Components/BenifitTitle";
import BenifitDivTwo from "../Components/BenifitDivTwo";
import BenifitDivThree from "../Components/BenifitDivThree";
import BenifitDivFOur from "../Components/BenifitDivFOur";
import BenifitDivFIve from "../Components/BenifitDivFIve";
import BenifitDIvSix from "../Components/BenifitDIvSix";
import BenifitDivSeven from "../Components/BenifitDivSeven";


function BenifitPage() {
  return (
    <>
      <div>
        <MasterLayout>
            <BenifitDivOne/>
            <BenifitTitle/>
            <BenifitDivTwo/>
            <BenifitDivThree/>
            <BenifitDivFOur/>  
            <BenifitDivFIve/>
            <BenifitDIvSix/>
            <BenifitDivSeven/>





        </MasterLayout>
      </div>
    </>
  );
}

export default BenifitPage;
