import { useContext, useState } from "react";
import linkOptionContext from "../context/linkOptionContext";
function Checkbox({name, setStatus}){
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = ()=>{
       setIsChecked(!isChecked);
       setStatus(!isChecked);
    }

    return(
      <div>
     <label className="  text-gray-600 flex gap-3 text-lg ">
      <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-4 h-4 form-checkbox text-blue-500 border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 my-auto "
          />
          {name}
       </label>
       </div>
    )
}

export default Checkbox;