import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import'../App.css';
import BasicDatePicker from './Date';
import InlineDatePicker from './Date';
import Drop from './Drop';
import Dropt from './tdrop';
import Tdrop from './tdrop';
import Searchbar from '../Menu';




export default function Home() {
 
  return (
    <Container>
      <Row >
        
        <Col  > <div className='date'>Select employee dropdown</div></Col>
        <Col > <div className='date1'>Date Picker</div></Col>
      </Row>
      <Row>
      <Col  > <div className='col-drop'> <Drop/></div></Col>
        <Col > <div style={{marginTop:'60px'}}><BasicDatePicker/></div></Col>
      </Row>
      <Row>
      <Col  > <div className='col-drop'> <Drop/></div></Col>
        <Col > <div style={{marginTop:'60px'}}><BasicDatePicker/></div></Col>
      </Row>
      <Row>
      <Col  > <div style={{marginTop:'30px'}} > <Tdrop/></div></Col>
        <Col > <div style={{marginTop:'60px'}}><BasicDatePicker/></div></Col>
      </Row>
      <Row>
      <Col > <div style={{marginTop:'90px'}} ><Searchbar/></div></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      </Row>
    </Container>

  
  )
}
