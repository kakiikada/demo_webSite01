import TicketHero from "./TicketHero/TicketHero";
import TicketData from "./TicketData/TicketData";
import TicketFlow from "./TicketFlow/TicketFlow"
import TicketType from "./TicketType/TicketType"
import TicketCalendar from "./TicketCalendar/TicketCalendar"
import TicketInfo from "./TicketInfo/TicketInfo"
import TicketConfirm from "./TicketConfirm/TicketConfirm"
import TicketComplete from "./TicketComplete/TicketComplete"
import Section from "../../components/Common/Section/Section";
import Container from "../../components/Common/Container/Container";
import Btn from "../../components/Common/Btn/Btn";

function TicketForm() {
  return (
    <>
    <main>
      <TicketHero />
      <div className="contentBg-wave">
        <form action="">
          <Section>
            <Container>
              <TicketFlow />
              <div>
                {/* <div>
                  <TicketData />
                </div> */}
                <div>
                  <div className="contentFlex">
                    <div className="contentFlex_half">
                      <TicketType />
                    </div>
                    <div className="contentFlex_half">
                      <TicketCalendar />
                    </div>
                  </div>

                  <div>
                    <TicketInfo />
                  </div>
                  <div>
                    <TicketConfirm /> 
                  </div>
                  <div>
                    <TicketComplete />
                  </div>
                  <div>
                    <button onClick={formPrev}>内容を修正する</button>
                    <button onClick={formNext}>次へ進む</button>
                    <p>※こちらはデモサイトなので、実際の購入は行われません。</p>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </form>
      </div>
      <div>
        <div><h3>前売り券がおトク!</h3><p>前売り券なら当日窓口より<br />最大500円おトクにご購入いただけます♪</p></div>
        <div><h3>スマホで簡単入園</h3><p>購入後はチケットがQRコードで届くので、<br />そのままスムーズに入園できます。</p></div>
        <div><h3>安心のサポート</h3><p>購入方法がわからない場合は<br />サポートセンターまでお気軽にどうぞ。</p></div>
      </div>
    </main>
    </>
  );
}

const formPrev = () => {
  console.log("送信！");
};
const formNext = () => {
  console.log("送信！");
};

export default TicketForm;