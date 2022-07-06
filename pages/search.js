import React, { useState } from "react";
import Head from "next/head";
import tw from "tailwind-styled-components";
import Link from "next/link";

const search = () => {

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <div>
      <Head>
        <title>Ride</title>
        <meta name="description" content="Uber Next Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <ButtonContainer>
          <Link href="/">
            <BackButton src="/pics/arrowl.png" />
          </Link>
        </ButtonContainer>
        <InputContainer>
          <FromToIcons>
            <Circle />
            <Line />
            <Square />
          </FromToIcons>
          <InputBoxes>
            <Input placeholder="Enter pickup location" value={pickup} 
            onChange={(e) => setPickup(e.target.value)}/>
            <Input
              placeholder="Where to?"
              value={dropoff} 
              onChange={(e) => setDropoff(e.target.value)}/>
          </InputBoxes>
          <PlusContainer>
            <PlusIcon>+</PlusIcon>
          </PlusContainer>
        </InputContainer>
        <SavedPlaces>
          <StarIcon />
          Saved Places
        </SavedPlaces>
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: pickup,
              dropoff: dropoff,
            },
          }}
        >
          <ButtonContainers>
            <Confirm>Confirm Locations</Confirm>
          </ButtonContainers>
        </Link>
      </Wrapper>
    </div>
  );
};

export default search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
    bg-white px-4 
`;

const BackButton = tw.img`
    h-12 cursor-pointer transform transform hover:scale-105 transition
`;

const InputContainer = tw.div`
    bg-white flex pb-3 px-4
`;

const FromToIcons = tw.div`
    flex flex-col gap-1  w-10 items-center justify-center
`;

const Circle = tw.div`
    h-2 w-2 bg-gray-700 rounded-full
`;

const Line = tw.div`
    h-12 w-0.5 bg-gray-700
`;

const Square = tw.div`
    h-2 w-2 bg-black
`;

const InputBoxes = tw.div`
    flex flex-col flex-1
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-lg p-2  outline-none border-none
`;

const PlusIcon = tw.div`
    text-6xl items-center justify-center flex font-thin bg-gray-200 rounded-full h-10 pb-3 mx-2 
`;

const PlusContainer = tw.div`
    flex items-center
`;

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2 mt-3
`;

const StarIcon = tw.div`
    w-10 h-10 bg-rose-400 rounded-full mr-2
`;

const Confirm = tw.button`
    bg-black p-3 my-2 mx-auto w-80 rounded-lg transform transform hover:scale-105 transition
`;

const ButtonContainers = tw.div`
    flex justify-center
`
