import "./Hero.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function Event() {
  return (
    <>
      <Section>
        <Container inner="0">
          <div className="hero">
            <div className="hero_textLayout">
              <p className="hero-catch">夢の世界へ、ようこそ！</p>
              <small className="hero-text">家族や友達と一緒に、最高の思い出を。</small>
              <div className="hero-btnBox"><Btn url="/TicketForm" size="hero" text="チケットを購入する"/></div>
            </div>
          </div>
          <div className="heroBg"></div>
        </Container>
      </Section>
    </>
  );
}
