import './Dashboard.css'
import Lights from './Lights/Lights'
import Climate from './Climate/Climate'
import Blinds from './Blinds/Blinds'
import Energy from '../Energy/Energy'
//props data lights, climate, blinds, energyConsumption


const Dashboard = ({data}) =>{

    return <div>
        <main className="dashboard">
            
        <Lights lights={data.lights}/>
        <Climate temperature={data.climate.temperature} 
                 humidity={data.climate.humidity}/>
        <Blinds state={data.blinds.state}/>
        <Energy electricity={data.energyConsumption.electricity}
                water={data.energyConsumption.water}/>

        </main>
    </div>
}

export default Dashboard