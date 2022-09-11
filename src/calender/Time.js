import {useState} from 'react';
import Calendar from 'react-calendar';
import './CupCalendar.css';
import Times from './Times.js'

function Time(props) {
 return (
 <div>
   
  {props.showTime ? <Times date={props.date} dateresult={props.dateresult}/> : null}
 </div>
  )
}

export default Time;