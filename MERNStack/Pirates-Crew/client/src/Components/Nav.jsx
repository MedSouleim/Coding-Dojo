import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="border-bottom border-2 p-3">
            <div className="d-flex justify-content-around">
                <h2 className='text-warning'>Pirate Crew</h2>
                <Link className='btn btn-primary btn-md mx-2' style={{width:"100px", height:"40px"}} to={`/pirates/new`}>Add Pirate</Link>

            </div>
        </div>
    )
}

export default Nav