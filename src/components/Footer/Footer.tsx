import FooterLogo from "./FooterLogo";
export default function Header() {
  return (
    <footer>
      <FooterLogo />
      <div>
        <ul>
          <li>X</li>
          <li>インスタ</li>
          <li>フェイスブック</li>
        </ul>
        <nav>
          <p>サイトマップ</p>
          <ul>
            <li>アトラクション</li>
            <li>イベント</li>
            <li>チケット</li>
            <li>アクセス</li>
            <li>営業時間</li>
          </ul>
        </nav>
        <div>
          <p>営業案内</p>
          <ul>
            <li>営業時間：9:00～20:00</li>
            <li>定休日：毎週火曜日(祝日の場合は翌日)</li>
            <li>所在地：〒000-0000</li>
            <li>TEL：XX-XXXX-XXXX</li>
          </ul>
        </div>
      </div>
      <small> © {new Date().getFullYear()} portfolio site</small>
    </footer>
  )
}