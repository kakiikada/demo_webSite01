import "./TicketConfirm.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  return (
    <>
      <Section>
        <Container>
          <div className="ticketConfirm">
            <h4>お客様情報</h4>
            <ul>
              <li>
                <p><span>お名前</span><span>山田 太郎</span></p>
              </li>
              <li>
                <p><span>フリガナ</span><span>ヤマダ タロウ</span></p>
              </li>
              <li>
                <p><span>メールアドレス</span><span>dreamLand@sample.com</span></p>
              </li>
              <li>
                <p><span>電話番号</span><span>0000000000</span></p>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}