import Image from "next/image";
import Link from "next/link";
const EventsPage = ({ data }) => {
  return (
    <div class="dark:bg-black max-w-4xl mx-auto">
      <section class="flex flex-col-reverse justify-center sm:flex-row p-6 itmes-center gap-8 mb-12 scroll-mt-40 tallscreen:section-min-height widescreen:section-min-height">
      <h2 class=" text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">Check out all events here!</h2>
      
      </section>
      <hr class="m-auto bg-black dark:bg-white w-1/2 items-center"/>
        {data.map((ev) => (
          
        
          <ul class="list-none mx-48 my-12 flex flex-col sm:flex-row items-center gap-8">
        
          <li class=" flex flex-col items-center border-2 border-solid border-slate-900 dark:border-white bg-white py-7 px-2 rounded-3xl shadow-xl dark:bg-slate-500">
            
             
               <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
                 <Image class="rounded-lg" alt={ev.title} src={ev.image} height={300} width={300}/>
               </Link>
               <div class="p-5">
                 <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {ev.title}
                   </h5>
                 </Link>
                 <h2 class="text-white">{ev.description}</h2>
                 <br></br>
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
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
