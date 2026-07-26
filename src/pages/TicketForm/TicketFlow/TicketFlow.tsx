import "./TicketFlow.css";

export default function Ticet() {
  return (
    <>
      <div className="ticketFlow">
        <ol className="ticketFlow-list">
          <li className="ticketFlow-list_item">
            <div className="ticketFlow-current ticketFlow-current--active">
              <span className="ticketFlow-current_icon ticketFlow-current_icon--ticket"></span><p className="ticketFlow-current_text">チケットの選択<br />日付の選択</p>
            </div>
          </li>
          <li className="ticketFlow-list_item">
            <div className="ticketFlow-current ticketFlow-current--active">
              <span className="ticketFlow-current_icon ticketFlow-current_icon--user"></span><p className="ticketFlow-current_text">お客様情報の選択</p>
            </div>
          </li>
          <li className="ticketFlow-list_item">
            <div className="ticketFlow-current ticketFlow-current--active">
            <span className="ticketFlow-current_icon ticketFlow-current_icon--confirm"></span><p className="ticketFlow-current_text">確認</p>
            </div>
          </li>
          <li className="ticketFlow-list_item">
            <div className="ticketFlow-current ticketFlow-current--active">
              <span className="ticketFlow-current_icon ticketFlow-current_icon--complete"></span><p className="ticketFlow-current_text">完了</p>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}