import React, {useState,useEffect}from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import pirateStyle  from './Pirate.module.css'
import {Link} from 'react-router-dom'




const PirateShow = () => {
    const {id} = useParams()
    const [pirate,setPirate] = useState({name:"",imageUrl:"",treasureChests:"",catchPhrase:"",crewPosition:"",hook:true,eyePatch:true,pegLeg:true})
useEffect(() => {
    axios.get(`http://localhost:8000/api/pirates/${id}`)
    .then(response => {
        console.log(response.data)
    setPirate(response.data)

    .catch(error => console.log(error))
    })

},[id])
return (
    <div>
        <header className="App-header">
            <h1 className="centerClass">{pirate.name}</h1>
            <button onClick={() => navigate("/pirates")} style={{ alignSelf: 'flex-end' }}>
            Crew Dashboard
            </button>
        </header>

        <div className="pirate-details">

            <div className="pirate-Leftcontent">
                <div>
                    <img src={pirate.imageUrl} alt={pirate.name} />
                    <p className="catch-phrase">"{pirate.catchPhrase}"</p>
                </div>
            <div className="about-section">
                <h2>About</h2>
                <p>Position: {pirate.crewPosition}</p>
                <p>Treasures: {pirate.treasureChests}</p>
                <p>
                    <label>Peg Leg:</label>
                    <span>{pirate.pegLeg ? "Yes" : "No"}</span>
                    {/* <button className={pirate.pegLeg ? "yes-button" : "no-button"} onClick={onCheckPegLeg}>{pirate.pegLeg ? "No" : "Yes"}</button> */}
                </p>
                <p>
                    <label>Eye Patch:</label>
                    <span>{pirate.eyePatch ? "Yes" : "No"}</span>
                    {/* <button className={pirate.eyePatch ? "yes-button" : "no-button"} onClick={onCheckEyePatch}>{pirate.eyePatch ? "No" : "Yes"}</button> */}
                </p>
                <p>
                    <label>Hook Hand:</label>
                    <span>{pirate.hookHand ? "Yes" : "No"}</span>
                    {/* <button className={pirate.hookHand ? "yes-button" : "no-button"} onClick={onCheckHookHand}>{pirate.hookHand ? "No" : "Yes"}</button> */}
                </p>
            </div>
        </div>
        <Link to="/pirates">Back to Pirate Crew Dashboard</Link>
    </div>


    </div>
    )
}

export default PirateShow