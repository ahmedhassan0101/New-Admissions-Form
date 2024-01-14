import { useContext } from "react";
import NavBar from "./components/UI/NavBar";
import Progressivedata from "./components/UI/Progressivedata";
import FormsCollections from "./components/FormsCollections";
import SuccessPopup from "./components/UI/SuccessPopup"
import FormContext from "./utils/form-context";
import Footer from "./components/UI/Footer";


const App = () => {
  const { isPopupVisible } = useContext(FormContext);
  return (

    
    <div className="container mx-auto">
      <NavBar />
      {!isPopupVisible && (
        <>
          <Progressivedata />
          <FormsCollections />
        </>
      )}
      {isPopupVisible && <SuccessPopup />}
      <Footer/>
    </div>
  );
};

export default App;
