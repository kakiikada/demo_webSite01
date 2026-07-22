import "./TicketCalendar.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  return (
    <>
      <Section>
        <Container>
          <div className="ticketCalendar">
            <h3>ご来援日を選択してください</h3>
            <input id="date" type="date" />
            <p>※価格はすべて税込みです。</p>
            <p>※変更・キャンセルはご来援日の前日まで可能です。</p>
          </div>
        </Container>
      </Section>
    </>
  );
}