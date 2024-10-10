import './Lights.css'
import Light from './Light/Light'

const Lights = ({lights}) => {
    return (
        <div className='lights'>
            {lights.map (({name,state}) =>{
                return <Light name={name} state={state} key = {name}/>
            })}


        </div>
    )
}

export default Lights