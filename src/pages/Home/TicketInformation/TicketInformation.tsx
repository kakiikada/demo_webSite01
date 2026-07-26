import "./TicketInformation.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function TicketInformation() {
  return (
    <>
      <Section>
        <Container>
          <div className="TicketInformation" id="TicketInformation">
            <div className="TicketInformation_left">
              <h2 className="TicketInformation-title">お得なチケット情報</h2>
              <p>オンラインでの購入がお得！限定クーポンも配布中！</p>
            </div>
            <div className="TicketInformation_right">
              <Btn url="/TicketForm" size="TicketInformation" text="チケットを購入する"/>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
