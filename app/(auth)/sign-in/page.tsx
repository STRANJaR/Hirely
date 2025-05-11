import {SignIn} from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formFieldInput: 'border-2 border-gray-300 rounded-md p-2',
            formButtonPrimary: 'bg-blue-500 text-white rounded-md p-2',
          },
        }}
      />
    </div>
  )
}

export default SignInPage