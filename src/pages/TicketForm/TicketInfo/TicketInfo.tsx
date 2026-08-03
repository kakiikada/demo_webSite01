import { useState } from "react";
import "./TicketInfo.css";
import Title from "../../../components/Common/Title/Title";

export default function Ticet() {
  const [agree, setAgree] = useState(false);
  return (
    <>
      <div className="ticketInfo">
      <h3><Title text="お客様情報をご入力ください" color="red" type="small"  /></h3>
        <ul className="ticketInfo-list">
          <li className="ticketInfo-list_line">
            <p className="ticketInfo-inputTitle">お名前<span>必須</span></p>
            <div className="ticketInfo-flex">
              <div className="ticketInfo-inputBox"><label htmlFor="lastName">姓</label><input id="lastName" type="text" placeholder="例）山田" /></div>
              <div className="ticketInfo-inputBox"><label htmlFor="firstName">姓</label><input id="firstName" type="text" placeholder="例）太郎" /></div>
            </div>
          </li>
          <li className="ticketInfo-list_line">
            <p className="ticketInfo-inputTitle">フリガナ<span>必須</span></p>
            <div className="ticketInfo-flex">
              <div className="ticketInfo-inputBox"><label htmlFor="lastNameKana">セイ</label><input id="lastNameKana" type="text" placeholder="例）ヤマダ" /></div>
              <div className="ticketInfo-inputBox"><label htmlFor="firstNameKana">メイ</label><input id="firstNameKana" type="text" placeholder="例）タロウ" /></div>
            </div>
          </li>
          <li className="ticketInfo-list_line">
            <div className="ticketInfo-inputTitle"><label htmlFor="email">メールアドレス</label><span>必須</span></div>
            <input id="email" type="email" placeholder="dreamLand@sample.com" />
          </li>
          <li className="ticketInfo-list_line">
            <div className="ticketInfo-inputTitle"><label htmlFor="tel">電話番号</label><span>必須</span></div>
            <input id="tel" type="tel" placeholder="0000000000" />
          </li>
          <li className="ticketInfo-list_line">
            <div className="ticketInfo-check">
              <label htmlFor="agree">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  利用規約
                </a>
                に同意する
              </label>
            </div>
          </li>
        </ul>
        <input type="button" className="ticketInfo-btn" disabled={!agree} value="次へ進む" />
      </div>
    </>
  );
}
