import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { useState, useEffect } from "react";

function RentalsMap({locations, google}) {
  const [center, setCenter] = useState();
    useEffect(() => {
      // lines below retrieves the latitude
      var arr = Object.keys(locations)
      var getLat = (key) => locations[key] ["lat"];
      var avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;
      // Lines below retrieves the longitude
      var getLng = (key) => locations[key] ["lng"];
      var avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;

      setCenter({lat:avgLat, lng:avgLng})
  }, [locations])

  return (
    <>
      {center && (
        <Map 
        google={google}
        containerStyle={{
          width: "50vw",
          height: "calc(100vh - 135px)",
        }}
        center={center}
        initialCenter={locations[0]}
        zoom={13}
        disableDefaultUI={true}
        >
          </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCDcT4jfj3ayd2bYz20Ita_8321onkmx6U"
}) (RentalsMap);
