import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
const SectionC = () => {

    const [formDataSectionC, setFormDataSectionC] = useState({

      directorTraining:"",
      directorPrinciple:"",
      directorAge:"",
      kmpTraining:"",
      kmpPrinciple:"",
      kmpAge:"",
      empTraining:"",
      empPriniciple:"",
      empAge:"",
      workerTraining:"",
      workerPrinciple:"",
      workerAge:"",

      penaltyNgrbc:"",
      penaltyName:"",
      penaltyAmount:"",
      penaltyBrief:"",
      penaltyAppeal:"",
      settleNgrbc:"",
      settleName:"",
      settleAmount:"",
      settleBrief:"",
      settleAppeal:"",
      compundNgrbc:"",
      compundName:"",
      compundAmount:"",
      compundBrief:"",
      compundAppeal:"",

      imprisonNgrbc:"",
      imprisonName:"",
      imprisonAmount:"",
      imprisonBrief:"",
      imprisonAppeal:"",
      punishNgrbc:"",
      punishName:"",
      punishAmount:"",
      punishBrief:"",
      punishAppeal:"",

      caseDetail:"",
      caseDetailName:"",
      directorsCurrentComplaint:"",
      directorsPreviousComplaint:"",
      kmpCurrentComplaint:"",
      kmpPreviousComplaint:"",

      detailsProvided:"",

      totalAwarenessProgramme:"",
      topicsCoveredINAwareness:"",
      totalPercentageValue:"",

      boardProcess:"",

      antibriberyPolicy:"",

      directorCurrentFY:"",
      directorPreviousFY:"",
      kmpPreviousFY:"",
      kmpCurrentFY:"",
      employeeCurrentFy:"",
      employeePreviousFy:"",
      workerCurrentFy:"",
      workerPreviousFy:""
    })





    
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


  return (
    <div className='p-10'>
     <Helmet>
        <title>PRINCIPLE WISE PERFORMANCE- SectionC</title>
      </Helmet>
      <form onSubmit={handleSubmit}>


            {/* OPERATIONS */}
            <h1 className="text-center mb-5 font-bold text-lg">PRINCIPLE 1 Businesses should conduct and govern themselves with integrity, and in a manner that is Ethical, Transparent and Accountable:</h1>
            <h1 className="text-center mb-5 font-bold text-lg">
              Number of locations where plants and/or operations/offices of the entity are situated:
        </h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 ">Segment</th>
                  <th className="border-violet-700 border-2">
                    Total No of training and  awareness and programme held  
                    </th>
                  <th className="border-violet-700 border-2">
                    Topics / Principles covered under the training and its impacts
                  </th>
                  <th className="border-violet-700 border-2">
                  %age of the persons in respective category  covered by the awareness programme
                  </th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                    Board of Directors

                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="directorTraining"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="directorTraining"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="directorPrinciple"
                            name="directorPrinciple"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="directorAge"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          name="directorAge"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
                <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                   Key Managerial Personnel
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="kmpTraining"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        name="kmpTraining"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="kmpPrinciple"

                            name="kmpPrinciple"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="kmpAge"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="kmpAge"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                    Employees other than BOD & KMPs
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="empTraining"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        name="empTraining"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="empPriniciple"
                            name="empPriniciple"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="empAge"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="empAge"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                    Workers
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="workerTraining"
                            name="workerTraining"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="workerPrinciple"
                            name="workerPrinciple"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="workerAge"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="workerAge"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
          </table>
        </div>
        <h1 className="text-center mb-5 font-bold text-lg">
        Details of fines / penalties /punishment/ award/ compounding fees/ settlement amount paid in proceedings (by the entity or by directors / KMPs)
        </h1>



        <div className=" flex justify-between">
        <div className="w-[50%] text-center">
        MONETARY
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
          <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">
                    NGRBC Principle
                    </th>
                  <th className="border-violet-700 border-2">
                    Name of the Regulator / enforcement /agencies
                  </th>
                  <th className="border-violet-700 border-2">
                  Amount in INR
                  </th>
                  <th className="border-violet-700 border-2">
                  Brief of the Case
                  </th>
                  <th className="border-violet-700 border-2">
                  Has and appeal before Preferred ? (Yes / No)
                  </th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                  Penalty / Fine
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="penaltyNgrbc"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="penaltyNgrbc"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="penaltyName"
                            name="penaltyName"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="penaltyAmount"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          name="penaltyAmount"
                          onChange={sectionChange}
                          required
                      />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="penaltyBrief"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="penaltyBrief"
                          onChange={sectionChange}
                          required
                      />
                  </td><td className="border-2  border-violet-700">
                    <input 
                          id="penaltyAppeal"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="penaltyAppeal"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
                <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                   SettleMent
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="settleNgrbc"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        name="settleNgrbc"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="settleName"
                            name="settleName"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="settleAmount"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="settleAmount"
                          onChange={sectionChange}
                          required
                      />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="settleBrief"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="settleBrief"
                          onChange={sectionChange}
                          required
                      />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="settleAppeal"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="settleAppeal"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                    Compunding Fees
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="compundNgrbc"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        name="compundNgrbc"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="compundName"
                            name="compundName"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="compundAmount"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="compundAmount"
                          onChange={sectionChange}
                          required
                      />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="compundBrief"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="compundBrief"
                          onChange={sectionChange}
                          required
                      />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="compundAppeal"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="compundAppeal"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              
          </table>
        </div>

        <div className="w-[50%] ml-3 text-center">
        NON-MONETARY
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">
                    NGRBC Principle
                    </th>
                  <th className="border-violet-700 border-2">
                    Name of the Regulator / enforcement /agencies
                  </th>
                  <th className="border-violet-700 border-2">
                  Amount in INR
                  </th>
                  <th className="border-violet-700 border-2">
                  Brief of the Case
                  </th>
                  <th className="border-violet-700 border-2">
                  Has and appeal before Preferred ? (Yes / No)
                  </th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                    Imprisonment
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="imprisonNgrbc"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="imprisonNgrbc"
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="imprisonName"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="imprisonName"
                          onChange={sectionChange}
                          required
                      />
                  </td><td className="border-2  border-violet-700">
                    <input 
                          id="imprisonAmount"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="imprisonAmount"
                          onChange={sectionChange}
                          required
                      />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="imprisonBrief"
                            name="imprisonBrief"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="imprisonAppeal"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          name="imprisonAppeal"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
                <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                  Punishment 
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="punishNgrbc"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        name="punishNgrbc"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="punishName"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="punishName"
                          onChange={sectionChange}
                          required
                      />
                  </td><td className="border-2  border-violet-700">
                    <input 
                          id="punishAmount"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="punishAmount"
                          onChange={sectionChange}
                          required
                      />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="punishBrief"

                            name="punishBrief"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="punishAppeal"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                          name="punishAppeal"
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr> 
          </table>
        </div>
      </div>

      <h1 className="text-center mb-5 font-bold text-lg">
      Of the instances disclosed in Question 2 above, details of the Appeal/ Revision preferred in cases where monetary or non-monetary action has been appealed.
        </h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 ">Case Details</th>
                  <th className="border-violet-700 border-2">
                    Name of the Regulatory / Enforcement /Agencies
                    </th>
                  
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                  <input  
                        id="caseDetail"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="caseDetail"
                        onChange={sectionChange}
                        required

                    />

                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="caseDetailName"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="caseDetailName"
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  
              </tr>
           
          </table>
        </div>


        <h1 className="text-center mb-5 font-bold text-lg">
        Number of Directors/KMPs/employees/workers against whom disciplinary action was taken by any law enforcement agency for the charges of bribery/ corruption
        </h1>

        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">Number and Remarks of the Current Financial Year</th>
                  <th className="border-violet-700 border-2">Number and Remarks of the Previous Financial Year</th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 text-center ">
                    Number of Complaints Received  in relation to issues of conflict of intrest of directors
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="directorsCurrentComplaint"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="directorsCurrentComplaint"
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="directorsPreviousComplaint"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="directorsPreviousComplaint"
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center w-100%">
                  Number of Complaints Received in relation to issue of conflict  of intrest in KMP
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="kmpCurrentComplaint"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="kmpCurrentComplaint"
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="kmpPreviousComplaint"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        name="kmpPreviousComplaint"
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
          </table>
        </div>

    


          <h1 className="text-center mb-5 font-bold text-lg">
          Awareness programmes conducted for value chain partners on any of the Principles during the financial year:        </h1>

        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 ">Total Number of Awareness Programme Held:</th>
                  <th className="border-violet-700 border-2">Topics / Principles covered under the training</th>
                  <th className="border-violet-700 border-2">% age of value chain partners covered</th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center ">
                  <input  
                        id="totalAwarenessProgramme"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="topicsCoveredINAwareness"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="totalPercentageValue"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              
          </table>
        </div>
        <h1 className="text-center mb-5 font-bold text-lg">
              Number of locations where plants and/or operations/offices of the entity are situated:
        </h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 ">Segment</th>
                  <th className="border-violet-700 border-2">
                  FY___ (CURRENT FINANCIAL Year)  
                    </th>
                  <th className="border-violet-700 border-2">
                  FY___ (PREVIOUS FINANCIAL Year)                  
                  </th>
                 
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                     Directors

                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="directorCurrentFY"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="directorPreviousFY"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                
              </tr>
                <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                   KMP
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="kmpCurrentFY"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="kmpPreviousFY"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                    Employees 
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="employeeCurrentFy"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                        onChange={sectionChange}
                        required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="employeePreviousFy"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                 
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                    Workers
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="workerCurrentFy"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                            id="workerPreviousFy"
                            onChange={sectionChange}
                            required

                    />
                  </td>
                 
              </tr>
          </table>
        </div>
        <div className="flex justify-between">
            <label>
            Does the entity have processes in place to avoid/ manage conflict of interests involving members of the Board?</label>
              Yes
            <input
              id="boardProcess"
              type="radio"
              value="Yes"
              name = "boardDetails"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />NO<input
              id="boardProcess"
              type="radio"
              value="No"
              name = "boardDetails"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label>Provide details of any corrective action taken or underway on issues related to fines / penalties / action taken by regulators/ law enforcement agencies/ judicial institutions, on cases of corruption and conflicts of interest :</label>
            <input
              id="detailsProvided"
              type="text"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <label>Does the entity have an anti-corruption or anti-bribery policy?</label>
            <input
              id="antibriberyPolicy"
              type="text"
              placeholder='If yes, provide details in brief and if available, provide a web-link to the policy'
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  "
              onChange={sectionChange}
              required
            />
          </div>
      </form>
      <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit and move to  principle 1
        </button>
      </div>
    </div>
  )
}

export default SectionC
