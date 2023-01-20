import { Fragment } from "react";
import PricingCard from "./PricingCard";
const PricingTable = () => {
  return (
    <Fragment>
      <div className="PricingContainer py-[1.5rem] px-[9rem] bg-[#e5ebeb] h-[100vh]">
        <div className=" w-[24rem] mx-auto">
          <h1 className="font-bold text-5xl tracking-tighter">
            Convinient Pricing
          </h1>
          <p className="text-gray-400 mt-5 text-lg tracking-wider text-center">
            Choose the right pricing and get started with your project
          </p>
        </div>
        <div className="flex mt-[3rem] justify-between">
        <PricingCard planType="Basic Plan" priceAmount="$10"/>
        <PricingCard planType="Business Plan" priceAmount="$50"/>
        <PricingCard planType="Enterprise Plan" priceAmount="$100"/>
        </div>
      </div>
    </Fragment>
  );
};
export default PricingTable;
