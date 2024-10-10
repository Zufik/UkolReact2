import './Light.css'
import { useState } from 'react'
import lightOff from './light-off.svg';
import lightOn from './light-on.svg';


const Light = ({name,state}) => {
    const[lightState, setLightState] = useState(state)

    const handleLight = () =>{
        lightState === 'on' ? setLightState('off')
                            : setLightState ('on')
    }

    return(
        <div onClick={handleLight} className="light">

        <div className="light__icon">
                <img src={lightState === 'on' ? lightOn 
                                              : lightOff} />
      </div>
      <div className="light__name">{name}</div>
    </div>      

    )
}
export default Light