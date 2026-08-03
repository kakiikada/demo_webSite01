import { useState } from "react";
import "./TicketFlow1.css";
import TicketType from "../TicketType/TicketType";
import TicketCalendar from "../TicketCalendar/TicketCalendar";


export default function Ticet() {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <>
    <div>
      <div className="TicketFlow1">
        <div className="contentFlex">
          <div className="contentFlex_half">
            <TicketType />
          </div>
          <div className="contentFlex_half">
            <TicketCalendar selectedDate={date} onChangeDate={setDate}/>
          </div>
        </div>
      </div>
      <input type="button" className="TicketFlow1-btn" value="次へ進む" />
    </div>
    </>
  );
}