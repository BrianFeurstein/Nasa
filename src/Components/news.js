import React, { useEffect, useState } from "react";

export default function NewsData() {
  let [news, setnews] = useState([]);
  const getData = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-02-17&sortBy=publishedAt&apiKey=747caea531ef4d0a8f862b050fd573dd"
    )
      .then((response) => response.json())
      .then(function (data) {

        setnews(getData);
       
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
      <h2>Daily News in Austria</h2>
      <div id="outputData">
        {getOutput()}
      </div>
    </div>
  );
}
