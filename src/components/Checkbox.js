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
     <label className="  text-gray-600 flex   gap-4 text-2xl ">
      <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-8 h-8 form-checkbox text-blue-500 border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 "
          />
          {name}
       </label>
       </div>
    )
}

export default Checkbox;