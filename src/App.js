
import './App.css';
import {useEffect, useState} from "react";


function App() {
    const [flightsList,setFlightsList]= useState( []);
  useEffect(()=> {
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(flights => {
          let filter = flights.filter(flights => flights.launch_year !=='2020');
          setFlightsList(filter);
        })
  }, [])
  return (
      <div className="wrap">
          {
              flightsList.map(value => <div key={value.flight_number}>
                  {value.mission_name}-{value.launch_year}
                  <img src={value.links.mission_patch} alt="mission_patch"/>
                  </div>)
          }

      </div>
  );
}

export default App;
