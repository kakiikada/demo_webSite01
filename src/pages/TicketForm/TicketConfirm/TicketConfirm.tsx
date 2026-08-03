import "./TicketConfirm.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";
import Title from "../../../components/Common/Title/Title";

export default function Ticet() {
  return (
    <>
      <div className="ticketConfirm">
        <h3><Title text="ご注文内容の確認" subTitle="ご注文内容をご確認の上、よろしければ「購入を確定する」を押してください。" color="red" type="small"  /></h3>
        <div className="ticketConfirm-layout">
          <div className="ticketConfirm-layout_block">
            <ul className="ticketConfirm-list">
              <li>
                <p className="ticketConfirm-dataBox"><span>ご来援日</span><span>2026年8月1日</span></p>
              </li>
              <li>
                <div className="ticketConfirm-dataBox">
                  <span>チケット</span>
                  <ul className="ticketConfirm-dataBox_list">
                    <li><span>大人（18歳以上）</span><span>1枚</span></li>
                    <li><span>中人（中学生 12～17歳）</span><span>2枚</span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="ticketConfirm-layout_block">
            <ul className="ticketConfirm-list">
              <li>
                <p className="ticketConfirm-dataBox"><span>お名前</span><span>山田 太郎</span></p>
              </li>
              <li>
                <p className="ticketConfirm-dataBox"><span>フリガナ</span><span>ヤマダ タロウ</span></p>
              </li>
              <li>
                <p className="ticketConfirm-dataBox"><span>メールアドレス</span><span>dreamLand@sample.com</span></p>
              </li>
              <li>
                <p className="ticketConfirm-dataBox"><span>電話番号</span><span>0000000000</span></p>
              </li>
              <li>
                <p className="ticketConfirm-priceBox"><span>合計金額（税込）</span><span className="ticketConfirm-priceBox_price">13,400</span></p>
              </li>
            </ul>
          </div>
        </div>
        <input type="submit" className="ticketConfirm-btn" value="購入を確定する" />
      </div>
    </>
  );
}