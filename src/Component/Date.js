import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}   >
        <KeyboardDatePicker className="keybord"
        autoOk
        style={{background:"#F0F5FB" ,color:"#314363" ,width:"369px"}}
        variant="inline"
       placeholder="Pick Date"
        format="MM/dd/yyyy"
        value={selectedDate}
    
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
      />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;