import { useContext, useState } from "react";
import NavBar from "./components/UI/NavBar";
import Progressivedata from "./components/UI/Progressivedata";
import FormsCollections from "./components/FormsCollections";
import SuccessPopup from "./components/UI/SuccessPopup";
import FormContext from "./utils/form-context";
import SideLogo from "./components/UI/SideLogo";
import Footer from "./components/UI/Footer";
const App = () => {
  const { isPopupVisible } = useContext(FormContext);

  return (
    <div className="overflow-auto backdrop-blur-sm ">
      <NavBar />

      <div className="flex flex-col lg:flex-row h-[calc(100vh-121px)] ">
        <div className="p-4-800 lg:w-1/3 lg:h-full">
          <SideLogo />
        </div>

        <div className="px-4 overflow-y-auto lg:w-2/3 scrollbar-hidden ">
          {!isPopupVisible && (
            <div className="w-full">
              <Progressivedata />

              <div className="w-full  max-lg:h-auto max-lg:mb-5">
                <div className="w-full">
                  <FormsCollections />
                </div>
              </div>
            </div>
          )}
          {isPopupVisible && <SuccessPopup />}
        </div>

        {/* <div className="relative w-full h-64 overflow-hidden">


        
          <div
            className="flex transition-transform duration-300 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >


          
            <div className="flex-shrink-0 w-full p-4 bg-blue-500">
              <p>Content 1</p>
              <button
                onClick={handleNext}
                className="px-4 py-2 mt-2 text-blue-500 bg-white"
              >
                Next
              </button>
            </div>

            <div className="flex-shrink-0 w-full p-4 bg-green-500">
              <p>Content 2</p>
              <button
                onClick={handleNext}
                className="px-4 py-2 mt-2 text-green-500 bg-white"
              >
                Next
              </button>
            </div>

            <div className="flex-shrink-0 w-full p-4 bg-yellow-500">
              <p>Content 3</p>
              <button
                onClick={handleNext}
                className="px-4 py-2 mt-2 text-yellow-500 bg-white"
              >
                Next
              </button>
            </div>

            <div className="flex-shrink-0 w-full p-4 bg-red-500">
              <p>Content 4</p>
              <button
                onClick={handleNext}
                className="px-4 py-2 mt-2 text-red-500 bg-white"
              >
                Next
              </button>
            </div>
          </div>

          
        </div> */}
      </div>

      <Footer />
    </div>
  );
};
//   bg-opacity-75 rounded shadow-lg bg-stone-300 h-[calc(100%-90px)]
export default App;
