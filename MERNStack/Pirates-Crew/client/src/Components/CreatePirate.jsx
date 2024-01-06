import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'


const CreatePirate = (props) => {
    const navigate = useNavigate()
    const [pirate,setPirate]=useState("")
    const[errors,setErrors]=useState({name:'',catchPhrase:"" ,treasureChests:""})
    const formHandler = (e)=>{
        e.preventDefault()
        console.log("SUBMITTED Pirate ",pirate)
        axios.post("http://localhost:8000/api/pirates",pirate)
        .then(serverResponse => {
            console.log(serverResponse);
            setPirate({name:"",catchPhrase:"",imageUrl:"" ,numberOfTreasure:"",hook:false,eyePatch:false,pegLeg:false});
            navigate('/')
        })

        .catch(error=> {
            const errs = {name:'',catchPhrase:"" ,imageUrl:"",crewPosition:"",treasureChests:""}
            for(let key of Object.keys(error.response.data)){
                errs[key]=error.response.data[key].message
            }
            console.log(error)
            setErrors({...errors,...errs})
    
        })
    
    
    }
    return (

        <>
        <div className='d-flex'>
            <h1>Add a Pirate </h1>
            <Link to={'/'}> <button style={{marginLeft:"200px"}}>Crew Board</button></Link>
        </div>
        <form onSubmit={formHandler}>

            <p>Name<input type="text" 
                onChange={(e)=> setPirate({...pirate,name:e.target.value})}
                value={pirate.name}
                /></p>
            {errors.name && <span className='text-danger h5'>{errors.name}</span>}


            Crew Position
            <select
                onChange={(e) => setPirate({ ...pirate, crewPosition: e.target.value })}
                value={pirate.crewPosition}
            >
                <option value="Captain">Captain</option>
                <option value="First Mate">First Mate</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Cabin Boy">Cabin Boy</option>
            </select>
            {errors.crewPosition && <span className='text-danger h5'>{errors.crewPosition}</span>}

    


            <p>Image<input type="text" 
                onChange={(e)=> setPirate({...pirate,imageUrl:e.target.value})}
                value={pirate.imageUrl}
                /></p>
            {errors.imageUrl && <span className='text-danger h5'>{errors.imageUrl}</span>}

            <p>Number of Treasures<input type="number" 
                onChange={(e)=> setPirate({...pirate,treasureChests:e.target.value})}
                value={pirate.treasureChests}
                /></p>
            {errors.treasureChests && <span className='text-danger h5'>{errors.treasureChests}</span>}
            <p>Catch Phrase<input type="textarea" 
                onChange={(e)=> setPirate({...pirate,catchPhrase:e.target.value})}
                value={pirate.catchPhrase}
                /></p>
            {errors.catchPhrase && <span className='text-danger h5'>{errors.catchPhrase}</span>}

            <p>Hook<input type="checkbox" 
                onChange={(e)=> setPirate({...pirate,hook:e.target.checked})}
                value={pirate.hook}
                /></p>
            <p>Eyepatch<input type="checkbox" 
                onChange={(e)=> setPirate({...pirate,eyePatch:e.target.checked})}
                value={pirate.eyePatch}
                /></p>
            <p>PegLeg<input type="checkbox" 
                onChange={(e)=> setPirate({...pirate,pegLeg:e.target.checked})}
                value={pirate.pegLeg}
                /></p>
            <button type='submit'>Submit</button>
        </form>
   
   
    <div className="container"></div>

    </>
    )
}

export default CreatePirate