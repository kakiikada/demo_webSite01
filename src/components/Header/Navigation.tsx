import Btn from "../Common/Btn/Btn";

type NavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Navigation({
  isOpen,
  onClose,
}: NavigationProps) {
  return(
    <div className={`header-nav ${isOpen ? "js-active" : ""}`}>
      <nav className="header-nav_menu" onClick={onClose}>
        <ul>
          {/* <li>Home</li> */}
          <li><a href="#attraction">アトラクション</a></li>
          <li><a href="#event">イベント</a></li>
          <li><a href="#ticket">チケット</a></li>
          <li><a href="#access">アクセス</a></li>
          <li><a href="#schedule">営業時間</a></li>
        </ul>
        <div className="header-nav_btn"><Btn text="チケットを購入" url="/TicketForm" size="large" /></div>
      </nav>
    </div>
  )
}