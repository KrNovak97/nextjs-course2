import { Calistoga } from "@next/font/google";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const EventPage = ({ data }) => {
  const {data: session, status} = useSession({required:true});
  const inputEmail = useRef();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST", headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({email:emailValue,eventId})
      });
      if(!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
    } catch (e) {
      console.log("ERROR", e);
    }
  };
  if(status === 'authenticated')
  {

  return (
    <div class="text-white dark:bg-black max-w-4xl mx-auto">
       <section class="flex flex-col-reverse justify-center sm:flex-row p-6 itmes-center gap-8 mb-12 scroll-mt-40 tallscreen:section-min-height widescreen:section-min-height">
       <article class="sm:w-1/2">
       <h2 class="text-4xl">{data.title}</h2>
       </article>
       </section>
      <Image
        src={data.image}
        width={800}
        height={500}
        alt={data.title}
      ></Image>
     
     <p class="  mt-4 text-center text-lg sm:text-left text-slate-700 dark:text-white">{data.description}</p>
      <form onSubmit={onSubmit} class="relative top-8 ">
        <label class="relative text-white text-2xl top-3">Get Registered for this event!</label>
        <section class="relative flex justify-center sm:flex-row p-6 itmes-center gap-8 mb-12 scroll-mt-40">
        <div class="relative">
        <input ref={inputEmail} type="email" id="email" class="relative rounded-t-lg px-2.5 pb-2.5 pt-5  text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer w-96 -left-40" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] -left-36 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your Email!</label>
    </div>
    <button type="submit" class=" relative bg-blue-100 text-black h-12 w-40 -left-40">Submit</button>
    </section>
   
   
        
        
      </form>
    </div>
  );
};
}

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: { data: eventData },
  };
}
