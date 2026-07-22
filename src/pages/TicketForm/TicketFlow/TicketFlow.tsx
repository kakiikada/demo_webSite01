import "./TicketFlow.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  return (
    <>
      <Section>
        <Container>
          <div className="ticketFlow">
            <ol>
              <li><span></span><p>チケットの種類の選択<br />日付の選択</p></li>
              <li><span></span><p>お客様情報の選択</p></li>
              <li><span></span><p></p>確認</li>
              <li><span></span><p>完了</p></li>
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}