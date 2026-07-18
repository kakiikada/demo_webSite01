import HeaderLogo from "./HeaderLogo";
import Btn from "../Common/Btn/Btn";
export default function Header() {
  return (
    <header>
      <HeaderLogo />
      <div>
        <nav>
          <ul>
            {/* <li>Home</li> */}
            <li>アトラクション</li>
            <li>イベント</li>
            <li>チケット</li>
            <li>アクセス</li>
            <li>営業時間</li>
          </ul>
        </nav>
        <Btn text="チケットを購入" url="#"/>
      </div>
        <div>
          <span></span>
          <span></span>
        </div>
    </header>
  )
}