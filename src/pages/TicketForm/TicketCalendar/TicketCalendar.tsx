import "./TicketCalendar.css";
import Title from "../../../components/Common/Title/Title";
import Btn from "../../../components/Common/Btn/Btn";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// 日本語化
import { registerLocale } from "react-datepicker";
import { ja } from "date-fns/locale";
registerLocale("ja", ja);

type TicketCalendarProps = {
  selectedDate: Date | null;
  onChangeDate: (date: Date | null) => void;
};

const TicketCalendar = ({
  selectedDate,
  onChangeDate,
}: TicketCalendarProps) => {

  return (
    <>
      <div className="ticketCalendar">
        <h3><Title text="ご来援日を選択してください" color="red" type="small"  /></h3>
        <ReactDatePicker
          inline
          locale="ja"
          selected={selectedDate}
          onChange={onChangeDate}
          dayClassName={(date) => {
            const day = date.getDay();
            if (day === 0) return "js-sunday";
            if (day === 6) return "js-saturday";
            return "";
          }}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
            <div>
              <button type="button" onClick={decreaseMonth}>
                <div className="ticketCalendar-prev"></div>
              </button>

              <span>
                {date.getFullYear()}年 {date.getMonth() + 1}月
              </span>

              <button type="button" onClick={increaseMonth}>
                <div className="ticketCalendar-next"></div>
              </button>
            </div>
          )}
        />
        <p>※価格はすべて税込みです。</p>
        <p>※変更・キャンセルはご来援日の前日まで可能です。</p>
      </div>
    </>
  );
};
export default TicketCalendar;
