import "./TicketType.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  return (
    <>
      <Section>
        <Container>
          <div className="ticketType">
            <h3>チケットの種類を選択してください</h3>
            <ul> 
              <li>
                <div>チケットの種類</div>
                <div>対象</div>
                <div>料金</div>
                <div>枚数</div>
              </li>
              <li>
                <div><label htmlFor="adult">大人</label></div>
                <div><p>18歳以上</p></div>
                <div><p>&#165;4,800</p></div>
                <div><input id="adult" type="number" value="0" /></div>
              </li>
              <li>
                <div><label htmlFor="junior">中人</label></div>
                <div><p>中学生 12～17歳</p></div>
                <div><p>&#165;3,800</p></div>
                <div><input id="junior" type="number" value="0" /></div>
              </li>
              <li>
                <div><label htmlFor="child">小人</label></div>
                <div><p>3歳～小学生</p></div>
                <div><p>&#165;2,800</p></div>
                <div><input id="child" type="number" value="0" /></div>
              </li>
              <li>
                <div><label htmlFor="senior">シニア</label></div>
                <div><p>65歳以上</p></div>
                <div><p>&#165;3,800</p></div>
                <div><input id="senior" type="number" value="0" /></div>
              </li>
            </ul>
            <div>
              <div>
                <label htmlFor="afternoon">アフタヌーンパス</label>
                <p>14:00からの入園でおトクに楽しめる！</p>
              </div>
              <div><p><small>全区分一律</small><br />&#165;2,500</p></div>
              <div><input id="afternoon" type="number" value="0" /></div> 
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}