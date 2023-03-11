import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router';

const Part6 = () => {

    const [table, setTable] = useState([1,2]);
    const navigate = useNavigate();
    const [formDataSectionC, setFormDataSectionC] = useState({
        totalElectricityConsumption:"",
        totalFuelConsumption:"",
        energyConsumptionThroughOtherSources:"",
        totalEnergyConsumption:"",
        energyIntensityPerRupeeOfTurnover:"",

        designatedConsumers:"",
        

    })

    const handleSubmit = () =>{
        console.log("Scetion C Form submitted");
        navigate("sectionC/principle7")
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
      <form onSubmit = {handleSubmit}>
      <h1 className="text-center mb-5 font-bold text-lg">PRINCIPLE 6: Businesses should respect and make efforts to protect and restore the environment</h1>
      <label>Details of total energy consumption (in Joules or multiples) and energy intensity, in the following format</label>
        <div className="flex justify-between">
            <label>Total electricity consumption (A)</label>
            <input
                    id="totalElectricityConsumption"
                    type="text"
                    placeholder=''
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>
        <div className="flex justify-between">
            <label>Total fuel consumption (B)</label>
            <input
                    id="totalFuelConsumption"
                    type="text"
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>
        <div className="flex justify-between">
            <label>Energy consumption through other sources (C)</label>
            <input
                    id="energyConsumptionThroughOtherSources"
                    type="text"
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>
        <div className="flex justify-between">
            <label>Total energy consumption (A+B+C) </label>
            <input
                    id="totalEnergyConsumption"
                    type="text"
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>
        <div className="flex justify-between">
            <label>Energy intensity per rupee of turnover (Total energy consumption/ turnover in rupees) Energy intensity (optional) – the relevant metric may be selected by the entity Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an external agency? (Y/N) If yes, name of the external agency. </label>
            <input
                    id="energyIntensityPerRupeeOfTurnover"
                    type="text"
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
        </div>


        <div className="flex justify-between">
            <label>Does the entity have any sites / facilities identified as designated consumers (DCs) under the Performance, Achieve and Trade (PAT) Scheme of the Government of India? </label>
            <input
                    id="designatedConsumers"
                    type="text"
                    placeholder='(Y/N) If yes, disclose whether targets set under the PAT scheme have been achieved. In case targets '
                    className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                    onChange={sectionChange}
                    required
            />
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

export default Part6
