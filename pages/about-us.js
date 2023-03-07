import Image from "next/image";
import img from "/public/img.png"
const AboutUsPage = () => {
  return (
    <body class="flex flex-col min-h-screen text-white">
      <h1 class="text-3xl mt-5 object-center text-center">About us Page</h1>
      <p class="text-center mt-12 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ul class="list-none ml-[14rem] mr-[8rem] my-12 flex flex-col sm:flex-row items-center gap-8">
        
          <li class="w-100% sm:w-5/6 flex flex-col items-center py-7 px-2 rounded-3xl shadow-xl">
      <Image class="object-center relative -z-0"
        src={img}
        alt="Our Logo"
        width="350"
        height="350"
      ></Image>
      </li>
      </ul>
      <p class="text-center mt-12 text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </body>
  );
};
export default AboutUsPage;
