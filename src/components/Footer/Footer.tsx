import "./Footer.css";
import FooterLogo from "./FooterLogo";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-layout">
        <div className="footer-layout_left">
          <div className="footer-LogoBox">
            <FooterLogo />
          </div>
          <ul className="footer-snsList">
            <li><a className="footer-snsList_icon footer-snsList_icon--X" href="#"><img src="../../../public/images/icon/sns-X.png" alt="X" /></a></li>
            <li><a className="footer-snsList_icon" href="#"><img src="../../../public/images/icon/sns_instagram.png" alt="" /></a></li>
            <li><a className="footer-snsList_icon" href="#"><img src="../../../public/images/icon/sns-facebook.png" alt="Facebook" /></a></li>
          </ul>
        </div>
        <div className="footer-layout_center">
          <nav className="footer-textBox">
            <p className="footer-textBox_title">サイトマップ</p>
            <ul className="footer-textBox_textList">
              <li><a href="#attraction">アトラクション</a></li>
              <li><a href="#event">イベント</a></li>
              <li><a href="#ticket">チケット</a></li>
              <li><a href="#access">アクセス</a></li>
              <li><a href="#schedule">営業時間</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-layout_right">
          <div className="footer-textBox">
            <p className="footer-textBox_title">営業案内</p>
            <ul className="footer-textBox_textList">
              <li className="footer-textBox_textList_table"><span>営業時間</span>9:00～20:00</li>
              <li className="footer-textBox_textList_table"><span>定休日</span>毎週火曜日(祝日の場合は翌日)</li>
              <li className="footer-textBox_textList_table"><span>所在地</span>〒000-0000</li>
              <li className="footer-textBox_textList_table"><span>TEL</span>XX-XXXX-XXXX</li>
            </ul>
          </div>
        </div>
      </div>
      <small className="footer-copy"> © {new Date().getFullYear()} portfolio site</small>
    </footer>
  )
}