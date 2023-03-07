import Link from "next/link";
import Image from "next/image";
export const HomePage = ({ data }) => (

  <div  class="dark:bg-black max-w-4xl mx-auto">
    <section class="flex flex-col-reverse justify-center sm:flex-row p-6 itmes-center gap-8 mb-12 scroll-mt-40 tallscreen:section-min-height widescreen:section-min-height">
     <article class="sm:w-1/2">
            <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                We Help <span class="text-indigo--700 dark:text-indigo-300"> you book your event</span> in matter of seconds
            </h2>
            <p class="max-w-md text-2xl mt-4 text-center sm:tect-left text-slate-700 dark:text-slate-700">
                Check out newest events worldwide and book your tickets before they are gone!
            </p>
            <p class="max-w-md text-2xl mt-4 text-center sm:tect-left text-slate-700 dark:text-slate-700">
                Events Page&#174;
            </p>
        </article>
    </section>
    <hr class="mx-auto bg-black dark:bg-white w-1/2"/>
    {data.map((ev) => (
      
      <ul class="list-none ml-[14rem] mr-[8rem] my-12 flex flex-col sm:flex-row items-center gap-8">
        
          <li class="w-100% sm:w-5/6 flex flex-col items-center border-2 border-solid border-slate-900 dark:border-white bg-white py-7 px-2 rounded-3xl shadow-xl dark:bg-slate-500">
            
             
               <Link className=" card" key={ev.id} href={`/events/${ev.id}`} passHref>
                 <Image class="rounded-lg" alt={ev.title} src={ev.image} height={300} width={300}/>
               </Link>
               <div class="p-5">
                 <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {ev.title}
                   </h5>
                 </Link>
                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  <Link key={ev.id} href={`/events/${ev.id}`} passHref>Read More</Link>
</button>
               </div>
            
             </li>
             </ul>
             
          
         ))
        }
      </div>

);
