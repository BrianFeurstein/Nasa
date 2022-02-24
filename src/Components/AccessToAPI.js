import React, { useState, useEffect } from "react";

export default function MarsData() {
  const [Users, fetchData] = useState([]);

  const getData = () => {
    fetch(
      "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>React Fetch API Example</h2>
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
  );
}
