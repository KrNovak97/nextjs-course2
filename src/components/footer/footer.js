import Link from "next/link"

export const Footer = () => {
    return(
        
        
          <footer class="bg-teal-700 dark:text-white text-xl mt-auto">
            <section class="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
                <address>
                <h2>Events Page Products, Inc.</h2>
            Uskočka 22<br/>
            52 100 Pula, Croatia
            <h2>Email: Inquires@EventsPage.com</h2>
            <h2>Phone: (+385)52 386-772</h2>
                </address>
                <nav class="hidden md:flex flex-col gap-2" aria-label="footer" >
            <Link href="./events" class="hover:underline">Events</Link>
            <Link href="./about-us" class="hover:underline">About Us</Link>
            
        </nav>
        <div class="flex flex-col sm:gap-2">
            <p class="text-right">Copyright &copy; <span id="year">2023</span></p>
            <p class="text-right">All Rights Reserved </p>
        </div>
            </section>
 
</footer>
    )
}


