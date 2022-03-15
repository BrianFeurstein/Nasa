import React, { useEffect, useState } from "react";

export default function Earth() {
  let [solHours, setSolHours] = useState([]);

  function getCurrentDate(){
    let date =  new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
  }
  const getData = () => {
    fetch(
      "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date="+year+"-"+month+"-"+day+"&api_key=H1yMn7ARi7z1463muFCk6FqTa5gZhWiIdNYBcIMy"
    )
      .then((response) => response.json())
      .then(function (data) {
       // setSolHours(data.validity_checks[1148].AT.sol_hours_with_data);
       
      });
  };

  useEffect(() => {
    getCurrentDate();
    getData();
  }, []);

  function getOutput() {
    let output = [];
    solHours.forEach(data => {
      output.push(<div>{data}</div>)
    });
    return output;
  }

  return (
    <div>
      <h2>React Fetch API Example</h2>
      <div id="outputData">
        {getOutput()}
      </div>
    </div>
  );
}
