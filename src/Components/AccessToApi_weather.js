import React, { useEffect, useState } from "react";

export default function MarsWeatherData() {
  let [solHours, setSolHours] = useState([]);
  const getData = () => {
    fetch(
      "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
    )
      .then((response) => response.json())
      .then(function (data) {
        setSolHours(data.validity_checks[1148].AT.sol_hours_with_data);
       
      });
  };

  useEffect(() => {
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
