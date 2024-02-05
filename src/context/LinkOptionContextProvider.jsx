import { useState } from "react"
import linkOptionContext from "./linkOptionContext"
const LinkOptionContextProvider = ({children})=>{
   const [customLink , setCustomLink] = useState(false);
   const [linkPassword, setLinkPassword] = useState(false);
   const [linkDate, setLinkDate] = useState(false);
   const [linkQR, setLinkQR] = useState(false);

   return(
    <linkOptionContext.Provider value={{customLink, setCustomLink,linkPassword, setLinkPassword, linkDate, setLinkDate, linkQR , setLinkQR}}>
           {children}
    </linkOptionContext.Provider>
   )
}

export default LinkOptionContextProvider;