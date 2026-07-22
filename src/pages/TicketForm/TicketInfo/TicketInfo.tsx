import { useState } from "react";
import "./TicketInfo.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  const [agree, setAgree] = useState(false);
  return (
    <>
      <Section>
        <Container>
          <div className="ticketInfo">
            <h3>お客様情報をご入力ください</h3>
            <ul>
              <li>
                <p>お名前<span>必須</span></p>
                <div>
                  <div><label htmlFor="lastName">姓</label><input id="lastName" type="text" placeholder="例）山田" /></div>
                  <div><label htmlFor="firstName">姓</label><input id="firstName" type="text" placeholder="例）太郎" /></div>
                </div>
                <p>フリガナ<span>必須</span></p>
              </li>
              <li>
                <div>
                  <div><label htmlFor="lastNameKana">セイ</label><input id="lastNameKana" type="text" placeholder="例）ヤマダ" /></div>
                  <div><label htmlFor="firstNameKana">メイ</label><input id="firstNameKana" type="text" placeholder="例）タロウ" /></div>
                </div>
              </li>
              <li>
                <div><label htmlFor="email">メールアドレス</label><span>必須</span></div>
                <input id="email" type="email" placeholder="dreamLand@sample.com" />
              </li>
              <li>
                <div><label htmlFor="tel">電話番号</label><span>必須</span></div>
                <input id="tel" type="tel" placeholder="0000000000" />
              </li>
              <li>
                <div>
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
            <input type="submit" disabled={!agree} value="チケットを購入する" />
          </div>
        </Container>
      </Section>
    </>
  );
}
