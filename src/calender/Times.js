import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./CupCalendar.css";
import Data from "./value.json";

const time = ["08:00", "09:00", "10:00", "14:00", "15:00"];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(item) {
    let obj = {
      time: item.time,
      countries: item.countries,
      Stadium: item.Stadium,
      Round: item.Round,
    };
    setInfo(true);
    setEvent(obj);
    console.log("obj inside ", obj);
  }

  return (
    <div className="times">
      {/* {console.log("dateresult inside times", props.dateresult)} */}

      {props.dateresult.length ? (
        <div>
          {props.dateresult.map((item) => {
            return (
              <div>
                <button onClick={() => displayInfo(item)}> {item.time} </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>No Matchs on this day </h3>
      )}

      <div>
        
        {info?
        <div>
        <h5 className="h5Calender"> Match details in {props.date.toDateString()} at {event.time} </h5>
        <li className="licalender"> competition teams: {event.countries}  </li>
        <li className="licalender"> stadiums hosting the match: {event.Stadium}  </li>
        <li className="licalender"> Round NO: {event.Round}  </li>
        </div>
          : null}
      </div>
    </div>
  );
}

export default Times;

{
  /* 
   {time.map(times => {
    return (
    <div>
      < button onClick={(e)=> displayInfo(e)}> {times} </button>    </div>
        )
     })} */
}
