
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
        </div>
        <Ticket />
        <Access />
        <Schedule />
    </main>
    </>
  );
}

export default Home;