import React, { useState } from 'react'
import { Helmet } from "react-helmet";


const SectionA = () => {

  const [formData, setFormData] = useState({
    CIN: "",
    name: "",
    year: "",
    registeredAddress: "",
    corporateAddress: "",
    email: "",
    telephonyNumber: "",
    website: "",
    financialYear: "",
    stockExchange: "",
    paidupCapital: "",
    personName: "",
    personEmail: "",
    main1Activity: "",
    business1Activity: "",
    turn1over: ""


  })

  const sectionChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const handleSubmit = () => {

  }

  return (
    <div>
      <Helmet>
        <title>GENERAL DISCLOSURES - SectionA</title>
      </Helmet>
      <h1 className='text-center mb-5 font-bold text-lg'>Details of the listed entity:</h1>
      <form onSubmit={handleSubmit} >
        <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className='flex justify-between flex-col md:flex-row'>
            <label> Corporate Identity Number (CIN) of the Listed Entity:</label>
            <input
              id="CIN"
              type="number"
              name="CIN"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />


          </div>
          <div className='flex justify-between'>
            <label>Name of the Listed Entity:</label>
            <input
              id="name"
              type="text"
              name="name"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Year of incorporation:</label>
            <input
              id="year"
              type='text'
              maxlength="4"
              name="year"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Registered office address</label>
            <input
              id="registeredAddress"
              type="text"
              name="registeredAddress"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Corporate address</label>
            <input
              id="corporateAddress"
              type="text"
              name="corporateAddress"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>E-mail:</label>
            <input
              id="email"
              type="email"
              name="email"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Telephony Number:</label>
            <input
              id="telephonyNumber"
              type="number"
              name="telephonyNumber"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Website:</label>
            <input
              id="website"
              type="url"
              name="website"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>

          <div className='flex justify-between'>
            <label>Financial year for which reporting is being done:</label>
            <input
              id="financialYear"
              type="text"
              maxlength="4"
              name="financialYear"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Name of the Stock(s) where shares are listed:</label>
            <input
              id="stockExchange"
              type="text"
              name="stockExchange"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Paid-up Capital</label>
            <input
              id="paidupCapital"
              type="text"
              name="paidupCapital"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />



          </div>
          <div className='flex justify-between'>
            <label>Name of the Person:</label>
            <input
              id="personName"
              type="text"
              name="personName"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className='flex justify-between'>
            <label>Email of the Person:</label>
            <input
              id="personEmail"
              type="email"
              name="personEmail"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
        </div>
       
        <h1 className='text-center mb-5 font-bold text-lg'>Products/services:</h1>
        {/* table 1 */}
        <h1 className='text-center mb-5 font-bold text-lg'>Details of business activities (accounting for 90% of the turnover)</h1>
        <div className='px-10 flex justify-between'>
        
        <table className='border-collapse h-[100px]  mb-5 w-[100%]'>
          <thead>
            <tr className=''>
              <th className='border-violet-700 border-2 '>S.no.</th>
              <th className='border-violet-700 border-2'>Description of Main Activity</th>
              <th className='border-violet-700 border-2'>Description of Business Activity</th>
              <th className='border-violet-700 border-2'> % of Turnover of the Entity</th>
            </tr>
          </thead>
          <tbody>
            <tr className=''>
              <td className='border-2  border-violet-700 w-[100px] text-center'>1</td>
              <td className='border-2  border-violet-700 focus:border-green-500'><input className="pl-[0.5rem]  inline  mb-[1rem]    authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip " /></td>
            </tr>
            <tr className=''>
            <td className='border-2  border-violet-700 w-[100px] text-center'>2</td>

              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]   focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip " /></td>
            </tr>
          </tbody>
        </table>
    
        </div>

        {/* table2 */}
        <h1 className='text-center mb-5 font-bold text-lg'>Products/Services sold by the entity (accounting for 90% of the entity’s Turnover):</h1>
        <div className='px-10 flex justify-between'>
         <table className='border-collapse  h-[100px] w-full'>
          <thead>
            <tr className=''>
              <th className='border-violet-700 border-2 w-[-30rem]'>S.no.</th>
              <th className='border-violet-700 border-2'>Products/services</th>
              <th className='border-violet-700 border-2'>NIC CODE</th>
              <th className='border-violet-700 border-2'> % of Total Turnover Calculated</th>
            </tr>
          </thead>
          <tbody>
            <tr className=''>
              <td className='border-2  border-violet-700 w-[100px] text-center'>1</td>         
              <td className='border-2  border-violet-700  focus:border-green-500 authip'><input className="pl-[0.5rem]  inline  mb-[1rem]   focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip " /></td>
            </tr>
            <tr className=''>
            <td className='border-2  border-violet-700 w-[100px] text-center'>2</td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]   focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip " /></td>
            </tr>
            <tr className=''>
            <td className='border-2  border-violet-700 w-[100px] text-center'>3</td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]   focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  " /></td>
              <td className='border-2  border-violet-700'><input className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip " /></td>
            </tr>
          </tbody>
          </table>
        </div>


        <h1 className='text-center mb-5 font-bold text-lg'>Operations:</h1>

      </form>

    </div>
  )
}

export default SectionA
