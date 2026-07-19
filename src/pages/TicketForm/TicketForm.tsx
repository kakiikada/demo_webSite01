import { useState } from "react";
import Btn from "../../components/Common/Btn/Btn";

function TicketForm() {
  const [agree, setAgree] = useState(false);
  return (
<main>
  <div>
    <p>簡単ステップで今すぐ購入</p>
    <h2>チケットを購入する</h2>
    <p>ご来援日を選んでチケットを購入できます。</p>
  </div>
  <div>
    <ol>
      <li><span></span><p>チケットの種類の選択<br />日付の選択</p></li>
      <li><span></span><p>お客様情報の選択</p></li>
      <li><span></span><p></p>確認</li>
      <li><span></span><p>完了</p></li>
    </ol>
    <div>
      <form action="">
        <div>
          <h3>チケットの種類を選択してください</h3>
          <ul> 
            <li>
              <div>チケットの種類</div>
              <div>対象</div>
              <div>料金</div>
              <div>枚数</div>
            </li>
            <li>
              <div><label htmlFor="adult">大人</label></div>
              <div><p>18歳以上</p></div>
              <div><p>&#165;4,800</p></div>
              <div><input id="adult" type="number" value="0" /></div>
            </li>
            <li>
              <div><label htmlFor="junior">中人</label></div>
              <div><p>中学生 12～17歳</p></div>
              <div><p>&#165;3,800</p></div>
              <div><input id="junior" type="number" value="0" /></div>
            </li>
            <li>
              <div><label htmlFor="child">小人</label></div>
              <div><p>3歳～小学生</p></div>
              <div><p>&#165;2,800</p></div>
              <div><input id="child" type="number" value="0" /></div>
            </li>
            <li>
              <div><label htmlFor="senior">シニア</label></div>
              <div><p>65歳以上</p></div>
              <div><p>&#165;3,800</p></div>
              <div><input id="senior" type="number" value="0" /></div>
            </li>
          </ul>
          <div>
            <div>
              <label htmlFor="afternoon">アフタヌーンパス</label>
              <p>14:00からの入園でおトクに楽しめる！</p>
            </div>
            <div><p><small>全区分一律</small><br />&#165;2,500</p></div>
            <div><input id="afternoon" type="number" value="0" /></div> 
          </div>
        </div>

        <div>
          <h3>ご来援日を選択してください</h3>
          <input id="date" type="date" />
          <p>※価格はすべて税込みです。</p>
          <p>※変更・キャンセルはご来援日の前日まで可能です。</p>
        </div>

        <div>
          <h3>ご選択内容</h3>
          <ul>
            <li>
              <h4>ご来援日</h4>
              <p>2025年6月18日</p>
            </li>
            <li>
              <h4>チケット</h4>
              <ul>
                <li><span>大人(18歳以上)</span><span>2枚</span></li>
                <li><span>中学生(12～17歳)</span><span>2枚</span></li>
              </ul>
            </li>
            <li>
              <h4>合計金額</h4>
              <p>&#165; 13,400</p>
            </li>
          </ul>
        </div>

        <div>
          <h3>お客様情報をご入力ください</h3>
          <ul>
            <li>
              <p>お名前<span>必須</span></p>
              <div>
                <div><label htmlFor="lastName">姓</label><input id="lastName" type="text" placeholder="例）山田" /></div>
                <div><label htmlFor="firstName">姓</label><input id="firstName" type="text" placeholder="例）太郎" /></div>
              </div>
              <p>フリガナ<span>必須</span></p>
            </li>
            <li>
              <div>
                <div><label htmlFor="lastNameKana">セイ</label><input id="lastNameKana" type="text" placeholder="例）ヤマダ" /></div>
                <div><label htmlFor="firstNameKana">メイ</label><input id="firstNameKana" type="text" placeholder="例）タロウ" /></div>
              </div>
            </li>
            <li>
              <div><label htmlFor="email">メールアドレス</label><span>必須</span></div>
              <input id="email" type="email" placeholder="dreamLand@sample.com" />
            </li>
            <li>
              <div><label htmlFor="tel">電話番号</label><span>必須</span></div>
              <input id="tel" type="tel" placeholder="0000000000" />
            </li>
            <li>
              <div>
                <label htmlFor="agree">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <a href="/terms" target="_blank" rel="noopener noreferrer">
                    利用規約
                  </a>
                  に同意する
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4>お客様情報</h4>
          <ul>
            <li>
              <p><span>お名前</span><span>山田 太郎</span></p>
            </li>
            <li>
              <p><span>フリガナ</span><span>ヤマダ タロウ</span></p>
            </li>
            <li>
              <p><span>メールアドレス</span><span>dreamLand@sample.com</span></p>
            </li>
            <li>
              <p><span>電話番号</span><span>0000000000</span></p>
            </li>
          </ul>
        </div>

        <div>
          <button onClick={formPrev}>内容を修正する</button>
          <button onClick={formNext}>次へ進む</button>
          <input type="submit" disabled={!agree} value="チケットを購入する" />
          <p>※こちらはデモサイトなので、実際の購入は行われません。</p>
        </div>
      </form>
      {/* 完了画面 */}
      <div>
        <span>イラスト</span>
        <h2>ご購入が完了しました！</h2>
        <p>ご購入いただいたチケットをメールにて送りましたので、ご確認ください。</p>
        <ul>
          <li>

          </li>
          <li>
            <h4>ご来援日</h4>
            <p>2025年6月18日</p>
          </li>
          <li>
            <h4>チケット</h4>
            <ul>
              <li><span>大人(18歳以上)</span><span>2枚</span></li>
              <li><span>中学生(12～17歳)</span><span>2枚</span></li>
            </ul>
          </li>
          <li>
            <h4>合計金額</h4>
            <p>&#165; 13,400</p>
          </li>
        </ul>
        <Btn text="トップページへ戻る" url="./"/>
      </div>
    </div>
    <div>
      <div><h3>前売り券がおトク!</h3><p>前売り券なら当日窓口より<br />最大500円おトクにご購入いただけます♪</p></div>
      <div><h3>スマホで簡単入園</h3><p>購入後はチケットがQRコードで届くので、<br />そのままスムーズに入園できます。</p></div>
      <div><h3>安心のサポート</h3><p>購入方法がわからない場合は<br />サポートセンターまでお気軽にどうぞ。</p></div>
    </div>
  </div>
</main>
  );
}
const formPrev = () => {
  console.log("送信！");
};
const formNext = () => {
  console.log("送信！");
};


export default TicketForm;