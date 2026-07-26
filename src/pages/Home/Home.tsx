
import Hero from "./Hero/Hero";
import Attraction from "./Attraction/Attraction";
import Event from "./Event/Event";
import Ticket from "./Ticket/Ticket";
import Access from "./Access/Access";
import Schedule from "./Schedule/Schedule";
import TicketInformation from "./TicketInformation/TicketInformation";

function Home() {
  return (
    <>
    <main>
        <Hero />
        <div className="contentBg-wave">
          <Attraction />
          <Event />
        </div>
        <Ticket />
        <Access />
        <Schedule />
        <div className="contentBg--secondary">
          <TicketInformation />
        </div>
    </main>
    </>
  );
}

export default Home;