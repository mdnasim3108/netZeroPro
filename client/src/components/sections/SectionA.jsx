/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./sections.css";
import Table from "../tables/table";
const SectionA = () => {
  // dynamic allocation of rows in table

  const [table, setTable] = useState([1, 2]);
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
    mainActivity_1: "",
    businessActivity_1: "",
    turnOverEntity_1: "",
    product_1: "",
    NICcode_1: "",
    totalTurnover_1: "",
    nationalPlants: "",
    nationalOffice: "",
    nationalTotal: "",
    internationalPlants: "",
    internationalOffice: "",
    internationalTotal: "",
    nationalNumbers: "",
    internationalNumbers: "",
    contributionExports: "",
    briefCustomers: "",
    boardOfDirectorsMale: "",
    boardOfDirectorsFemale: "",
    boardOfDirectorsPercentage: "",
    keyManagementPersonnelMale: "",
    keyManagementPersonnelFemale: "",
    keyManagementPersonnelPercentage: "",
    currentMaleEmployee: "",
    currentFemaleEmployee: "",
    currentTotalEmployee: "",
    currentMaleWorker: "",
    currentFemaleWorker: "",
    currentTotalWorker: "",

    previousMaleEmployee: "",
    previousFemaleEmployee: "",
    previousTotalEmployee: "",
    previousMaleWorker: "",
    previousFemaleWorker: "",
    previousTotalWorker: "",

    priorPreviousMaleEmployee: "",
    priorPreviousFemaleEmployee: "",
    priorPreviousTotalEmployee: "",
    priorPreviousMaleWorker: "",
    priorPreviousFemaleWorker: "",
    priorPreviousTotalWorker: "",

    nameOfHolder_1: "",
    indicateType_1: "",
    sharesOfEntity_1: "",
    entityIndicated_1: "",
    turnOver: "",
    netWorth: "",

    materialIssue_1: "",
    identifyRisk_1: "",
    rationaleRisk_: "",
    approachAdapt_1: "",
    financialImplication_1: "",
  });
  const sectionChange = (e) => {
    // setFormData((previousState) => ({
    //   ...previousState,
    //   [e.target.id]: e.target.value,
    // }));
    console.log(e.target.id)
  };
  const row = table.map((el) => {
    return (
      <tr>
        <td className="border-2  border-violet-700 w-[100px] text-center">
          {el}
        </td>
        <td className="border-2  border-violet-700 focus:border-green-500">
          <input
            id={`mainActivity_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem] authip "
            name={`mainActivity_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
            id={`businessActivity_${el}`}
            name={`businessActivity_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            id={`turnOverEntity_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
            name={`turnOverEntity_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
      </tr>
    );
  });

  const productArray = table.map((el) => {
    return (
      <tr>
        <td className="border-2  border-violet-700 w-[100px] text-center">
          {el}
        </td>
        <td className="border-2  border-violet-700 focus:border-green-500">
          <input
            id={`product_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem] authip "
            name={`product_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
            id={`NICcode_${el}`}
            name={`NICcode_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            id={`totalTurnover_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
            name={`totalTurnover_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
      </tr>
    );
  });

  const nameOfHoldingsArray = table.map((el) => {
    return (
      <tr>
        <td className="border-2  border-violet-700 w-[100px] text-center">
          {el}
        </td>
        <td className="border-2  border-violet-700 focus:border-green-500">
          <input
            id={`nameOfHolder_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem] authip "
            name={`nameOfHolder_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
            id={`indicateType_${el}`}
            name={`indicateType_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
            id={`sharesOfEntity_${el}`}
            name={`sharesOfEntity_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            id={`entityIndicated_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
            name={`entityIndicated_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
      </tr>
    );
  });

  const transparencyArray = table.map((el) => {
    return (
      <tr>
        <td className="border-2  border-violet-700 w-[100px] text-center">
          {el}
        </td>
        <td className="border-2  border-violet-700 focus:border-green-500">
          <input
            id={`materialIssue_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem] authip "
            name={`materialIssue_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
            id={`identifyRisk_${el}`}
            name={`identifyRisk_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
            id={`rationaleRisk_${el}`}
            name={`rationaleRisk_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            id={`approachAdapt_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
            name={`approachAdapt_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
        <td className="border-2  border-violet-700">
          <input
            id={`financialImplication_${el}`}
            className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
            name={`financialImplication_${el}`}
            onChange={sectionChange}
            required
          />
        </td>
      </tr>
    );
  });

  console.log(formData);

  const handleSubmit = () => {};
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
  return (
    <div className="p-10">
      <Helmet>
        <title>GENERAL DISCLOSURES - SectionA</title>
      </Helmet>
      <h1 className="text-center mb-5 font-bold text-lg">
        Details of the listed entity:
      </h1>
      <form onSubmit={handleSubmit}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-between flex-col md:flex-row">
            <label>
              {" "}
              Corporate Identity Number (CIN) of the Listed Entity:
            </label>
            <input
              id="CIN"
              type="number"
              name="CIN"
              className="  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className="flex justify-between">
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
          <div className="flex justify-between">
            <label>Year of incorporation:</label>
            <input
              id="year"
              type="text"
              maxlength="4"
              name="year"
              className="pl-[0.5rem]  inline  mb-[1rem]  border-2  border-violet-700 focus:border-green-500 authip w-[20.5rem] "
              onChange={sectionChange}
              required
            />
          </div>
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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

          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
        {/* Products/services section  */}
        <h1 className="text-center mb-5 font-bold text-lg">
          Products/services:
        </h1>
        {/* table 1 */}
        <h1 className="text-center mb-5 font-bold text-lg">
          Details of business activities (accounting for 90% of the turnover)
        </h1>

        {/* <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">S.no.</th>
                <th className="border-violet-700 border-2">
                  Description of Main Activity
                </th>
                <th className="border-violet-700 border-2">
                  Description of Business Activity
                </th>
                <th className="border-violet-700 border-2">
                  {" "}
                  % of Turnover of the Entity
                </th>
              </tr>
            </thead>
            <tbody id="tb">{row}</tbody>
          </table>
        </div> */}
        
        <Table
          headings={[
            {name: "Description of main activity", type: "string" },
            {name:"description of business activity",type:"string"},
            {name:"% of Turnover of the Entity",type:"string"},
          ]}
          onchange={sectionChange}
        />

        <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5"
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

        {/* table2 */}
        <h1 className="text-center mb-5 font-bold text-lg">
          Products/Services sold by the entity (accounting for 90% of the
          entity’s Turnover):
        </h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">S.no.</th>
                <th className="border-violet-700 border-2">
                  Products/services
                </th>
                <th className="border-violet-700 border-2">NIC Code</th>
                <th className="border-violet-700 border-2">
                  {" "}
                  % of Total Turnover Contributed
                </th>
              </tr>
            </thead>
            <tbody id="tb">{productArray}</tbody>
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

        {/* OPERATIONS */}
        <h1 className="text-center mb-5 font-bold text-lg">Operations:</h1>
        <h1 className="text-center mb-5 font-bold text-lg">
          Number of locations where plants and/or operations/offices of the
          entity are situated:
        </h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">Location</th>
                <th className="border-violet-700 border-2">Number of Plants</th>
                <th className="border-violet-700 border-2">
                  Number Of Offices
                </th>
                <th className="border-violet-700 border-2"> Total</th>
              </tr>
            </thead>
            <tr>
              <td className="border-2  border-violet-700 w-[100px] text-center">
                National
              </td>
              <td className="border-2  border-violet-700 focus:border-green-500">
                <input
                  id="nationalPlants"
                  className="pl-[0.5rem]  inline  mb-[1rem] authip "
                  name="nationalPlants"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                  id="nationalOffice"
                  name="nationalOffice"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  id="nationalTotal"
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                  name="nationalTotal"
                  onChange={sectionChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border-2  border-violet-700 w-[100px] text-center">
                International
              </td>
              <td className="border-2  border-violet-700 focus:border-green-500">
                <input
                  id="internationalPlants"
                  className="pl-[0.5rem]  inline  mb-[1rem] authip "
                  name="internationalPlants"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                  id="internationalOffice"
                  name="internationalOffice"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  id="internationalTotal"
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                  name="internationalTotal"
                  onChange={sectionChange}
                  required
                />
              </td>
            </tr>
          </table>
        </div>
        <h1 className="text-center mb-5 font-bold text-lg">
          Markets served by the entity
        </h1>
        <div>
          <h4 className="text-center mb-5 font-bold text-lg">
            Number of locations
          </h4>
        </div>

        <table className="border-collapse h-[100px]  mb-5 w-full">
          <thead>
            <tr className="">
              <th className="border-violet-700 border-2 ">Locations</th>
              <th className="border-violet-700 border-2">Numbers</th>
            </tr>
          </thead>

          <tr>
            <td className="border-2  border-violet-700 w-[100px] text-center">
              National (No.of.States)
            </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                id="nationalNumbers"
                name="nationalNumbers"
                onChange={sectionChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td className="border-2  border-violet-700 w-[100px] text-center">
              International (No.of.Countries)
            </td>
            <td className="border-2  border-violet-700 focus:border-green-500">
              <input
                id="internationalNumbers"
                className="pl-[0.5rem]  inline  mb-[1rem] authip "
                name="internationalNumbers"
                onChange={sectionChange}
                required
              />
            </td>
          </tr>
        </table>
        <table className="border-collapse h-[100px]  mb-5 w-full">
          <thead>
            <tr className="">
              <th className="border-violet-700 border-2 w-max">
                What is the contribution of exports as a percentage of the total
                turnover of the entity?
              </th>
              <th className="border-violet-700 border-2">
                A brief on types of customers
              </th>
            </tr>
          </thead>

          <tr>
            <td className="border-2  border-violet-700 text-center">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2"
                id="nationalNumbers"
                name="nationalNumbers"
                onChange={sectionChange}
                required
              />
            </td>
            <td className="border-2  border-violet-700">
              <input
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip w-full h-full relative top-2 "
                id="nationalNumbers"
                name="nationalNumbers"
                onChange={sectionChange}
                required
              />
            </td>
          </tr>
        </table>

        {/* Employees */}
        <h1 className="text-center mb-5 font-bold text-lg">Employees:</h1>
        <h1 className="text-center mb-5 font-bold text-lg">
          Participation/Inclusion/Representation of women:
        </h1>
        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 "></th>
                <th className="border-violet-700 border-2">
                  Number of Men (A)
                </th>
                <th className="border-violet-700 border-2">
                  Number Of Female (B)
                </th>
                <th className="border-violet-700 border-2">% ( B / A )</th>
              </tr>
            </thead>
            <tr>
              <td className="border-2  border-violet-700 w-[100px] text-center">
                Board of Directors
              </td>
              <td className="border-2  border-violet-700 focus:border-green-500">
                <input
                  id="boardOfDirectorsMale"
                  className="pl-[0.5rem]  inline  mb-[1rem] authip "
                  name="boardOfDirectorsMale"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                  id="boardOfDirectorsFemale"
                  name="boardOfDirectorsFemale"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  id="boardOfDirectorsPercentage"
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                  name="boardOfDirectorsPercentage"
                  onChange={sectionChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="border-2  border-violet-700 w-[100px] text-center">
                Key Management Personnel
              </td>
              <td className="border-2  border-violet-700 focus:border-green-500">
                <input
                  id="keyManagementPersonnelMale"
                  className="pl-[0.5rem]  inline  mb-[1rem] authip "
                  name="keyManagementPersonnelMale"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                  id="keyManagementPersonnelFemale"
                  name="keyManagementPersonnelFemale"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  id="keyManagementPersonnelPercentage"
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                  name="keyManagementPersonnelPercentage"
                  onChange={sectionChange}
                  required
                />
              </td>
            </tr>
          </table>
        </div>

        <h1 className="text-center mb-5 font-bold text-lg">
          {" "}
          Turnover rate for permanent employees and workers (Disclose trends for
          the past 3 years){" "}
        </h1>

        <div className="flex justify-between w-full turnRate">
          <div className="w-[50%]">
            <h4 className="text-center mb-5 font-bold text-lg">
              FY___ (Turnover Rate in Current FY){" "}
            </h4>
            <table className="border-collapse h-[100px]">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">Male</th>
                  <th className="border-violet-700 border-2">Female</th>
                  <th className="border-violet-700 border-2">Total</th>
                </tr>
              </thead>
              <tr>
                <td className="border-2  border-violet-700 w-[100px] text-center">
                  Permanent Employees
                </td>
                <td className="border-2  border-violet-700 focus:border-green-500">
                  <input
                    id="currentMaleEmployee"
                    className="pl-[0.5rem]  inline  mb-[1rem] authip "
                    name="currentMaleEmployee"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                    id="currentFemaleEmployee"
                    name="currentFemaleEmployee"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    id="currentTotalEmployee"
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                    name="currentTotalEmployee"
                    onChange={sectionChange}
                    required
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border-2  border-violet-700 w-[100px] text-center">
                  Permanent Workers
                </td>
                <td className="border-2  border-violet-700 focus:border-green-500">
                  <input
                    id="currentMaleWorker"
                    className="pl-[0.5rem]  inline  mb-[1rem] authip "
                    name="currentMaleWorker"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                    id="currentFemaleWorker"
                    name="currentFemaleWorker"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    id="currentTotalWorker"
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                    name="currentTotalWorker"
                    onChange={sectionChange}
                    required
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="w-[50%]">
            <h4 className="text-center mb-5 font-bold text-lg">
              FY___ (Turnover Rate in Previous FY){" "}
            </h4>
            <table className="border-collapse h-[100px]  mb-5">
              <thead>
                <tr className="">
                  <th className="border-violet-700 border-2 "></th>
                  <th className="border-violet-700 border-2">Male</th>
                  <th className="border-violet-700 border-2">Female</th>
                  <th className="border-violet-700 border-2">Total</th>
                </tr>
              </thead>
              <tr>
                <td className="border-2  border-violet-700 w-[100px] text-center">
                  Permanent Employees
                </td>
                <td className="border-2  border-violet-700 focus:border-green-500">
                  <input
                    id="currentMaleEmployee"
                    className="pl-[0.5rem]  inline  mb-[1rem] authip "
                    name="currentMaleEmployee"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                    id="currentFemaleEmployee"
                    name="currentFemaleEmployee"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    id="currentTotalEmployee"
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                    name="currentTotalEmployee"
                    onChange={sectionChange}
                    required
                  />
                </td>
              </tr>{" "}
              <tr>
                <td className="border-2  border-violet-700 w-[100px] text-center">
                  Permanent Workers
                </td>
                <td className="border-2  border-violet-700 focus:border-green-500">
                  <input
                    id="currentMaleWorker"
                    className="pl-[0.5rem]  inline  mb-[1rem] authip "
                    name="currentMaleWorker"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                    id="currentFemaleWorker"
                    name="currentFemaleWorker"
                    onChange={sectionChange}
                    required
                  />
                </td>
                <td className="border-2  border-violet-700">
                  <input
                    id="currentTotalWorker"
                    className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                    name="currentTotalWorker"
                    onChange={sectionChange}
                    required
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-left mb-5 font-bold text-lg">
            FY___ (Turnover Rate in the year prior to the Previous FY){" "}
          </h4>
          <table className="border-collapse h-[100px]  mb-5 w-[50%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 "></th>
                <th className="border-violet-700 border-2">Male</th>
                <th className="border-violet-700 border-2">Female</th>
                <th className="border-violet-700 border-2">Total</th>
              </tr>
            </thead>
            <tr>
              <td className="border-2  border-violet-700 w-[100px] text-center">
                Permanent Employees
              </td>
              <td className="border-2  border-violet-700 focus:border-green-500">
                <input
                  id="priorPreviousMaleEmployee"
                  className="pl-[0.5rem]  inline  mb-[1rem] authip "
                  name="priorPreviousMaleEmployee"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                  id="priorPreviousFemaleEmployee"
                  name="priorPreviousFemaleEmployee"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  id="priorPreviousTotalEmployee"
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                  name="priorPreviousTotalEmployee"
                  onChange={sectionChange}
                  required
                />
              </td>
            </tr>{" "}
            <tr>
              <td className="border-2  border-violet-700 w-[100px] text-center">
                Permanent Workers
              </td>
              <td className="border-2  border-violet-700 focus:border-green-500">
                <input
                  id="priorPreviousMaleWorker"
                  className="pl-[0.5rem]  inline  mb-[1rem] authip "
                  name="priorPreviousMaleWorker"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                  id="priorPreviousFemaleWorker"
                  name="priorPreviousFemaleWorker"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  id="priorPreviousTotalWorker"
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                  name="priorPreviousTotalWorker"
                  onChange={sectionChange}
                  required
                />
              </td>
            </tr>
          </table>
        </div>

        <h1 className="text-center mb-5 font-bold text-lg">
          Holding, Subsidiary and Associate Companies (including joint
          ventures):
        </h1>
        <h1 className="text-center mb-5 font-bold text-lg">
          Names of holding / subsidiary / associate companies / joint ventures:
        </h1>

        <div className=" flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">S.NO</th>
                <th className="border-violet-700 border-2">
                  Names of holding / subsidiary / associate companies / joint
                  ventures
                </th>
                <th className="border-violet-700 border-2">
                  Indicate Whether holding / subsidiary / associate companies /
                  joint ventures
                </th>
                <th className="border-violet-700 border-2">
                  % of shares held by listed entity
                </th>
                <th className="border-violet-700 border-2">
                  Does the entity indicated at column A,participate in the
                  responsibility initiatives of the listed entity ? (Yes/No)
                </th>
              </tr>
            </thead>
            <tbody id="tb">{nameOfHoldingsArray}</tbody>
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

        <h1 className="text-center mb-5 font-bold text-lg">CSR Details:</h1>

        <div className="w-full flex justify-center">
          <table className="border-collapse h-[100px]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2">
                  Whether CSR is applicable as per section 135 of Companies Act,
                  2013 (yes/no)
                </th>
                <th className="border-violet-700 border-2">Turn Over:</th>
                <th className="border-violet-700 border-2">NetWorth</th>
              </tr>
            </thead>
            <tr>
              <td className="border-2  border-violet-700 focus:border-green-500">
                <input
                  id="currentMaleEmployee"
                  className="pl-[0.5rem]  inline  mb-[1rem] authip "
                  name="currentMaleEmployee"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip  "
                  id="currentFemaleEmployee"
                  name="currentFemaleEmployee"
                  onChange={sectionChange}
                  required
                />
              </td>
              <td className="border-2  border-violet-700">
                <input
                  id="currentTotalEmployee"
                  className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip "
                  name="currentTotalEmployee"
                  onChange={sectionChange}
                  required
                />
              </td>
            </tr>
          </table>
        </div>

        <h1 className="text-center mb-5 font-bold text-lg">
          Transparency and Disclosures Compliances:
        </h1>
        <h1 className="text-center mb-5 font-bold text-lg">
          Overview of the entity’s material responsible business conduct issues:
        </h1>

        <div className="px-10 flex justify-between">
          <table className="border-collapse h-[100px]  mb-5 w-[100%]">
            <thead>
              <tr className="">
                <th className="border-violet-700 border-2 ">S.NO</th>
                <th className="border-violet-700 border-2">
                  Material Issue Identified
                </th>
                <th className="border-violet-700 border-2">
                  Indicate Whether Risk or Opportunity (R/O)
                </th>
                <th className="border-violet-700 border-2">
                  Rationale for Identifing Risk / Opportunity
                </th>
                <th className="border-violet-700 border-2">
                  InCase of risk, approach to adapt or mitigate
                </th>
                <th className="border-violet-700 border-2">
                  Financial Implications of the risk or opportunity ( Indicate
                  Positive or Negative Implications)
                </th>
              </tr>
            </thead>
            <tbody id="tb">{transparencyArray}</tbody>
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
          Submit and move to section B
        </button>
      </div>
    </div>
  );
};

export default SectionA;
