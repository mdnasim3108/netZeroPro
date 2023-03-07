import React,{useState} from 'react'
import { Helmet } from 'react-helmet'


const Part8 = () => {

    const [table, setTable] = useState([1,2]);

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
      </form>
    </div>
  )
}

export default Part8
