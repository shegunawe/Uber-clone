import React, {useEffect} from 'react'
import tw from "tailwind-styled-components";
import {useRouter} from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import {auth, provider} from '../firebase'
import Head from "next/head";

const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
      <div>
        <Head>
          <title>Login</title>
          <meta name="description" content="Uber Next Clone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Wrapper>
          <UberLogo>Uber</UberLogo>
          <Title>Log in to access your account</Title>
          <Driver src="/uberdrive.png" />
          <SignInButton onClick={() => signInWithPopup(auth, provider)}>
            Sign in with google
          </SignInButton>
        </Wrapper>
      </div>
    );
}

export default Login


const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-200 w-screen p-4
`

const SignInButton = tw.button`
    bg-black text-center text-white py-4 mt-4 self-center w-full 
`;

const UberLogo = tw.div`
  h-28 flex items-center text-4xl text-gray-900 font-semibold self-start
`;

const Title = tw.div`
    text-5xl pt-4 text-gray-500
`

const Driver = tw.img`
 h-full object-contain mt-4
`