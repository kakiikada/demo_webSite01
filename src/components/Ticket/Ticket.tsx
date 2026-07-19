import "./Ticket.css";
import Section from "../Common/Section/Section";
import Container from "../Common/Container/Container";
import Title from "../Common/Title/Title";
import SubTitle from "../Common/SubTitle/SubTitle";

export default function Ticet() {
  return (
    <>
      <Section >
        <Container>
            <div className="ticket">
                <div className="ticket-titleBox">
                    <h2><Title text="チケット" subTitle="ワクワクがいっぱいの一日を楽しもう！" color="red"  /></h2>
                </div>       
                <div className="ticket-value">
                    <div className="ticket-value_titleBox">
                        <p><SubTitle text="チケットの種類"/></p>
                    </div>
                    <ul className="ticket-value_list">
                        <li>
                            <p>大人<small>18歳以上</small></p>
                            <p>&#165;4,800</p>
                        </li>
                        <li>
                            <p>中人<small>中学生 12～17歳</small></p>
                            <p>&#165;3,800</p>
                        </li>
                        <li>
                            <p>小人<small>3歳～小学生</small></p>
                            <p>&#165;2,800</p>
                        </li>
                        <li>
                            <p>シニア<small>65歳以上</small></p>
                            <p>&#165;3,800</p>
                        </li>
                    </ul>
                    
                </div>
                <div className="ticket-subValue">
                    <div className="ticket-subValue_left">
                        <h4>アフタヌーンパス</h4>
                        <p>14:00からの入園でお得に楽しめる！</p>
                    </div>
                    <div className="ticket-subValue_right">
                        <p>全区分一律<span>&#165;2,500</span></p>
                    </div>
                </div>
                <div className="ticket-pickup">
                    <h4 className="ticket-pickup_title">アトラクション乗り放題！</h4>
                    <p className="ticket-pickup_text">一部対象外のアトラクションがございます。詳しくは園内マップをご確認ください。</p>
                </div>
            </div>
        </Container>
      </Section>
    </>
  );
}
