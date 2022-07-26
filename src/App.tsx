import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import AuthContextProvider from "./contexts/AuthContext/AuthContext";
import RootNavigator from "./navigation";
import { store } from "./redux/store";
import './App.css'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';

const App=() => {

  const [date, setDate] = useState(new Date())
  // console.log("Selected Date", date)
  const locale = 'fr-CA'; 
  return (
    // <ReduxProvider store={store}>
    //   <AuthContextProvider>
    //     <RootNavigator />
    //   </AuthContextProvider>
    // </ReduxProvider>
<div>
      <h1>React Calendar</h1>
    <div className="react-calendar">
      <Calendar onChange={setDate} value={date}
      defaultView={'month'}
      // next2Label={false}
      next2Label={ null }
      prev2Label = {null}
      showDoubleView={false}
      // onClickDay={(event,va) => alert(event)}
       />
    </div>
    <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
