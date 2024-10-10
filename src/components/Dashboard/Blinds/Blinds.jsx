import './Blinds.css'
import { useState } from 'react'
import blindsOpenImg from './blinds-open.svg'
import blindsClosedImg from './blinds-closed.svg'

const Blinds = ({state}) => {
    const[open, setOpen] = useState(state)

    return (
    <div className="blinds">
    <div className="blinds__icon">
        <img src={open === 'open' ? blindsOpenImg
                                  : blindsClosedImg} />
    </div>
    <div className="blinds__name">Žaluzie</div>
    <div className="blinds__controls">
      <button
            className={open === 'open' ? 'button button--active' 
                                       : 'button'}
             onClick={() => {setOpen('open');}}>Otevřeno</button>
      <button
             className={open !== 'open' ? 'button button--active' 
                                        : 'button'}
        onClick={() => {setOpen('closed');}}>Zavřeno</button>
    </div>
  </div>
    )
}

export default Blinds