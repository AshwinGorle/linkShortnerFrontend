import { DotSpinner, Jelly, LeapFrog, LineWobble , Metronome,Ping,RaceBy,Ripples,Ring,SuperBalls,Waveform,Wobble
} from "@uiball/loaders";
function Loader({size, color}){
    return(
        <div className="mx-auto">
        <Waveform
 
        size={size ? size : 40}
        lineWeight={5}
        speed={2} 
        color= {color ? color : "#1976D2"} 
       />  
       </div>
    )
}

export default Loader; 