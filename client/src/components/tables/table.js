import { useState } from "react";
const Table = (props) => {
  const [number, setNumber] = useState([1, 2]);
  const head = props.headings.map((el) => {
    return <th className="border-violet-700 border-2 ">{el.name}</th>;
  });
  const rows = number.map((el) => {
    return (
      <tr>
        <td className="border-violet-700 border-2 text-center">{el}</td>
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
    </>
  );
};
export default Table;
