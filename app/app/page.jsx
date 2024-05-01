"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { header } from '../lib/constants';
import Image from 'next/image';

const page = () => {
  const router = useRouter();
  const loggedIn = localStorage.getItem('loggedIn')

  useEffect(() => {
    if (!loggedIn) {
      router.push('/login');
    }
  }, [loggedIn]);

  return (
    <>
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
  </div>

  <div className='flex flex-col max-w-[600px] mx-auto'>

    <div>
      <p className='font-graphik text-text'>Projects</p>
    </div>

    <div>

    </div>
    <div>

    </div>
    <div>

    </div>

    <div>

    </div>
    
  </div>
  </>
  );
};

export default page;