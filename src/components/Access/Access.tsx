import "./Access.css";
import Section from "../Common/Section/Section";
import Container from "../Common/Container/Container";
import Title from "../Common/Title/Title";
import SubTitle from "../Common/SubTitle/SubTitle";
import Btn from "../Common/Btn/Btn";

export default function Access() {
  return (
    <>
      <Section>
        <Container>
          <div className="access" id="access">
            <div className="access-titleBox">
                <h2><Title text="アクセス" subTitle="みんなの笑顔に会える場所へ！" color="blue"  /></h2>
            </div>
            <div className="access-layout">
                <div className="access-layout_block">
                  <div className="access-map">
                      <div className="access-map_titleBox">
                          <p><SubTitle text="園内マップ" color="blue"/></p>
                      </div>
                      <div className="access-map_main">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25946.87030117433!2d139.75958827851386!3d35.61888053346041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a1deb0ac2d7%3A0x7dd3beb4c8363729!2z44GK5Y-w5aC05rW35rWc5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1784353180942!5m2!1sja!2sjp" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
                      </div>
                  </div>
                </div>
                <div className="access-layout_block">
                  <ul className="access-list">
                    <li className="access-list_line">
                      <div className="access-list_line_iconMarker"></div>
                      <h4 className="access-list_line_title">所在地</h4>
                      <p>〒XXX-XXXX&ensp;東京都〇〇市ドリームランド0-0-0<br />DreamLand</p>
                    </li>
                    <li className="access-list_line">
                      <div className="access-list_line_iconCar"></div>
                      <h4 className="access-list_line_title">電車でお越しの方</h4>
                      <p>〇〇駅より徒歩約10分</p>
                      <p>〇〇〇駅より徒歩約15分</p>
                    </li>
                    <li className="access-list_line">
                      <div className="access-list_line_iconTrain"></div>
                      <h4 className="access-list_line_title">お車でお越しの方</h4>
                      <p>首都高速 〇〇線 〇〇ICよりより約5分</p>
                      <p>駐車場：2,000台 1日 &#165;1,000</p>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
