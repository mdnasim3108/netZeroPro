import React,{useState} from 'react'
import { Helmet } from 'react-helmet'


const Part8 = () => {

    const [table, setTable] = useState([1,2]);

    const [formDataSectionC, setFormDataSectionC] = useState({
   
      describeMechanisms:"",

      preferentialProcurement:"",
      marginalizedGroup:"",
      totalProcurement:"",

      previousCapex:"",
      currentCapex:"",
      previousRD:"",
      currentRD:"",



    })

    const addRowHandler = () => {
        setTable((prev) => [...prev, prev[prev.length - 1] + 1]);
      };
      const removeRowHandler = () => {
        setTable((prev) => {
          if (prev.length === 1) return prev;
          const updatedTable = [...prev];
          updatedTable.pop();
          return updatedTable;
        });
      };
      const handleSubmit = () =>{
        console.log("Scetion C Form submitted");
      }
      const sectionChange = (e) => {
        setFormDataSectionC((previousState) => ({
          ...previousState,
          [e.target.id]: e.target.value,
        }));
    
      };
      console.log(formDataSectionC);

      const socialImpactAssessment = table.map((el) => {
        return (
          <tr>
            <td className="border-2  border-violet-700  text-center">
              <input
                  id={`nameOfProject_${el}`}
                  className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                  onChange={sectionChange}
                  required
                />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`SINnumber_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700  text-center">
            <input
                id={`dateOfNotification_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700  text-center">
              <input
                  id={`conductedByExternal_${el}`}
                  className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                  onChange={sectionChange}
                  required
                />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`communicatedResult_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700  text-center">
            <input
                id={`relevantWebLink_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
          
          </tr>
        );
      });


      const onGoingRR = table.map((el) => {
        return (
          <tr>
          <td  className="border-2  border-violet-700  text-center">{el}</td>
            <td className="border-2  border-violet-700  text-center">
              <input
                  id={`rrProjectName_${el}`}
                  className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                  onChange={sectionChange}
                  required
                />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`state_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700  text-center">
            <input
                id={`district_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700  text-center">
              <input
                  id={`noOfPAF_${el}`}
                  className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                  onChange={sectionChange}
                  required
                />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`percentOfPAF_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700  text-center">
            <input
                id={`amountPaidToPAF_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
          
          </tr>
        );
      });


      const actionTaken = table.map((el) => {
        return (
          <tr>
            <td className="border-2  border-violet-700  text-center">
              <input
                  id={`negativeSocialImpact_${el}`}
                  className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                  onChange={sectionChange}
                  required
                />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`correctiveActionTaken_${el}`}
                onChange={sectionChange}
                required
              />
            </td>

          </tr>
        );
      });

      const csrProject = table.map((el) => {
        return (
          <tr>
          <td className="border-2  border-violet-700  text-center">
              {el}
            </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`state_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`aspirationalDetails_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`amountSpent_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
          </tr>
        );
      });

      const benefitsDerived = table.map((el) => {
        return (
          <tr>
          <td className="border-2  border-violet-700  text-center">
              {el}
            </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`intellectualProperty_${el}`}
                onChange={sectionChange}
                required
              />
              </td>
              <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`ownedOrAcquired_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`benefitShared_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`calculateBenefitShare_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
          </tr>
        );
      });

      const correctiveActionTaken = table.map((el) => {
        return (
          <tr>
          
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`nameOfAuthority_${el}`}
                onChange={sectionChange}
                required
              />
              </td>
              <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`briefOfCase_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`correctiveActionTaken_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
          
          </tr>
        );
      });

      const beneficiaryCSR = table.map((el) => {
        return (
          <tr>
          <td className="border-2  border-violet-700">
              {el}
              </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`csrProject_${el}`}
                onChange={sectionChange}
                required
              />
              </td>
              <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`personBenefitted_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`percentageOfBeneficiaries_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
          
          </tr>
        );
      });

  return (
    <div className='p-10'>
    <Helmet>
        <title>PRINCIPLE WISE PERFORMANCE- SectionC</title>
    </Helmet>
    <form onSubmit={handleSubmit}>

      <h1 className="text-center mb-5 font-bold text-lg">PRINCIPLE 8 Businesses should promote inclusive growth and equitable development</h1>
      <h1 className="text-center mb-5 font-bold text-lg">Details of Social Impact Assessments (SIA) of projects undertaken by the entity based on applicable laws, in the current financial year.</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Name and brief details of Project</th>
                <th className="border-violet-700 border-2">SIA Notification No</th>
                <th className="border-violet-700 border-2">Date of Notification</th>
                <th className="border-violet-700 border-2">Wheather Conducted By independent External Agency (Yes/No)</th>
                <th className="border-violet-700 border-2">Results communicated in public domain (Yes/No) </th>
                <th className="border-violet-700 border-2">Relevant Web Link</th>
              </tr>
            </thead>
            <tbody id="tb">{socialImpactAssessment}</tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5 "
            onClick={addRowHandler}
            type="button"
          >
            Add
          </button>
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5"
            onClick={removeRowHandler}
            type="button"
          >
            Remove
          </button>

      </div>


      <h1 className="text-center mb-5 font-bold text-lg">Provide information on project(s) for which ongoing Rehabilitation and Resettlement (R&R) is being undertaken by your entity, in the following format</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">S.NO</th>
                <th className="border-violet-700 border-2">Name of the project for which R&R is Ongoing</th>
                <th className="border-violet-700 border-2">State</th>
                <th className="border-violet-700 border-2">District</th>
                <th className="border-violet-700 border-2">No of Projects Affected Families (PAFs) </th>
                <th className="border-violet-700 border-2">% of PAFs covered by R&R</th>
                <th className="border-violet-700 border-2">Amount Paid to PAFs in the FY </th>
              </tr>
            </thead>
            <tbody id="tb">{onGoingRR}</tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5 "
            onClick={addRowHandler}
            type="button"
          >
            Add
          </button>
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5"
            onClick={removeRowHandler}
            type="button"
          >
            Remove
          </button>

      </div>
      <h1 className="text-center mb-5 font-bold text-lg">Percentage of R&D and capital expenditure (capex) investments in specific technologies  to improve the environmental and social impacts of product and processes to total R&D and capex investments made by the entity, respectively:</h1>
    <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">
                    Current Financial Year  
                    </th>
                  <th className="border-violet-700 border-2">
                    Previous Financial Year
                  </th>
                 
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 text-center">
                  Directly Sourced From MSMEs small Product
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="currentRD"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="previousRD"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                 
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                        Sourced Directly from within the district and neighbouring districts            
                </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="currentCapex"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="previousCapex"
                            onChange={sectionChange}
                            required
                    />
                  </td>
              </tr>
              </table>
    </div>


    <h1 className="text-center mb-5 font-bold text-lg">Provide details of actions taken to mitigate any negative social impacts identified in the Social Impact Assessments (Reference: Question D130 of Essential Indicators above):</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Details of  negative Social Impacts </th>
                <th className="border-violet-700 border-2">Corrective Action Taken</th>
              </tr>
            </thead>
            <tbody id="tb">{actionTaken}</tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5 "
            onClick={addRowHandler}
            type="button"
          >
            Add
          </button>
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5"
            onClick={removeRowHandler}
            type="button"
          >
            Remove
          </button>

      </div> 


      <h1 className="text-center mb-5 font-bold text-lg">Provide the following information on CSR projects undertaken by your entity in designated aspirational districts as identified by government bodies:</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
              <th className="border-violet-700 border-2">S.NO</th>
              <th className="border-violet-700 border-2">State</th>
                <th className="border-violet-700 border-2 ">Aspirational Details</th>
                <th className="border-violet-700 border-2">Amount Spent (IN INR)</th>
              </tr>
            </thead>
            <tbody id="tb">{csrProject}</tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5 "
            onClick={addRowHandler}
            type="button"
          >
            Add
          </button>
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5"
            onClick={removeRowHandler}
            type="button"
          >
            Remove
          </button>

      </div> 



      <h1 className="text-center mb-5 font-bold text-lg">Details of the benefits derived and shared from the intellectual properties owned or acquired by your entity (in the current financial year), based on traditional knowledge:</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
              <th className="border-violet-700 border-2">S.NO</th>
              <th className="border-violet-700 border-2">Intellectual Property Based On Traditional Knowledge</th>
                <th className="border-violet-700 border-2 ">Owned / Acquired (Yes / No)</th>
                <th className="border-violet-700 border-2">Benefits Shared (Yes / No)</th>
                <th className="border-violet-700 border-2">Basis of Calculating benefit share</th>
              </tr>
            </thead>
            <tbody id="tb">{benefitsDerived}</tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5 "
            onClick={addRowHandler}
            type="button"
          >
            Add
          </button>
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5"
            onClick={removeRowHandler}
            type="button"
          >
            Remove
          </button>

      </div> 


      <h1 className="text-center mb-5 font-bold text-lg">Details of corrective actions taken or underway, based on any adverse order in intellectual property related disputes wherein usage of traditional knowledge is involved</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Name Of Authority </th>
                <th className="border-violet-700 border-2">Brief Of Case</th>
                <th className="border-violet-700 border-2">Corrective Action Taken </th>
              </tr>
            </thead>
            <tbody id="tb">{correctiveActionTaken}</tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5 "
            onClick={addRowHandler}
            type="button"
          >
            Add
          </button>
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5"
            onClick={removeRowHandler}
            type="button"
          >
            Remove
          </button>
      </div> 
      <h1 className="text-center mb-5 font-bold text-lg">Details of beneficiaries of CSR Projects:</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
              <th className="border-violet-700 border-2 ">S.NO </th>
                <th className="border-violet-700 border-2 ">CSR Project</th>
                <th className="border-violet-700 border-2">Number of Persons benefitted from CSR</th>
                <th className="border-violet-700 border-2">% of beneficiaries from vulnerable and marginalized groups </th>
              </tr>
            </thead>
            <tbody id="tb">{beneficiaryCSR}</tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5 "
            onClick={addRowHandler}
            type="button"
          >
            Add
          </button>
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5"
            onClick={removeRowHandler}
            type="button"
          >
            Remove
          </button>

      </div> 



      <div className="flex justify-between">
        <label>Describe the mechanisms to receive and redress grievances of the community</label>
        <input
                id="describeMechanisms"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
                />
    </div>
    <div className="flex justify-between">
            <label>
            Do you have a preferential procurement policy where you give preference to purchase from suppliers comprising marginalized /vulnerable groups? </label>
              Yes
            <input
              id="preferentialProcurement"
              type="radio"
              value="Yes"
              name = "preferentialProcurement"
              onChange={sectionChange}
              required
            />NO<input
              id="preferentialProcurement"
              type="radio"
              value="No"
              name = "preferentialProcurement"
              onChange={sectionChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label>
            From which marginalized /vulnerable groups do you procure? </label>
              Yes
            <input
              id="marginalizedGroup"
              type="radio"
              value="Yes"
              name = "marginalizedGroup"
              onChange={sectionChange}
              required
            />NO<input
              id="marginalizedGroup"
              type="radio"
              value="No"
              name = "marginalizedGroup"
              onChange={sectionChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label>
            What percentage of total procurement (by value) does it constitute? </label>
              Yes
            <input
              id="totalProcurement"
              type="radio"
              value="Yes"
              name = "totalProcurement"
              onChange={sectionChange}
              required
            />NO<input
              id="totalProcurement"
              type="radio"
              value="No"
              name = "totalProcurement"
              onChange={sectionChange}
              required
            />
          </div>

    </form>
    </div>
  )
}

export default Part8
