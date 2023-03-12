const staticTable=(props)=>{
    const head = props.headings.map((el) => {
        return <th className="border-violet-700 border-2 ">{el.label}</th>;
      });   
      const rows = props.rows.map((el) => {
        return (
          <tr className="">
            <td className="border-violet-700 border-2 text-center trow">{el.label}</td>
            {props.headings.slice(1,props.headings.length).map((ar) => {
              return (
                <td className="border-2  border-violet-700">
                  <input
                    id={`${el.name}${ar.name}`}
                    type={ar.type}
                    name={ar.name}
                    className={"pl-[0.5rem]  py-5  w-full   focus:border-green-500 authip "+ar.class}
                    onChange={props.onChange}
                    required
                  />
                </td>
              );
            })}
          </tr>
        );
      });
    return(
        <table className="h-[100px]  mb-5 w-[100%]">
        <thead>
          <tr>
            {head}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}
export default staticTable;