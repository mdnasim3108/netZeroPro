import React,{useState} from 'react'
import { Helmet } from 'react-helmet'

const Part4 = () => {
    const [table, setTable] = useState([1,2]);

    const [formDataSectionC, setFormDataSectionC] = useState({

        processDescription:"",

        processConsultation:"",
        consultationSupport:"",
        detailsOfInstances :"",

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
    const environmentalConcerns = table.map((el) => {
        return (
          <tr>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`stackHolderName_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 w-[100px] text-center">
            <input
                id={`identifiedAsVulnerable_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 focus:border-green-500">
              <input
                id={`channelOfCommunication_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2"
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 focus:border-green-500">
              <input
                id={`frequencyOfEngagement_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2"
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 focus:border-green-500">
              <input
                id={`purposeAndScopeOfEngagement_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2"
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
      <h1 className="text-center mb-5 font-bold text-lg">PRINCIPLE 4: Businesses should respect the interests of and be responsive to all its stakeholders</h1>

      

    <h1 className="text-center mb-5 font-bold text-lg">List stakeholder groups identified as key for your entity and the frequency of engagement with each stakeholder group.</h1>
    <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Stack Holder Group</th>
                <th className="border-violet-700 border-2">Wheater Identified as Vulnerable & Marginalized Group (Yes / No)</th>
                <th className="border-violet-700 border-2">Channel of Communication </th>
                <th className="border-violet-700 border-2">Frequency of Engagement</th>
                <th className="border-violet-700 border-2">Purpose and Scope of  Engagement including  key Topics</th>
              </tr>
            </thead>
            <tbody id="tb">{environmentalConcerns}</tbody>
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
        <label>Describe the processes for identifying key stakeholder groups of the entity.</label>
        <input
                id="processDescription"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
                />
    </div>
    <div className="flex justify-between">
        <label>Provide the processes for consultation between stakeholders and the Board on economic, environmental, and social topics or if consultation is delegated, how is feedback from such consultations provided to the Board. </label>
        <input
                id="processConsultation"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
                />
    </div>
    <div className="flex justify-between">
        <label>Whether stakeholder consultation is used to support the identification and management of environmental, and social topics</label>
        <input
                id="consultationSupport"
                type="text"
                placeholder=' (Yes / No). If so, provide details of  instances as to how the inputs received from stakeholders on these topics were '
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
                />
    </div>
    <div className="flex justify-between">
        <label>Provide details of instances of engagement with, and actions taken to, address the concerns of vulnerable/ marginalized stakeholder groups</label>
        <input
                id="detailsOfInstances"
                type="text"
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
                />
    </div>

      </form>
      <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit and move to  principle-5
        </button>
      </div>
    </div>
  )
}

export default Part4
