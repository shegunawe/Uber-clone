import React from 'react'
import tw from "tailwind-styled-components";
import {carList} from "../components/data/Carlist"
import { useEffect, useState } from 'react';

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
  const [rideDuration, setRideDuration] = useState(0)

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2hlZ3VuIiwiYSI6ImNsNGJ0bTB1OTFveG0zZXFpYWZsczJqdjAifQ.ySlqQmg9JARq-SsVGBh2kQ`
    )
      .then((response) => response.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      })
      .catch(err => {
       console.log('caught it!',err);
    });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car Key={index}>
            <CarImage src={car.imgurl} />
            <CarDetails>
                    <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{'$' + (rideDuration * car.multiplier).toFixed(2) }</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 overflow-y-auto flex flex-col
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
    
`;

const Car = tw.div`
    flex p-4 items-center
`;


const CarImage = tw.img`
    h-14 mr-2
`;

const CarDetails = tw.div`
    flex-1
`;

const Service = tw.div`
    text-medium font-semibold
`;

const Time = tw.div`
    text-xs text-blue-500
`;

const Price = tw.div`
    text-sm font-semibold
`;
