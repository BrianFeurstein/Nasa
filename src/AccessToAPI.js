import React from 'react'

const request = new Request('https://api.nasa.gov/planetary/apod?api_key=DXVHCRnoGnw61YeQVDIIuVr9n0f135yEu6thTH1b');

const url = request.url;
const method = request.method;
const credentials = request.credentials;

const AccessToAPI = () => {
  return (
    <h1>API</h1>
  )
}

export default AccessToAPI


