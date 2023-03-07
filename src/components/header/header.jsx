import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  const img_url = require("/public/logo_black.png");
  return (
    <header class="bg-teal-700 text-white-sticky top-0 z-10 dark:text-white">
      <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <Link href="./" passHref>&#9812; Events Page</Link>
        </h1>
        <div>
          <nav className=" space-x-8 text-xl text-white" aria-label="main">
            <Link replace href="./" class="hover:opacity-90"prefetch={false} >Home</Link>
            <Link replace href="./events" class="hover:opacity-90" prefetch={false} >Events</Link>
            <Link replace href="./about-us" class="hover:opacity-90" prefetch={false} >About us</Link>
          </nav>
        </div>
      </section>
      
    </header>
  );
};
