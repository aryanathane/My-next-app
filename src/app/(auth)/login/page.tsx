import LoginForm from '@/app/_components/LoginForm'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold text-blue-600 mb-6 text-center'>Login</h1>
      <LoginForm/>
      <p className='mt-4 text-center text-gray-600'>Don't have an account? <Link href="/register" className='text-blue-600 hover:underline font-medium'>Register</Link></p>
    </div>
  )
}

export default LoginPage