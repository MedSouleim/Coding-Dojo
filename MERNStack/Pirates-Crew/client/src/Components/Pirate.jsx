import React from 'react'
import pirateStyle  from './Pirate.module.css'
import {Link} from 'react-router-dom'

const Pirate = ({pirate,deletePirate}) => {
    return (
        
        <div style={{width:"800px", display:"flex",justifyContent:"space-around",height:"200px"}} className="{pirateStyle.pirate}">

            <img src={pirate.imageUrl} alt={pirate.name} className="pirate-img" />
                {/* <h2>{pirate.name}</h2> */}
            <div>
                <h2>{pirate.name}</h2>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Link className='btn btn-primary btn-md mx-2' style={{width:"150px", height:"40px"}} to={`/pirates/${pirate._id}/show`}>View Pirate</Link>
                        <button className={pirateStyle.button_delete} onClick={()=> deletePirate(pirate._id)}>Walk the Plank</button>
                    </div>
                    
                </div>
            </div>
                
        </div>
    )
}

export default Pirate