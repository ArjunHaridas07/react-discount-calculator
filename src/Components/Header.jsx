import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
<MDBNavbar  style={{backgroundColor:'#040b0b'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img style={{height:'50px'}}
              src='https://cdn4.vectorstock.com/i/1000x1000/94/98/calculator-icon-on-black-background-flat-vector-25959498.jpg'
              height='40'
              alt=''
              loading='lazy'
            /> 
          <h4>Discount Calculator</h4>  
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    
    </div>
  )
}

export default Header