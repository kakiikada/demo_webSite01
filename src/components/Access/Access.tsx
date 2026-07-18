import Section from "../Common/Section/Section";
import Container from "../Common/Container/Container";
import Title from "../Common/Title/Title";
import SubTitle from "../Common/SubTitle/SubTitle";

export default function Access() {
  return (
    <>
      <Section >
        <Container>
            <h2><Title text="アクセス" /></h2>
            <p>みんなの笑顔に会える場所へ！</p>
            <div>
                <h3><SubTitle text="園内マップ" /></h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25946.87030117433!2d139.75958827851386!3d35.61888053346041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a1deb0ac2d7%3A0x7dd3beb4c8363729!2z44GK5Y-w5aC05rW35rWc5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1784353180942!5m2!1sja!2sjp" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
            </div>
            <h4>所在地</h4>
            <p>〒XXX-XXXX</p>
            <p>東京都〇〇市ドリームランド0-0-0<br />DreamLand</p>
            <h4>電車でお越しの方</h4>
            <p>〇〇駅より徒歩約10分</p>
            <p>〇〇〇駅より徒歩約15分</p>
            <h4>お車でお越しの方</h4>
            <p>首都高速 〇〇線 〇〇ICよりより約5分</p>
            <p>駐車場：2,000台 1日 &#165;1,000</p>
        </Container>
      </Section>
    </>
  );
}
