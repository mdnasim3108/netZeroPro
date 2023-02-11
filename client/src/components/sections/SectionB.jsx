import React from 'react'
import { Helmet } from 'react-helmet'
const SectionB = () => {
  return (
    <div>
    <Helmet>
        <title>MANAGEMENT AND PROCESS DISCLOSURES - Section B</title>
      </Helmet>
      <h1 className="text-center mb-5 font-bold text-lg">
      Aimed at helping businesses demonstrate the structures, policies and processes put in place towards adopting the NGRBC Principles and Core Elements. 
      </h1>
      <label>Whether your entity’s policy/policies : </label>
      <input type="radio" name="policy" id="policy1" /> Yes
      <input type="radio" name="policy" id="policy1" /> No  
    </div>
  )
}

export default SectionB
