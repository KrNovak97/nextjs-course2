import Link from "next/link";
import React from "react";
import Image from "next/image";
import {useSession,signIn, signOut} from 'next-auth/react'
export const Header = () => {
  const {data: session} = useSession();
  const img_url = require("/public/logo_black.png");
 
    return(
<header class="bg-teal-700 text-white-sticky top-0 z-10 dark:text-white">
      <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <Link href="./" passHref>&#9812; Events Page</Link>
        </h1>
        <div>
          <nav className=" space-x-8 text-xl text-white" aria-label="main">
            <Link  href="/" class="hover:opacity-90"passHref legacyBehavior><a>Home</a></Link>
            <Link  href="/events" class="hover:opacity-90" passHref legacyBehavior><a>Events</a></Link>
            <Link  href="/about-us" class="hover:opacity-90" passHref legacyBehavior><a>About us</a></Link>
            <button onClick={signIn}>Sign In</button>
          </nav>
        </div>
      </section>
      
    </header>
  )}
