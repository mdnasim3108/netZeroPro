import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PricingCard.css"
const PricingCard = (props) => {
  return (
      <div class="max-w-sm rounded overflow-hidden shadow-xl pt-3 bg-white px-5 hover:bg-black" id="pricingCard">
        <div class="px-6 py-4">
          <h1 class="font-bold text-5xl mb-5 text-center textWhite">{props.priceAmount}/mth</h1>
          <p class=" text-xl text-center textWhite">{props.planType}</p>
          <p class="text-gray-500 text-lg text-center font-bold textWhite"> 
            Billed Anually
          </p>
          <p className="text-gray-400 mt-4 text-[1rem] font-[600] textWhite">
            The perfect way to get started and get used to our tools
          </p>
        </div>
        <div className="w-[85%] bg-gray-300 h-[0.5px] mx-auto mb-4"></div>
        <div className="px-[1.3rem]">
          <div className="mb-5">
            <FontAwesomeIcon icon={faCheck} className="text-green-500" />
            <p className="inline font-bold text-gray-700 text-[1.1rem] ml-5 textWhite">
              All features in standard
            </p>
          </div>
          <div className="mb-5">
            <FontAwesomeIcon icon={faCheck} className="text-green-500" />
            <p className="inline font-bold text-gray-700 text-[1.1rem] ml-5 textWhite">
              Over 600 components
            </p>
          </div>
          <div className="mb-5">
            <FontAwesomeIcon icon={faCheck} className="text-green-500" />
            <p className="inline font-bold text-gray-700 text-[1.1rem] ml-5 textWhite">
              Build tools and components
            </p>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded w-full mb-10 text-lg">
            Get Started
          </button>
        </div>
      </div>
  );
};
export default PricingCard
