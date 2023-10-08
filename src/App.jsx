import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'


function App() {
  

  return <>
    <div className="container-fluid">
        <div className="row">
        
         <Sidebar/>
         <Dashboard/>

     </div>
     </div>

        

    </>
  
}

export default App
