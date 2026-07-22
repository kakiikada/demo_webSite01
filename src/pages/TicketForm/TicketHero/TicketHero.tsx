import "./TicketHero.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Title from "../../../components/Common/Title/Title";

export default function Ticet() {
  return (
    <>
      <Section>
        <Container inner="0">
          <div className="ticketHero">
            <div className="ticketHero_textLayout">
              <p>簡単ステップで今すぐ購入</p>
              <h2><Title text="チケットを購入する" /></h2>
              <p>ご来援日を選んでチケットを購入できます。</p>
            </div>
          </div>
          <div className="ticketHeroBg"></div>
        </Container>
      </Section>
    </>
  );
}