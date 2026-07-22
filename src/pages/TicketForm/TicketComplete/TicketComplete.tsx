import "./TicketComplete.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  return (
    <>
      <Section>
        <Container>
          <div className="ticketComplete">
            <span>イラスト</span>
            <h2>ご購入が完了しました！</h2>
            <p>ご購入いただいたチケットをメールにて送りましたので、ご確認ください。</p>
            <ul>
              <li>

              </li>
              <li>
                <h4>ご来援日</h4>
                <p>2025年6月18日</p>
              </li>
              <li>
                <h4>チケット</h4>
                <ul>
                  <li><span>大人(18歳以上)</span><span>2枚</span></li>
                  <li><span>中学生(12～17歳)</span><span>2枚</span></li>
                </ul>
              </li>
              <li>
                <h4>合計金額</h4>
                <p>&#165; 13,400</p>
              </li>
            </ul>
            <Btn text="トップページへ戻る" url="./"/>
          </div>
        </Container>
      </Section>
    </>
  );
}