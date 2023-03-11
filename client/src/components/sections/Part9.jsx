import React,{useState} from 'react'
import { Helmet } from 'react-helmet'


const Part9 = () => {
  

    const [formDataSectionC, setFormDataSectionC] = useState({
        consumerComplaintsAndFeedback:"",
        correctiveActions:"",
        percentageOfData:"",
        noOfInstances:"",
        mechanismsInPlace:"",
        productInformation:"",
        educateConsumers:"",
        informationOnProductServices:"",
        policyOnCyberSecurity:"",
        environmentalProduct:"",
        safeAndResponsibleUsage:"",
        recyclingSafeDisposal:"",
        voluntaryNumber:"",
        voluntaryRecall:"",
        forcedNumber:"",
        forcedRecall:"",


        dataPrivacyRemarksPreviousYear:"",
        dataPrivacyPendingPreviousYear:"",
        dataPrivacyReceivedPreviousYear:"",
        dataPrivacyRemarksCurrentYear:"",
        dataPrivacyPendingCurrentYear:"",
        dataPrivacyReceivedCurrentYear:"",

        advertisingRemarksPreviousYear:"",
        advertisingPendingPreviousYear:"",
        advertisingReceivedPreviousYear:"",
        advertisingRemarksCurrentYear:"",
        advertisingPendingCurrentYear:"",
        advertisingReceivedCurrentYear:"",

        cyberSecurityRemarksPreviousYear:"",
        cyberSecurityPendingPreviousYear:"",
        cyberSecurityReceivedPreviousYear:"",
        cyberSecurityRemarksCurrentYear:"",
        cyberSecurityPendingCurrentYear:"",
        cyberSecurityReceivedCurrentYear:"",

        essentialServiceRemarksPreviousYear:"",
        essentialServicePendingPreviousYear:"",
        essentialServiceReceivedPreviousYear:"",
        essentialServiceRemarksCurrentYear:"",
        essentialServicePendingCurrentYear:"",
        essentialServiceReceivedCurrentYear:"",

        
        tradePracticesRemarksPreviousYear:"",
        tradePracticesPendingPreviousYear:"",
        tradePracticesReceivedPreviousYear:"",
        tradePracticesRemarksCurrentYear:"",
        tradePracticesPendingCurrentYear:"",
        tradePracticesReceivedCurrentYear:"",

        unfairTradePracticesRemarksPreviousYear:"",
        unfairTradePracticesPendingPreviousYear:"",
        unfairTradePracticesReceivedPreviousYear:"",
        unfairTradePracticesRemarksCurrentYear:"",
        unfairTradePracticesPendingCurrentYear:"",
        unfairTradePracticesReceivedCurrentYear:"",

        otherRemarksPreviousYear:"",
        otherPendingPreviousYear:"",
        otherReceivedPreviousYear:"",
        otherRemarksCurrentYear:"",
        otherPendingCurrentYear:"",
        otherReceivedCurrentYear:"",

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
      console.log(formDataSectionC)
  return (
    <div className='p-10'>
    <Helmet>
        <title>PRINCIPLE WISE PERFORMANCE- SectionC</title>
    </Helmet>
    <form onSubmit={handleSubmit}>

    <h1 className="text-center mb-5 font-bold text-lg">PRINCIPLE 9 Businesses should engage with and provide value to their consumers in a responsible manner</h1>

    <div className="flex justify-between">
        <label>Describe the mechanisms in place to receive and respond to consumer complaints and feedback</label>
        <input
                id="consumerComplaintsAndFeedback"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
    </div>
    <div className="flex justify-between">
        <label>Provide details of any corrective actions taken or underway on issues relating to advertising, and delivery of essential services; cyber security and data privacy of customers; re-occurrence of instances of product recalls; penalty / action taken by regulatory authorities on safety of products / services.</label>
        <input
                id="correctiveActions"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
    </div>
    <div className="flex justify-between">
        <label>Does the entity have a framework/ policy on cyber security and risks related to data privacy?</label>
        <input
                id="policyOnCyberSecurity"
                type="text"
                placeholder=' (Yes/No) If available, provide a web-link of the policy'
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
    </div>
    <div className="flex justify-between">
        <label>Channels / platforms where information on products and services of the entity can be accessed (provide web link, if available)</label>
        <input
                id="informationOnProductServices"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
    </div>
    <div className="flex justify-between">
        <label>Steps taken to inform and educate consumers about safe and responsible usage of products and/or services</label>
        <input
                id="educateConsumers"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
    </div>
    <div className="flex justify-between">
        <label>Mechanisms in place to inform consumers of any risk of disruption/discontinuation of essential services</label>
        <input
                id="mechanismsInPlace"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
    </div>
    <div className="flex justify-between">
        <label>Does the entity display product information on the product over and above what is mandated as per local laws?</label>
        <input
                id="productInformation"
                type="text"
                placeholder='(Yes/No/Not Applicable) If yes, provide details in brief. Did your entity carry out any survey with regard to consumer satisfaction relating to the '
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
    </div>
    Provide the following information relating to data breaches:
    <div className="flex justify-between">
    
        <label>a. Number of instances of data breaches along-with impact</label>
        <input
                id="noOfInstances"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
         </div>
         <div className="flex justify-between">
        <label>b. Percentage of data breaches involving personally identifiable information of customers</label>
        <input
                id="percentageOfData"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
        />
   </div>

   <h1 className="text-center mb-5 font-bold text-lg">Turnover of products and/ services as a percentage of turnover from all products/service that carry information about:</h1>
    <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">
                    As a Percentage to Total Turnover
                    </th>
                  
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                 Environmental and Social Parameters relevent to Product
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="environmentalProduct"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                 
              </tr>
              <tr>
                  <td className="border-2  border-violet-700   text-center">
                        Safe and responsible usage                 
                </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="safeAndResponsibleUsage"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700   text-center">
                        Recycling and/or Safe disposal            
                </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="recyclingSafeDisposal"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              </table>
    </div>
 <h1 className="text-center mb-5 font-bold text-lg">Turnover of products and/ services as a percentage of turnover from all products/service that carry information about:</h1>
    <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">Number</th>
                  <th className="border-violet-700 border-2">Reasons for Recall</th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                Voluntary recalls
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="voluntaryNumber"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="voluntaryRecall"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
             
              <tr>
                  <td className="border-2  border-violet-700   text-center">
                        Forced recalls          
                </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="forcedNumber"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="forcedRecall"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              </table>
    </div>
    <h1 className="text-center mb-5 font-bold text-lg">Number of consumer complaints in respect of the following</h1>
    <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">FY___ received during the current year</th>
                  <th className="border-violet-700 border-2">Pending resolution at end of current year</th>
                  <th className="border-violet-700 border-2">Remark</th>
                  <th className="border-violet-700 border-2">FY___ received during the previous year</th>
                  <th className="border-violet-700 border-2">Pending resolution at end of previous year</th>
                  <th className="border-violet-700 border-2">Remark</th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                    Data Privacy
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="dataPrivacyReceivedCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="dataPrivacyPendingCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="dataPrivacyRemarksCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="dataPrivacyReceivedPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="dataPrivacyPendingPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="dataPrivacyRemarksPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                    Advertising
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="advertisingReceivedCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="advertisingPendingCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="advertisingRemarksCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="advertisingReceivedPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="advertisingPendingPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="advertisingRemarksPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                   Cyber Security
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="cyberSecurityReceivedCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="cyberSecurityPendingCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="cyberSecurityRemarksCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="cyberSecurityReceivedPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="cyberSecurityPendingPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="cyberSecurityRemarksPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                  Delivery Of Essential Services
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="essentialServiceReceivedCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="essentialServicePendingCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="essentialServiceRemarksCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="essentialServiceReceivedPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="essentialServicePendingPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="essentialServiceRemarksPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                   Restrictive Trade Practices
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="tradePracticesReceivedCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="tradePracticesPendingCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="tradePracticesRemarksCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="tradePracticesReceivedPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="tradePracticesPendingPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="tradePracticesRemarksPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                   UnFair Trade Practices
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="unfairTradePracticesReceivedCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="unfairTradePracticesPendingCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="unfairTradePracticesRemarksCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="unfairTradePracticesReceivedPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="unfairTradePracticesPendingPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="unfairTradePracticesRemarksPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700  text-center">
                   Others
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="otherReceivedCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="otherPendingCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="otherRemarksCurrentYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="otherReceivedPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="otherPendingPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="otherRemarksPreviousYear"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
              </tr>
              </table>
    </div>


      </form>
    </div>
  )
}

export default Part9
