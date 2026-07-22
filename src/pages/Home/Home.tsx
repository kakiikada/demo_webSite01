
import Hero from "./Hero/Hero";
import Attraction from "./Attraction/Attraction";
import Event from "./Event/Event";
import Ticket from "./Ticket/Ticket";
import Access from "./Access/Access";
import Schedule from "./Schedule/Schedule";

function Home() {
  return (
    <>
    <main>
        <Hero />
        <div className="home-contentBg">
          <Attraction />
          <Event />
        </div>
        <Ticket />
        <Access />
        <Schedule />
    </main>
    </>
  );
}

export default Home;