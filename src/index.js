import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import './index.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  function disabledDates({ date }) {
    return date.getDay() === 0 || date.getDay() === 1;
  }
 
  function tileClassName({date}) {
      // Check if a date React-Calendar on the listed ranges of dates to use it's class  
      if ((date.getDay() === 3 || date.getDay() === 4|| date.getDay() === 5) && (date >new Date())) {
        return "standerd"
      }
      if (date.getDay() === 2 && date> new Date()){
        return "overnight"
      }

      if (date.getDay() === 6 && date> new Date()){
        return "saturday"
      }
  }



  function tileContent({date}) {
      if ((date.getDay() === 3 || date.getDay() === 4|| date.getDay() === 5) && (date >new Date())) {
        return <p>$9.99</p>
      }
      if (date.getDay() === 2 && date> new Date()){
        return <p>$79.99</p>
      }

      if (date.getDay() === 6 && date> new Date()){
        return <p>$9.99</p>
      }
  }


  function Day({date}){
      var days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
      var dayName = days[date.getDay()];
      return dayName
  }


  function Month({date}){
  var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
  var monthName = months[date.getMonth()];
    return monthName
  }


  return (
    <>
      <div className= "content">
        <div>
        <Calendar onChange={onChange} value={date} tileDisabled={disabledDates} tileClassName={tileClassName} tileContent={tileContent}/><br/><br/>
        </div>

        <div style={{marginLeft:10}}>
          <h3>DELIVERY DATE</h3>
          <p>Select the day you wish to receive your order.</p>
          <p>Our products ship frozen- please make sure you</p>
          <p>  plan ahead and save time for thawing</p>
          <br/>
          <p> <span className="standerd-box"/>   Standard - $9.99</p>
          <p> <span className="overnight-box"/>   Overnight - $79.99</p>
          <p> <span className="saturday-box"/>   Saturday - $9.99</p>
        </div> 
      </div>
      <div> 
          <p style={{ display: 'inline-block', margin:10}}> <span className={`${tileClassName({date})}-box`}/> You have selected {Day({date})} Shipping - {tileContent({date})}. Your package will arrive on : <b> 
          {Month({date})}   {date.getDate()}</b></p>
      </div>
    </>
  );
};

render(<ReactCalendar />, document.querySelector("#root"));