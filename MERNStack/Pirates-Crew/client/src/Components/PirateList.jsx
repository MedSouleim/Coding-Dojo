import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pirate from './Pirate'
import {Link} from 'react-router-dom'


const PirateList = (props) => {
    const [pirates,setPirates] = useState([])

    const deletePirate = (id) =>{
        console.log("PIRATE ID",id,"WILL BE DELETED");
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
        .then(response => {
            console.log(response)
            const filteredPirates = pirates.filter(pirate => pirate._id != id)
            setPirates(filteredPirates)


        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
        .then(serverResponse => {
            console.log("SERVER RESPONSE ✅",serverResponse.data);
            setPirates(serverResponse.data)
        })
        .catch(serverError => {
            console.log("SERVER ERROR ⛔",serverError);
        })

    }, [])
    return (

        
        <>
        <div className="border-bottom border-2 p-3">
            <div className="d-flex justify-content-around">
                <h2 className='text-warning'>Pirate Crew</h2>
                <Link className='btn btn-primary btn-md mx-2' style={{width:"100px", height:"40px"}} to={`/pirates/new`}>Add Pirate</Link>

            </div>
        </div>
        {/* <h2>{JSON.stringify(notes)}</h2> */}
        {pirates.map(pirate => <Pirate  key={pirate._id} pirate={pirate} deletePirate={deletePirate}/>)}
        </>
    )
}

export default PirateList