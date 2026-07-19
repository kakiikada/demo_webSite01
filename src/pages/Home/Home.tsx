
import Hero from "../../components/Hero/Hero";
import Attraction from "../../components/Attraction/Attraction";
import Event from "../../components/Event/Event";
import Ticket from "../../components/Ticket/Ticket";
import Access from "../../components/Access/Access";
import Schedule from "../../components/Schedule/Schedule";

function Home() {
  return (
    <>
    <main>
        <Hero />
        <div className="home-contentBg">
          <Attraction />
          <Event />
          <Ticket />
          <Access />
          <Schedule />
        </div>
    </main>
    </>
  );
}

export default Home;