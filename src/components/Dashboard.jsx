import React from "react";
import Table from 'react-bootstrap/Table';

function Dashboard() {
    let data=[
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        },
        {
            Invoice: '#AHGA68',
            Date: '23/09/2022',
            Customer: 'Jacob Marcus',
            Payable: '$100',
            Paid:'$000',
            Due: '$000'
        }
    ]
  
    
  
  return (
   
    <>
      <div      className="rightside">
        <div className="rightcontent">
          <div className="mobilemenu d-block d-sm-none my-2">
            <div className="row align-items-center justify-content-between">
            <a className="logo navbar-brand col-6 m-0" href="#">Guvi Sales</a>
            <div className=" col-6 text-end px-4"> 
              <i className="menuicon fa-solid fa-bars fa-xl" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"></i>
            </div>
           

            </div>
          </div>
          <div      className="search my-3 mx-2 mx-lg-4">
            <form
                   className="d-flex align-items-center justify-content-between"
              role="search"
            >
              <div      className="input-group">
                <input
                       className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <img src="/Images/search-normal.svg" alt="" />
              </div>
              <div      className="bellicon">
                <img src="/Images/Notification.svg" alt="" />
              </div>
            </form>
          </div>

          <div      className="Sales_Information mt-4 mb-3 mx-2 mx-lg-4">
            <h4      className="mb-3">Sales Information</h4>
            <div      className="row">
              <div      className="col-lg-3">
                <div      className="mb-3">
                  <label htmlFor="customer"      className="form-label">
                    Customer
                  </label>
                  <input
                    type="text"
                         className="form-control forms"
                    id="exampleInputtext1"
                    placeholder="Enter Customer Name"
                    aria-describedby="textHelp"
                  />
                </div>
              </div>
              <div      className="col-lg-3">
                <div      className="mb-3">
                  <label htmlFor="Invoice"      className="form-label">
                    Invoice ID
                  </label>
                  <input
                    type="text"
                         className="form-control forms"
                    id="exampleInputtext1"
                    placeholder="Enter Invoice ID"
                    aria-describedby="textHelp"
                  />
                </div>
              </div>
              <div      className="col-lg-3">
                <div      className="mb-3">
                  <label htmlFor="exampleInputEmail1"      className="form-label">
                    Start Date
                  </label>
                  <input
                    type="text"
                         className="form-control forms"
                    id="exampleInputtext1"
                    placeholder="Start Date"
                    aria-describedby="textHelp"
                  />
                </div>
              </div>
              <div      className="col-lg-3">
                <div      className="mb-3">
                  <label htmlFor="exampleInputEmail1"      className="form-label">
                    End Date
                  </label>
                  <input
                    type="text"
                         className="form-control forms"
                    id="exampleInputtext1"
                    placeholder="End Date"
                    aria-describedby="textHelp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div      className="tables mt-2 mx-2 mx-lg-4">
          <Table striped bordered hover>
            <table      className="table">
              <thead>
                <tr>
                  <th scope="row">
                 
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th scope="col">Invoice</th>
                  <th scope="col">Date</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Payable Amount</th>
                  <th scope="col">Paid Amount</th>
                  <th scope="col">Due</th>
                </tr>
              </thead>
              <tbody>
               
                  
                  {
                  data.map((e,i)=>{
                return <tr key={i}>
                        <th scope="row">
                           <input type="checkbox" name="" id="" />
                        </th>
                        <td style={{color:'#0B63F8'}}>{e.Invoice}</td>
                        <td>{e.Date}</td>
                        <td>{e.Customer}</td>
                        <td>{e.Payable}</td>
                        <td>{e.Paid}</td>
                        <td>{e.Due}</td>
                        </tr>
            })
        }
               
                
              </tbody>
            </table>
            </Table>
          </div>
        
        </div>
      </div>
     
    </>
  );
}



export default Dashboard;
