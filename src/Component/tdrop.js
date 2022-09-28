import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import Checkbox from '@mui/material/Checkbox';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

import Ndata from './Ndata';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Autocomplete, Avatar, Divider, OutlinedInput, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import '../App.css';
import AvaterGroups from './Avargroup';
import Tdata from './Tdata';
import { borderRadius } from '@mui/system';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultipleSelectCheckmarks() {
  
    
  const [personName, setPersonName] = React.useState([]);
  const [checked, setChecked] = React.useState([true, false]);
  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event) => {
    setChecked([checked[0],event.target.checked]);
  };

  const childrens =(
    <div style={{background:"#142A51"}}>
        {Ndata.map((value, index)=>{
            return(
                <div>
                    <Box sx={{display:"flex" ,flexDirection: 'column', ml: 3, fontFamily:"Montserrat",fontSize:"13px"  }} >

<MenuItem key={index} style={{background:'#142A51',color:'#DAE2EF' 
}}>

 
<Avatar src={value.cover} sx={{width:"24", height:"24"}}>  </Avatar>
<FormControlLabel  control={<Checkbox checked={checked[0]} onChange={handleChange2}/>}   label={value.Name} value="start" labelPlacement='start'  />

</MenuItem>
</Box>
                    </div>
            )
        })}
    </div>
  )
  const children = (
    <div style={{background:"#142A51"}}>
        {Tdata.map((value,index)=>{
            return(

      <Box sx={{display:"flex" ,flexDirection: 'column', ml: 3 }}>

    <MenuItem key={index}  style={{background:'#142A51',color:'#DAE2EF'
}}>

     
<Avatar src={value.cover} sx={{width:"24", height:"24"}}>  </Avatar>
    <FormControlLabel className="check" control={<Checkbox checked={checked[1]} onChange={handleChange3}/>}   label={value.Name} value="start" labelPlacement='start'  />
    
    </MenuItem>
    </Box>
          )
        })}
    </div>
  );

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
<FormControl sx={{m:2, width:376 }} className='form2'>
        <InputLabel Id="demo-multiple-checkbox-label" >All practitioners</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput  className='label'
            label="All practitioners" /> }
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
            {/* {Ndata.map((value,index)=>{
    return( */}

    <Autocomplete style={{background:"#142A51",color:"#EBF0F6"}}
    id='free-solo-demo'
    options={Ndata.map((value)=>value.Name)}
    renderInput={(params) => <TextField  variant='filled' color='info' {...params} label="search employee"  /> }
 

></Autocomplete>

 
        <MenuItem  style={{background:'#142A51',color:'#DAE2EF'
}} >
  
<AvaterGroups/>

        <FormControlLabel value="start"  labelPlacement='start' 
        label="All employee"
        control={
          <Checkbox  color="secondary" 
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
   

        
         </MenuItem>

         {children}
        <Divider/>
      <MenuItem id="menu" style={{color:"#DAE2EF"}}>
        <FormControlLabel value="start"  labelPlacement='start' color='#314363' className='check'
        label="All Practitioners"
        control={
          <Checkbox    color="secondary"
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
        
        </MenuItem> 
        
       {childrens}
  <Divider/>
  <MenuItem style={{background:"#142A51" ,color:"#EBF0F6"}}>
  <FormControlLabel value="start"  labelPlacement='start' color='#314363' 
        label="All Assistants"
        control={
          <Checkbox  color="secondary"
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
  
  </MenuItem>
  </Select>
  </FormControl>
    </div>
  );
}
