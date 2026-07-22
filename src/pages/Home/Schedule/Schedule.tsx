import "./Schedule.css";
import Section from "../../../components/Common/Section/Section";
import Container from "../../../components/Common/Container/Container";
import Title from "../../../components/Common/Title/Title";
import SubTitle from "../../../components/Common/SubTitle/SubTitle";

export default function Schedule() {
  return (
    <>
      <Section>
        <Container>
          <div className="schedule" id="schedule">
            <div className="schedule-titleBox">
                <h2><Title text="営業時間" subTitle="特別な時間をお届け！" color="red"  /></h2>
            </div>

            <div className="schedule-layout">
                <div className="schedule-layout_block">
                  <div className="schedule-time">
                    <div className="schedule-time_titleBox">
                      <p><SubTitle text="営業時間" /></p>
                    </div>
                    <div className="schedule-time_main">
                      <p className="schedule-time_main_title">9:00～20:00</p>
                      <span className="schedule-time_main_text">最終入園　19:00</span>
                    </div>
                  </div>
                </div>
                <div className="schedule-layout_block">
                  <div className="schedule-addData schedule-addData--basic">
                    <h4 className="schedule-addData_title">休園日</h4>
                    <p className="schedule-addData_text">毎週火曜日（祝日の場合は翌日<br />※ 春休み・GW・夏休み・年末年始</p>
                  </div>
                  <div className="schedule-addData schedule-addData--parade">
                    <h4 className="schedule-addData_title">ナイトパレード開催日</h4>
                    <p className="schedule-addData_text">毎週土曜・特定日 20:00〜<br />幻想的な光のパレードをお楽しみください</p>
                  </div>
                  <div className="schedule-addData schedule-addData--note">
                    <p className="schedule-addData_title">※営業時間は天候などにより変更となる場合がございます。</p>
                  </div>
                </div>
            </div>


          </div>
        </Container>
      </Section>
    </>
  );
}
