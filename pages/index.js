import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "../components/Map";
import Link from 'next/link';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => { 
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Uber</title>
        <meta name="description" content="Uber Next Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Map />
        <ActionItems>
          <Header>
            <UberLogo>Uber</UberLogo>
            <Profile>
              <Name>{user && user.name}</Name>
              <UserImage
                src={user && user.photoUrl}
                onClick={() => signOut(auth)}
              />
            </Profile>
          </Header>
          <ActionButtons>
            <Link href="/search">
              <ActionButton>
                <ActionButtonImage src="/3dcar.jpg" />
                Ride
              </ActionButton>
            </Link>
            <Link href="/search">
              <ActionButton>
                <ActionButtonImage src="/bike.jpg" />
                2-Wheel
              </ActionButton>
            </Link>

            <Link href="/search">
              <ActionButton>
                <ActionButtonImage src="/calendar.jfif" />
                Reserve
              </ActionButton>
            </Link>
          </ActionButtons>
          <InputButton>Where to?</InputButton>
        </ActionItems>
      </Wrapper>
    </div>
  );
}

const Wrapper = tw.div`
  flex flex-col  h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.div`
  h-28 flex items-center text-4xl text-gray-900 font-semibold
`;

const Profile = tw.div`
  flex items-center 
`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer transform transform hover:scale-105 transition
`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  bg-gray-200 flex flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform transform hover:scale-105 transition text-xl cursor-pointer
`;

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`
