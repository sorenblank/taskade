"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Ui/Button';
import { header } from '../lib/constants';
import { useStore } from '../lib/store';

const page = () => {
  const router = useRouter();
  const { loggedIn, login } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
      router.push('/app');
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin') {
      login();
      router.push('/app');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <div className="mx-[24px] flex justify-between">
        <a href="/" className="flex flex-row items-center gap-[10px] py-6">
          <Image
            src={header.icon}
            width={40}
            height={40}
            alt={header.title}
            className="aspect-square object-contain" />
          <h1 className="font-roboto text-[0.7em] font-bold text-[#6f79fa]">{header.title}<span className="text-[485c7e]"></span></h1>
        </a>

        <Button type="primary" href="/register" className="my-auto">
          Sign Up Account
        </Button>
      </div>

      {/* Login Form */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
        <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? {' '}
            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default page;