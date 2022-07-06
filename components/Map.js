import React from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl"; 
import { useEffect } from 'react';


mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hlZ3VuIiwiYSI6ImNsNGJ0bTB1OTFveG0zZXFpYWZsczJqdjAifQ.ySlqQmg9JARq-SsVGBh2kQ";


const map = ({pickupCoordinates, dropoffCoordinates}) => {
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
        center: [6.614422083563248, 3.3581257429847993],
        zoom: 3,
      });

      if (pickupCoordinates) {
        addToMap(map, pickupCoordinates)
      }

      if (dropoffCoordinates) {
        addToMap(map, dropoffCoordinates);
      }
      
      if (pickupCoordinates && dropoffCoordinates) {
        map.fitBounds([
          dropoffCoordinates, pickupCoordinates
        ], {
          padding: 60
        })
      }
    }, [pickupCoordinates, dropoffCoordinates]);
  
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  }


  return (
      <Wrapper id="map">
          
    </Wrapper>
  )
}

export default map


const Wrapper = tw.div`
  flex-1 h-1/2
`;
