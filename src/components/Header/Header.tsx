
import "./Header.css";
import HeaderLogo from "./HeaderLogo";
import Btn from "../Common/Btn/Btn";
export default function Header() {
  return (
    <header className="header">
      <div className="header-layout">
        <div className="header-layout_left">
          <HeaderLogo />
        </div>
        <div className="header-layout_right">
          <nav className="header-nav">
            <ul>
              {/* <li>Home</li> */}
              <li><a href="">アトラクション</a></li>
              <li><a href="">イベント</a></li>
              <li><a href="">チケット</a></li>
              <li><a href="">アクセス</a></li>
              <li><a href="">営業時間</a></li>
            </ul>
          </nav>
          <div><Btn text="チケットを購入" url="#" size="large" /></div>
        </div>
        <div className="header-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}