import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router';

const Part7 = () => {
    const [table, setTable] = useState([1,2]);
    const navigate = useNavigate();
    const [formDataSectionC, setFormDataSectionC] = useState({})
    
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
        navigate("sectionC/principle8");
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
             {el}
            </td>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`nameOfTrade_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 w-[100px] text-center">
            <input
                id={`reachOfTrade_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
          
          </tr>
        );
      });

      const publicPolicy = table.map((el) => {
        return (
            <tr>
            <td className="border-2  border-violet-700">
           {el}
             </td>
            <td className="border-2  border-violet-700">
               <input
                 className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                 id={`policyAdvocated_${el}`}
                 onChange={sectionChange}
                 required
               />
             </td>
             <td className="border-2  border-violet-700 w-[100px] text-center">
             <input
                 id={`methodResorted_${el}`}
                 className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                 onChange={sectionChange}
                 required
               />
             </td>
             <td className="border-2  border-violet-700 w-[100px] text-center">
             <input
                 id={`informationAvailable_${el}`}
                 className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                 onChange={sectionChange}
                 required
               />
             </td>
             <td className="border-2  border-violet-700 w-[100px] text-center">
             <input
                 id={`frequencyReview_${el}`}
                 className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                 onChange={sectionChange}
                 required
               />
             </td>
             <td className="border-2  border-violet-700 w-[100px] text-center">
             <input
                 id={`webLink_${el}`}
                 className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                 onChange={sectionChange}
                 required
               />
             </td>
           
           </tr>
        );
      });

      const providedDetails = table.map((el) => {
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
                id={`briefOftheCase_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 w-[100px] text-center">
            <input
                id={`actionTaken_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
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
      <form onSubmit = {handleSubmit}>
      <h1 className="text-center mb-5 font-bold text-lg">PRINCIPLE 7 Businesses, when engaging in influencing public and regulatory policy, should do so in a manner that is responsible and  transparent</h1>
      <h1 className="text-center mb-5 font-bold text-lg">List the top 10 trade and industry chambers/ associations (determined based on the total members of such body) the entity is a member of/ affiliated to</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">S.NO</th>
                <th className="border-violet-700 border-2">Name of the trade and industry chambers / associations</th>
                <th className="border-violet-700 border-2">Reach of trade and industry chambers / associations (State/National)</th>
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

        <h1 className="text-center mb-5 font-bold text-lg">Provide details of corrective action taken or underway on any issues related to anti competitive conduct by the entity, based on adverse orders from regulatory  authorities.</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Name of the authority</th>
                <th className="border-violet-700 border-2">Brief Of The Case</th>
                <th className="border-violet-700 border-2">Corrective action taken</th>
              </tr>
            </thead>
            <tbody id="tb">{providedDetails}</tbody>
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
        <h1 className="text-center mb-5 font-bold text-lg">Details of public policy positions advocated by the entity.</h1>
      <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">S.NO</th>
                <th className="border-violet-700 border-2">Public Policy advocated</th>
                <th className="border-violet-700 border-2">Method Resorted for such advocacy</th>
                <th className="border-violet-700 border-2 ">Wheather information is available in public domain (Yes/No)</th>
                <th className="border-violet-700 border-2">Frequency of Review By Board</th>
                <th className="border-violet-700 border-2">Web Link , If available</th>
              </tr>
            </thead>
            <tbody id="tb">{publicPolicy}</tbody>
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
        <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit and move to next principle
        </button>
      </div>
      </form>

   
    </div>
  )
}

export default Part7
