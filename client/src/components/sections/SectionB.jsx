import React,{useState} from 'react'
import { useNavigate } from 'react-router'
import { Helmet } from 'react-helmet'
const SectionB = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    entityPolicy:"",
    policyApproved:"",
    webLink:"",
    entityTranslated:"",
    enlistedPolicy:"",
    
    nationalCodes:"",

    specificCommitments:"",

    performanceEntity:"",

    statementByDirectors:"",

    detailsOfHighestAuthority:"",

    specifiedCommittee:"",

    entityIndependentAssessment:"",
    considerPrincipleMaterial:"",
    formulatePolicies:"",
    resourceAvailableForTask:"",
    plannedFinancialYear:"",




    reviewPerformanceP1:"",
    reviewPerformanceP2:"",
    reviewPerformanceP3:"",
    reviewPerformanceP4:"",
    reviewPerformanceP5:"",
    reviewPerformanceP6:"",
    reviewPerformanceP7:"",
    reviewPerformanceP8:"",
    reviewPerformanceP9:"",

    reviewComplianceP1:"",
    reviewComplianceP2:"",
    reviewComplianceP3:"",
    reviewComplianceP4:"",
    reviewComplianceP5:"",
    reviewComplianceP6:"",
    reviewComplianceP7:"",
    reviewComplianceP8:"",
    reviewComplianceP9:"",
  
    frequencyPerformanceP1:"",
    frequencyPerformanceP2:"",
    frequencyPerformanceP3:"",
    frequencyPerformanceP4:"",
    frequencyPerformanceP5:"",
    frequencyPerformanceP6:"",
    frequencyPerformanceP7:"",
    frequencyPerformanceP8:"",
    frequencyPerformanceP9:"",

    frequencyComplianceP1:"",
    frequencyComplianceP2:"",
    frequencyComplianceP3:"",
    frequencyComplianceP4:"",
    frequencyComplianceP5:"",
    frequencyComplianceP6:"",
    frequencyComplianceP7:"",
    frequencyComplianceP8:"",
    frequencyComplianceP9:"",
  
  })



  const handleSubmit = () =>{
    console.log("Scetion C Form submitted");
    navigate('/sectionC/principle1')
  }
  const sectionChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));

  };
  console.log(formData)
  return (
    <div className='p-10'>
    <Helmet>
        <title>MANAGEMENT AND PROCESS DISCLOSURES - Section B</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
      <h1 className="text-center mb-5 font-bold text-lg">This section is aimed at helping businesses demonstrate the structures, policies and processes put in place towards adopting the NGRBC Principles and Core Elements. (Disclosure  Questions)</h1>
      
      <div className="flex justify-between">
            <label>Name of the national and international codes/certifications/labels/ standards.</label>
            <input
                    id="nationalCodes"
                    type="text"
                    placeholder='(e.g. SA 8000, OHSAS, ISO, BIS)'
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>

        <div className="flex justify-between">
            <label>Specific commitments, goals and targets set by the entity with defined timelines, if any.</label>
            <input
                    id="specificCommitments"
                    type="text"
                    placeholder='Goals and Targets with a deadline'
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>


          <div className="flex justify-between">
            <label>Performance of the entity against the  specific commitments, goals and targets along-with reasons in case the same are not met</label>
            <input
                    id="performanceEntity"
                    type="text"
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>

          <div className="flex justify-between">
            <label>Statement by director responsible for the business responsibility report, highlighting ESG related challenges, targets and achievements (listed entity has flexibility regarding the placement of this disclosure)</label>
            <input
                    id="statementByDirectors"
                    type="text"
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>

        <div className="flex justify-between">
            <label>Details of the highest authority responsible for implementation and oversight of the Business Responsibility policy (ies)</label>
            <input
                    id="detailsOfHighestAuthority"
                    type="text"      
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>
      

        <div className="flex justify-between">
            <label>  Does the entity have a specified Committee of the Board/ Director responsible for decision making on sustainability related issues? </label>
            <input
                    id="specifiedCommittee"
                    type="text"
                    placeholder='(Yes / No , If Yes provide details)'
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>


        <div className="flex justify-between">
            <label> Has the entity carried out independent assessment/ evaluation of the working of its policies by an external agency? </label>
            <input
                    id="entityIndependentAssessment"
                    type="text"
                    placeholder='(Yes / No , If Yes provide name)'
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>
        <div className="flex justify-between">
            <label>Whether your entity’s policy/policies cover each principle and its core elements of the NGRBCs.</label>
              Yes
            <input
              id="entityPolicy"
              name='entityPolicy'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="entityPolicy"
              name='entityPolicy'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <div className="flex justify-between">
            <label>Has the policy been approved the Board?</label>
              Yes
            <input
              id="policyApproved"
              name='policyApproved'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="policyApproved"
              name='policyApproved'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <div className="flex justify-between">
            <label>Web Link of the Policies, if available</label>
              Yes
            <input
              id="webLink"
              name='webLink'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="webLink"
              name='webLink'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <div className="flex justify-between">
            <label>Do the enlisted policies extend to your value chain partners?  </label>
              Yes
            <input
              id="enlistedPolicy"
              name='enlistedPolicy'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="enlistedPolicy"
              name='enlistedPolicy'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <div className="flex justify-between">
            <label>Whether the entity has translated </label>
              Yes
            <input
              id="entityTranslated"
              name='entityTranslated'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="entityTranslated"
              name='entityTranslated'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
        <div className="flex justify-between">
            <label>The entity does not consider the Principles material to its business </label>
              Yes
            <input
              id="considerPrincipleMaterial"
              name='considerPrincipleMaterial'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="considerPrincipleMaterial"
              name='considerPrincipleMaterial'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <div className="flex justify-between">
            <label>The entity is not at a stage where it is in a position to formulate and implement the policies on specified principles </label>
              Yes
            <input
              id="formulatePolicies"
              name='formulatePolicies'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="formulatePolicies"
              name='formulatePolicies'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <div className="flex justify-between">
            <label>The entity does not have the financial or/human and technical resources available for the task.</label>
              Yes
            <input
              id="resourceAvailableForTask"
              name='resourceAvailableForTask'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="resourceAvailableForTask"
              name='resourceAvailableForTask'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <div className="flex justify-between">
            <label>It is planned to be done in the next financial year </label>
              Yes
            <input
              id="plannedFinancialYear"
              name='plannedFinancialYear'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="plannedFinancialYear"
              name='plannedFinancialYear'
              type="radio"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
      </div>
      <h1 className="text-center mb-5 font-bold text-lg">Details of Review of NGRBCs by the Company:</h1>
      <h1 className="text-center mb-5 font-bold ">Indicate Wheather Review Was Undertaken By Director / Committee Of Board</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 ">Subjects For Review</th>
                  <th className="border-violet-700 border-2">P1</th>
                  <th className="border-violet-700 border-2">P2</th>
                  <th className="border-violet-700 border-2">P3</th>
                  <th className="border-violet-700 border-2">P4</th>
                  <th className="border-violet-700 border-2">P5</th>
                  <th className="border-violet-700 border-2">P6</th>
                  <th className="border-violet-700 border-2">P7</th>
                  <th className="border-violet-700 border-2">P8</th>
                  <th className="border-violet-700 border-2">P9</th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 text-center">
                    Performance against above policies and follow up actions
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reviewPerformanceP1"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP2"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP3"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP4"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP5"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP6"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP7"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP8"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewPerformanceP9"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                
              </tr>
                <tr>
                  <td className="border-2  border-violet-700  text-center">
                   Compliance  with statutory requirements of relevenceto the principle and  rectifications of any  non-compliance
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reviewComplianceP1"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP2"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP3"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP4"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP5"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP6"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP7"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP8"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="reviewComplianceP9"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                
              </tr>
              
               
          </table>
        </div>
        <h1 className="text-center mb-5 font-bold ">Frequency (Annually / Half-Yearly / Quartely / Any other please specify)</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 ">Subjects For Review</th>
                  <th className="border-violet-700 border-2">P1</th>
                  <th className="border-violet-700 border-2">P2</th>
                  <th className="border-violet-700 border-2">P3</th>
                  <th className="border-violet-700 border-2">P4</th>
                  <th className="border-violet-700 border-2">P5</th>
                  <th className="border-violet-700 border-2">P6</th>
                  <th className="border-violet-700 border-2">P7</th>
                  <th className="border-violet-700 border-2">P8</th>
                  <th className="border-violet-700 border-2">P9</th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 text-center">
                    Performance against above policies and follow up actions
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="frequencyPerformanceP1"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP2"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP3"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP4"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP5"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP6"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP7"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP8"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyPerformanceP9"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                
              </tr>
                <tr>
                  <td className="border-2  border-violet-700  text-center">
                   Compliance  with statutory requirements of relevenceto the principle and  rectifications of any  non-compliance
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="frequencyComplianceP1"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP2"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP3"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP4"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP5"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP6"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP7"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP8"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="frequencyComplianceP9"
                            onChange={sectionChange}
                            required
                    />
                  </td>
              </tr>
          </table>
        </div>




      <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit and move to Section C
        </button>
      </div>
      </form>

    </div>
  )
}

export default SectionB
