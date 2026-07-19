import "./Hero.css";
import Section from "../Common/Section/Section";
import Container from "../Common/Container/Container";
import Btn from "../Common/Btn/Btn";

export default function Event() {
  return (
    <>
      <Section>
        <Container inner="0">
          <div className="Hero">
            <div className="Hero_textLayout">
              <p className="Hero-catch">夢の世界へ、ようこそ！</p>
              <small className="Hero-text">家族や友達と一緒に、最高の思い出を。</small>
              <div className="Hero-btnBox"><Btn url="#" size="Hero" text="チケットを購入する"/></div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
