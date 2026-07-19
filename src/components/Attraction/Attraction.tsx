import "./Attraction.css";
import Section from "../Common/Section/Section";
import Container from "../Common/Container/Container";
import AttractionCard from "./AttractionCard";
import Title from "../Common/Title/Title";

export default function Attraction() {
  return (
    <>
      <Section>
        <Container>
          <div className="attraction">
            <h2>
                <Title text="おすすめアトラクション" />
            </h2>
            <ul className="attraction-cardList">
                <li><AttractionCard img="/public/images/Attraction-01.jpg" title="スカイコースター" text="爽快感抜群の大人気コースター！" /></li>
                <li><AttractionCard img="/public/images/Attraction-02.jpg" title="メリーゴーランド" text="お子様に大人気の定番アトラクション" /></li>
                <li><AttractionCard img="/public/images/Attraction-03.jpg" title="カラフルティーカップ" text="くるくる回るティーカップで大はしゃぎ！！" /></li>
                <li><AttractionCard img="/public/images/Attraction-04.jpg" title="ドリームホイール" text="遊園地を一望できる大観覧車" /></li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
