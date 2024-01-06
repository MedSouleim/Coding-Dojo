import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from "./Components/Nav"
import PirateList from "./Components/PirateList"
import Pirate from "./Components/Pirate"
import PirateShow from "./Components/PirateShow"
import CreatePirate from "./Components/CreatePirate"



function App() {

  return (
    <div className='container'>
      {/* <Nav /> */}

      {/* ROUTES */}

      <Routes>
        {/* Pirates list Route */}
        <Route path='/pirates' element={<PirateList/>}/>
        {/* One Pirate Route */}
        <Route path='/pirates/:id/show' element={<PirateShow/>}/>

        {/* Create Pirate Route */}
        <Route path='/pirates/new' element={<CreatePirate/>}/>
        {/* Edit Note Route */}
        {/* <Route path='/pirates/:id/edit' element={<PirateEdit/>}/> */}
        <Route path='*' element={<Navigate to='/pirates' replace/>}/>      
      </Routes>
    
    </div>
    
  )
}

export default App
