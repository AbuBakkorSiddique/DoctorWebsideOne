import NavigationBar from "../Components/NavigationBar";
import FotterSection from "../Components/FotterSection";

function MasterLayout(props) {
  return (
    <>
      <div className="MasterLayout">
        <NavigationBar/>

        {props.children}
        <FotterSection/>

      </div>
    </>
  );
}

export default MasterLayout;
