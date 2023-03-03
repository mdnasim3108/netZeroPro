import { useState } from "react";
import "../sections/sections.css"
const Table = (props) => {
  const [number, setNumber] = useState([1, 2]);
  const removeRowHandler = () => {
    setNumber((prev) => {
      if (prev.length === 1) return prev;
      const updatedTable = [...prev];
      updatedTable.pop();
      return updatedTable;
    });
  }
  const head = props.headings.map((el) => {
    return <th className="border-violet-700 border-2 ">{el.name}</th>;
  });
  const rows = number.map((el) => {
    return (
      <tr className="trow relative">
        <td className="border-violet-700 border-2 text-center trow">{el}</td>
        {props.headings.map((ar) => {
          return (
            <td className="border-2  border-violet-700">
              <input
                id={`${el}_${ar.name}`}
                type={ar.type}
                name={ar.name}
                className="pl-[0.5rem]  inline  mb-[1rem]  focus:border-green-500 authip"
                onChange={props.onchange}
                required
              />
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <>
      <table className="h-[100px]  mb-5 w-[100%]">
        <thead>
          <tr>
            <th className="border-violet-700 border-2">S.No</th>
            {head}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <div className="flex justify-end">
          <button
            className="bg-gray-500 border-2 px-5 py-2 rounded mt-5 pr-5"
            onClick={()=>setNumber((prev) => [...prev, prev[prev.length - 1] + 1])}
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
    </>
  );
};
export default Table;