import React from 'react'
import {SignUp} from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
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

export default SignUpPage