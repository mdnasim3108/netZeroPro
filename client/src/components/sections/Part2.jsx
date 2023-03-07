import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
const Part2 = () => {
    const [table, setTable] = useState([1,2]);
    const [formDataSectionC, setFormDataSectionC] = useState({
        currentRD:"",
        previousRD:"",
        detailRD:"",
        previousCapex:"",
        currentCapex:"",
        detailCapex:"",

        sustainableSourcing:"",
        
        processDescription:"",

        extendedProducerResponsibility:"",

        reusedCurrentPlastics:"",
        recycledCurrentPlastics:"",
        safelyDisposedCurrentPlastics:"",

        reusedCurrentEWaste:"",
        recycledCurrentEWaste:"",
        safelyDisposedCurrentEWaste:"",

        reusedCurrentHazard:"",
        recycledCurrentHazard:"",
        safelyDisposedCurrentHazard:"",
        
        reusedCurrentOtherWaste:"",
        recycledCurrentOtherWaste:"",
        safelyDisposedCurrentOtherWaste:"",

        reusedPreviousPlastics:"",
        recycledPreviousPlastics:"",
        safelyDisposedPreviousPlastics:"",

        reusedPreviousEWaste:"",
        recycledPreviousEWaste:"",
        safelyDisposedPreviousEWaste:"",

        reusedPreviousHazard:"",
        recycledPreviousHazard:"",
        safelyDisposedPreviousHazard:"",
        
        reusedPreviousOtherWaste:"",
        recycledPreviousOtherWaste:"",
        safelyDisposedPreviousOtherWaste:"",


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
                id={`nameoftheProduct_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 w-[100px] text-center">
            <input
                id={`descriptioRisk_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 focus:border-green-500">
              <input
                id={`actionTaken_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2"
                onChange={sectionChange}
                required
              />
            </td>
          
          </tr>
        );
      });
      const lifeCyclePerspective = table.map((el) => {
        return (
          <tr>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`NICcode_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 w-[100px] text-center">
            <input
                id={`productName_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2"
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 focus:border-green-500">
              <input
                id={`totalTurnoverPercentage_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2"
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`independentExternalAgencies_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
           
            <td className="border-2  border-violet-700">
              <input
                id={`resultsCommunicated_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
          </tr>
        );
      });

      const recycledInputMaterial = table.map((el) => {
        return (
          <tr>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`inputMaterial_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 w-[100px] text-center">
            <input
                id={`reusedInputCurrent_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2 "
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 focus:border-green-500">
              <input
                id={`reusedInputPrevious_${el}`}
                className="pl-[0.5rem]  inline  mb-[1rem] authip relative top-2"
                onChange={sectionChange}
                required
              />
            </td>
          
          </tr>
        );
      });


      const reclaimedProducts = table.map((el) => {
        return (
          <tr>
           <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip relative top-2 "
                id={`productCategory_${el}`}
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700 w-[100px] text-center">
            <input
                id={`reclaimedProductMaterial_${el}`}
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
    <h1 className="text-center mb-5 font-bold text-lg">PRINCIPLE 2 Businesses should provide goods and services in a manner that is sustainable and safe:</h1>
    
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
                  <th className="border-violet-700 border-2">
                  Details of Improvements in environmental and social impacts
                  </th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                  R&D
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
                  <td className="border-2  border-violet-700">
                    <input 
                          id="detailRD"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                        Capex                  
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
                  <td className="border-2  border-violet-700">
                    <input 
                          id="detailCapex"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              </table>
    </div>
    <div className="flex justify-between">
            <label> Does the entity have procedures in place for sustainable sourcing?</label>
              Yes
            <input
              id="sustainableSourcing"
              type="radio"
              value="Yes"
              name = "sustainableSourcing"
              onChange={sectionChange}
              required
            />NO<input
              id="sustainableSourcing"
              type="radio"
              value="No"
              name = "sustainableSourcing"
              onChange={sectionChange}
              required
            />
          </div>

    <div className="flex justify-between">
        <label>Describe the processes in place to safely reclaim your products for reusing, recycling and  disposing at the end of life</label>
        <input
                id="processDescription"
                type="text"
                placeholder='For (a) Plastics (including packaging) (b) E-waste (c) Hazardous waste and (d) other waste'
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip  relative top-2"
                onChange={sectionChange}
                required
                />
    </div>
    <div className="flex justify-between">
        <label>Whether Extended Producer Responsibility (EPR) is applicable to the entity’s activities</label>
        <input
                id="extendedProducerResponsibility"
                type="text"
                placeholder='If yes, whether the waste collection plan is in line with the Extended Producer '
                className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip relative top-2 "
                onChange={sectionChange}
                required
                />
    </div>
    <h1 className="text-center mb-5 font-bold text-lg">Has the entity conducted Life Cycle Perspective / Assessments (LCA) for any of its products (for manufacturing industry) or for its services (for service industry)? If yes,  provide details in the following format?</h1>
    <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">NIC Code</th>
                <th className="border-violet-700 border-2">Name of the Product / Service</th>
                <th className="border-violet-700 border-2">Boundary for which the Life Cycle</th>
                <th className="border-violet-700 border-2">Wheather Conducted by independent external agencies (Yes / No)</th>
                <th className="border-violet-700 border-2">Results Communicated in public domain (Yes / No) ?If yes,provide the web-link</th>
              </tr>
            </thead>
            <tbody id="tb">{lifeCyclePerspective}</tbody>
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

        <h1 className="text-center mb-5 font-bold text-lg">If there are any significant social or environmental concerns and/or risks arising from production or disposal of your products / services, as identified in the Life Cycle Perspective / Assessments (LCA) or through any other means, briefly describe the same along-with action taken to mitigate the same.:</h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Name of the Product / Service</th>
                <th className="border-violet-700 border-2">Description of Risk and Concern</th>
                <th className="border-violet-700 border-2">Action Taken</th>
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

        <h1 className="text-center mb-5 font-bold text-lg">Percentage of recycled or reused input material to total material (by value) used in  production (for manufacturing industry) or providing services (for service industry) :</h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Indicate Input Material</th>
                <th className="border-violet-700 border-2">Recycled or Reused input in Current Financial Year</th>
                <th className="border-violet-700 border-2">Recycled or Reused input in Previous Financial Year</th>
              </tr>
            </thead>
            <tbody id="tb">{recycledInputMaterial}</tbody>
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


        <h1 className="text-center mb-5 font-bold text-lg">Of the products and packaging reclaimed at end of life of products, amount (in metric tonnes) reused, recycled, and safely disposed, as per the following format: </h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">
                  Reused in Current Financial Year  
                    </th>
                  <th className="border-violet-700 border-2">
                   Recycled in  Current Financial Year
                  </th>
                  <th className="border-violet-700 border-2">
                  Safely Disposed
                  </th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                  Plastics (including Packaging)
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedCurrentPlastics"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledCurrentPlastics"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedCurrentPlastics"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">E-Waste</td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedCurrentEWaste"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledCurrentEWaste"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedCurrentEWaste"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">Hazardous Wastes</td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedCurrentHazard"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledCurrentHazard"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedCurrentHazard"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>              
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">Other Wastes</td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedCurrentOtherWaste"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledCurrentOtherWaste"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedCurrentOtherWaste"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              </table>
    </div>
    <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">
                  Reused in Previous Financial Year  
                    </th>
                  <th className="border-violet-700 border-2">
                   Recycled in  Previous Financial Year
                  </th>
                  <th className="border-violet-700 border-2">
                  Safely Disposed
                  </th>
                </tr>
              </thead>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">
                  Plastics (including Packaging)
                  </td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedPreviousPlastics"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledPreviousPlastics"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedPreviousPlastics"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">E-Waste</td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedPreviousEWaste"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledPreviousEWaste"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedPreviousEWaste"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">Hazardous Wastes</td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedPreviousHazard"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledPreviousHazard"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedPreviousHazard"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>              
              <tr>
                  <td className="border-2  border-violet-700 w-[100px] text-center">Other Wastes</td>
                  <td className="border-2  border-violet-700 focus:border-green-500">
                    <input  
                        id="reusedPreviousOtherWaste"
                        className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                        onChange={sectionChange}
                        required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 " 
                            id="recycledPreviousOtherWaste"
                            onChange={sectionChange}
                            required
                    />
                  </td>
                  <td className="border-2  border-violet-700">
                    <input 
                          id="safelyDisposedPreviousOtherWaste"
                          className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2" 
                          onChange={sectionChange}
                          required
                      />
                  </td>
              </tr>
              </table>
    </div>

        <h1 className="text-center mb-5 font-bold text-lg">Reclaimed products and their packaging materials (as percentage of products sold) for each product category :</h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Indicate Product Category</th>
                <th className="border-violet-700 border-2">Reclaimed Products  and their Packaging Materials as % of total Products sold in respective Category</th>
              </tr>
            </thead>
            <tbody id="tb">{reclaimedProducts}</tbody>
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
   <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit and move to next principle
        </button>
      </div>
    </div>
  )
}

export default Part2
