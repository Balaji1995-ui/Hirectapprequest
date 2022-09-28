import React from "react";
import Avatar from "@mui/material/Avatar";
import Ndata from "./Ndata";
import AvatarGroup from "@mui/material/AvatarGroup";
import { width } from "@mui/system";



function AvaterGroups(){

    return(
    <div  >
             <AvatarGroup max={2}  sx={{boxSizing:"4px" }} >
                            {Ndata.map((value, index)=>{
                                return(
      <Avatar  key={index}  alt="Shefali Jain" src={value.cover}   />
    )})}
    </AvatarGroup>
  
    </div>
          
   
    )
}
export default AvaterGroups;