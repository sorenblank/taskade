"use client"

import Image from "next/image";
import Link from "next/link";
import { header, navigation } from "../lib/constants";
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import Button from "./Ui/Button";

const Header = () => {

    // Initializing router and state for navigation toggle
    const [openNavigation, setOpenNavigation] = useState(false);

    /**
     * Toggles the navigation menu visibility and page scroll.
     */
    const toggleNavigation = () => {
      const isNavigationOpen = !openNavigation;
      setOpenNavigation(isNavigationOpen);
  
      // Disabling page scroll when navigation is open
      if (isNavigationOpen) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
    };
  
    /**
     * Handles navigation link clicks.
     * Closes the navigation menu and enables page scroll if open.
     */
    const handleClick = () => {
      if (openNavigation) {
        enablePageScroll();
        setOpenNavigation(false);
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
            className="aspect-square object-contain"/>
          <h1 className="font-roboto text-[0.7em] font-bold text-[#6f79fa]">{header.title}<span className="text-[485c7e]"></span></h1>
        </a>
        <nav className={`${openNavigation ? 'flex border-t' : 'hidden'} fixed top-[4.5rem] left-0 right-0 bottom-0 bg-white lg:bg-transparent lg:static lg:flex lg:ml-auto`}>
          <div className="hidden sm:flex relative items-center justify-center my-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className="text-[#25221e] font-roboto text-[16px] font-medium tracking-wider text-text px-4 py-2 rounded-md hover:bg-indigo-100 whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
            
            <div className="border-solid border-[1px] h-[24px] w-full border-neutral-200 mx-2">

            </div>

            <Link
                key="login"
                href="/login"
                className="text-[#25221e] font-roboto text-[16px] tracking-wider font-medium text-text px-4 py-2 rounded-md hover:bg-indigo-100 whitespace-nowrap">
                  Login
            </Link>

            <Button type="primary" href="/login" className="ml-1">
              Start for free
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;