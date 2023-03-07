import Image from "next/image";
import Link from "next/link";
const EventsCatPage = ({ data,pageName }) => {
  return (
    <div  class="dark:bg-black max-w-4xl mx-auto">
    <section class="flex flex-col-reverse justify-center sm:flex-row p-6 itmes-center gap-8 mb-12 scroll-mt-40 tallscreen:section-min-height widescreen:section-min-height">
     <article class="sm:w-1/2">
            <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                Events in {pageName}
            </h2>
            
        </article>
    </section>
      
        {data.map((ev) => (
          <ul class="list-none mx-14 my-12 flex flex-col sm:flex-row items-center gap-8">
        
          <li class="2/3 sm:w-5/6 flex flex-col items-center border-2 border-solid border-slate-900 dark:border-white bg-white py-7 px-2 rounded-3xl shadow-xl dark:bg-slate-500">
            
             
          <Link key={ev.id}  href={`/events/${ev.city}/${ev.id}`} passHref>
                 <Image class="rounded-lg" width={300}
              height={300}
              alt={ev.title}
              src={ev.image}/>
               </Link>
               <div class="p-5">
                 
                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {ev.title}
                   </h5>
                 
                 <h2 class="text-white">{ev.description}</h2>
                 <br></br>
                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 <Link  Link key={ev.id}  href={`/events/${ev.city}/${ev.id}`} passHref>Read More</Link>
</button>
               </div>
            
             </li>
             </ul>

         
        ))}
      </div>
   
  );
};
export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data,pageName: id  } };
}
