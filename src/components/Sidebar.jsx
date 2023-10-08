import React from 'react'


function Sidebar() {
  return <>
          <nav className="sidenav sidebar-sticky flex-md-nowrap p-0 offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <ul className="nav flex-column">
                    <div className='d-flex justify-content-between'>
                    <a className="logo navbar-brand col-sm-2 col-md-2 mr-0 mb-3" href="#">Guvi Sales</a>
                    <button type="button" class="btn-close my-4 mx-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <img src="/Images/Dashboard.svg" alt=""  className="px-2"/>
                            <span style={{color:'#013CC6',opacity:'100%'}}>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="/Images/Lab test.svg" alt=""  className="px-2"/>
                            Lab Test
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="/Images/Appointment.svg" alt=""  className="px-2"/>
                            Appointment
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="/Images/Medicine Order.svg" alt="" className="px-2"/>
                            Medicine Order
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="/Images/Message.svg" alt=""  className="px-2"/>
                            Message
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="/Images/Payment.svg" alt=""  className="px-2"/>
                            Payment
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <img src="/Images/setting.svg" alt=""  className="px-2"/>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>



  </>
    
  
}

export default Sidebar