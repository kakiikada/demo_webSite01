import "./Event.css";
import Section from "../Common/Section/Section";
import Container from "../Common/Container/Container";
import EventCard from "./EventCard";
import Title from "../Common/Title/Title";

export default function Event() {
  return (
    <>
      <Section >
        <Container>
          <div className="event" id="event">
            <h2><Title text="イベント情報" /></h2>
            <ul className="event-cardList">
                <li>
                    <EventCard 
                    status="now"
                    img="/public/images/Event-01.jpg"
                    tag={["season"]}
                    title="スプリングフェスティバル"
                    text="春の訪れをお祝いする特別イベント! お花やバレードをお楽しみください。"
                    time="2024.4.1(月)～5.31(金)"
                    />
                </li>
                <li>
                    <EventCard 
                    status="before"
                    img="/public/images/Event-02.jpg"
                    tag={["parade"]}
                    title="サマー・ナイト・パーティー"
                    text="夜の遊園地で音楽と光のショーを開催! 特別な夏の思い出を。"
                    time="2024.7.20(土)～8.31(土)"
                    />
                </li>
                <li>
                    <EventCard 
                    status="now"
                    img="/public/images/Event-03.jpg"
                    tag={["season", "parade"]}
                    title="ハロウィン・ワンダーランド"
                    text="仮装して楽しもう! 限定フードや フォトスポットも登場!"
                    time="2024.9.14(土)～10.31(水)"
                    />
                </li>
                <li>
                    <EventCard 
                    status="before"
                    img="/public/images/Event-04.jpg"
                    tag={["season", "parade"]}
                    title="ドリームクリスマス"
                    text="きらめくイルミネーションと特別な ショーで、心あたたまる時間を。"
                    time="2024.11.16(土)～12.25(水)"
                    />
                </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
