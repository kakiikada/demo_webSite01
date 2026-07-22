import "./Ticket.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Title from "../../../components/Common/Title/Title";
import SubTitle from "../../../components/Common/SubTitle/SubTitle";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  return (
    <>
      <Section>
        <Container>
            <div className="ticket" id="ticket">
                <div className="ticket-titleBox">
                    <h2><Title text="チケット" subTitle="ワクワクがいっぱいの一日を楽しもう！" color="red"  /></h2>
                </div> 
                <div className="ticket-layout">
                    <div className="ticket-layout_block">
                        <div className="ticket-value">
                            <div className="ticket-value_titleBox">
                                <p><SubTitle text="チケットの種類"/></p>
                            </div>
                            <ul className="ticket-value_list">
                                <li className="ticket-value_list_line">
                                    <p className="ticket-valueName">大人<span>（ 18歳以上 ）</span></p>
                                    <p className="ticket-valueText">&#165;4,800</p>
                                </li>
                                <li className="ticket-value_list_line">
                                    <p className="ticket-valueName">中人<span>（ 中学生 12～17歳）</span></p>
                                    <p className="ticket-valueText">&#165;3,800</p>
                                </li>
                                <li className="ticket-value_list_line">
                                    <p className="ticket-valueName">小人<span>（ 3歳～小学生）</span></p>
                                    <p className="ticket-valueText">&#165;2,800</p>
                                </li>
                                <li className="ticket-value_list_line">
                                    <p className="ticket-valueName">シニア<span>（ 65歳以上）</span></p>
                                    <p className="ticket-valueText">&#165;3,800</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ticket-layout_block">
                        <div className="ticket-subValue">
                            <div className="ticket-subValue_left">
                                <h4 className="ticket-subValueTitle">アフタヌーンパス</h4>
                                <p className="ticket-subValueText">14:00からの入園でお得に楽しめる！</p>
                            </div>
                            <div className="ticket-subValue_right">
                                <p className="ticket-subValueVal">全区分一律<span>&#165;2,500</span></p>
                            </div>
                        </div>
                        <div className="ticket-pickup">
                            <h4 className="ticket-pickup_title">アトラクション乗り放題！</h4>
                            <p className="ticket-pickup_text">一部対象外のアトラクションがございます。<br />詳しくは園内マップをご確認ください。</p>
                        </div>
                    </div>
                </div>
                <div className="ticket-btn">
                    <Btn text="チケットを購入" url="/TicketForm" size="large" />
                </div>
            </div>
        </Container>
      </Section>
    </>
  );
}
