import Section from "../Common/Section/Section";
import Container from "../Common/Container/Container";
import Title from "../Common/Title/Title";
import SubTitle from "../Common/SubTitle/SubTitle";
import Btn from "../Common/Btn/Btn";

export default function Schedule() {
  return (
    <>
      <Section >
        <Container>
            <h2><Title text="営業時間" /></h2>
            <p>特別な時間をお届け！</p>
            <div>
                <h3><SubTitle text="営業時間" /></h3>
                <p>9:00～20:00</p>
                <small>最終入園　19:00</small>
            </div>
            <div>
              <h4>休園日</h4>
              <p>毎週火曜日(祝日の場合は翌日)</p>
              <p>※春休み・GW・夏休み・年末年始は無休</p>
            </div>
            <div>
              <h4>ナイトパレード開催</h4>
              <p>毎週土曜日・特定日 20:00～<br />幻想的な光のパレードをお楽しみください。</p>
              <p>※春休み・GW・夏休み・年末年始は無休</p>
            </div>
            <div>
              <p>営業時間は季節や天候により変更となる場合がございます。</p>
            </div>
            <Btn text="チケットを購入する" url="#"/>
        </Container>
      </Section>
    </>
  );
}
