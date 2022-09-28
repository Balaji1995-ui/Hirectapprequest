import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Avatar from 'react-avatar';
import Ndata from './Ndata';

import  {DropdownItem,DropdownMenu,ButtonDropdown,DropdownToggle,Row,Col,Dropdown} from "reactstrap"; 
import AvaterGroups from './Avargroup';



export default function Drop() {
    const [dropDownopen, setOpen]= useState(false);
  return (
    <div style={{padding:'25px'}} >


     <Dropdown  toggle={()=>{setOpen(!dropDownopen)}} isOpen={dropDownopen}  >
<DropdownToggle className='dropdown text-center  fs-6 text' style={{background:"#F0F5FB" ,color:"#7E98BA"}}  caret >
    <div className='avatar'>
<AvaterGroups />
</div>
<span style={{fontSize:"13px",fontweight:500}}>
Select employee
</span>
 

</DropdownToggle>

<DropdownMenu  className='Dmenu'>
    {Ndata.map((value,index)=>{
        return(


<DropdownItem className='item' key={index}>  <span><Avatar name='' src={value.cover} round="50px"  size={40}/>{'   '}{value.Name} </span></DropdownItem>

)
}) }
    
</DropdownMenu>

      </Dropdown> 
       
    </div>
  )
}
