import { DotSpinner, Jelly, LeapFrog, LineWobble , Metronome,Ping,RaceBy,Ripples,Ring,SuperBalls,Waveform,Wobble
} from "@uiball/loaders";
function Loader(){
    return(
        <div className="mx-auto">
        <Waveform
 
        size={40}
        lineWeight={5}
        speed={2} 
        color="#1976D2" 
       />  
       </div>
    )
}

export default Loader; 