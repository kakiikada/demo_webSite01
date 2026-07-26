import "./TicketCalendar.css";
import Title from "../../../components/Common/Title/Title";
import Btn from "../../../components/Common/Btn/Btn";

export default function Ticet() {
  return (
    <>
      <div className="ticketCalendar">
        <h3><Title text="ご来援日を選択してください" color="red" type="small"  /></h3>
        <input id="date" type="date" />
        <p>※価格はすべて税込みです。</p>
        <p>※変更・キャンセルはご来援日の前日まで可能です。</p>
      </div>
    </>
  );
}