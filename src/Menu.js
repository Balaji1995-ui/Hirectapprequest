import React,{useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Dropdown, DropdownMenu, Input } from "reactstrap";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./App.css";
import { Box, Divider } from "@mui/material";

function Searchbar(){
    const valuesd=[
        {
            Name:"Second opinion"
        },
        {
            Name:"Recall visit"
        },
        {
            Name:"Pain"
        },
        {
            Name:"Prevention"
        }
    ]
    const [ name, setName]=useState(valuesd)
    const [checked, setChecked] =React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    
    const filterNames = e=>{
       
        const search = e.target.value.toLowerCase()
        const filtereNames=valuesd.filter(name => name.Name.toLowerCase().includes(search))
        setName(filtereNames);
    }
 
    return(
        <div>
           <Input type="search" placeholder="Search treatments" style={{color:"#DAE2EF" ,background:"#142A51",paddingLeft:"55px" ,borderradius:'8px'}} onChange={(e)=>filterNames(e)}> </Input><span id="g-search-button"><SearchRoundedIcon/></span>
          
        
{name && name.length > 0 ? (
    name.map((names,index)=>{
        return <div key={index} className="search" >
             <Dropdown className="bd" >
          
            
          <Box sx={{m:.1 ,display:'flex'} }>
                <DropdownItem> {names.Name}    <Checkbox className="check" 
      checked={checked}
     onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
  /> </DropdownItem>
          <Divider/>
         
          </Box>
            </Dropdown> 
       
            </div>
        })):(
           <Dropdown className="search1">
            <DropdownItem  >Not Found</DropdownItem>
           </Dropdown>
        )
}
        </div>
    )
}
export default Searchbar;