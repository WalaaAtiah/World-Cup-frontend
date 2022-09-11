import {useState,useEffect} from 'react';

// import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'; 
import Time from './Time.js'
import './CupCalendar.css';
import value from "./value.json";

function CupCalendar() {
 const [date, setDate] = useState(new Date())
 const [showTime, setShowTime] = useState(false) 
 const [dateresult, setdateresult] = useState([]) 
 
// console.log(date)

useEffect(()=>{
  displaydate()
},[date])

//  function changeDATE(){
  
//   displaydate()
//  }

   function displaydate(){
    console.log("date.toDateString  in click function",date.toDateString())
     
  let result =value.find(item=>{
    // console.log(item.date)
    
    if (date.toDateString().includes(item.date)){
      console.log(111111111)

      return true;
    }
  })
  
  // console.log("result==undefined",result==undefined)

  setdateresult(result==undefined?[]:result.Matchs);
  //  console.log(dateresult);
   setShowTime(true);
 }

return (
  <div className='Calender'>
  <h1 className='calHeader'>Calendar</h1>
  <div >
   <Calendar onChange={setDate} value={date} onClickDay={displaydate}  />
  </div>
  {/* {console.log("date.length",date.length)} */}
  {date.length > 0 ? (
  <p>
    <span>Start:</span>
    {date[0].toDateString()}
    &nbsp;
    &nbsp;
    <span>End:</span>{date[1].toDateString()}
  </p>
         ) : (
  <p >
     {/* {console.log("date",date)} */}
     
     <span onChange={displaydate} >Default selected date: {date.toDateString()}</span>
     {/* {console.log("date.toDateString() output ",date.toDateString())} */}

  </p> 
         )
  }
  <Time showTime={showTime} date={date}  dateresult={dateresult}/>

</div>
  )

}

export default CupCalendar;



