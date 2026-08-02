import { useState } from "react";
import "./TicketType.css";
import Title from "../../../components/Common/Title/Title";
import FormNum from "../../../components/Common/Form/FormNum";


export default function Ticet() {
  const [adult, setAdult] = useState(0);
  const [junior, setJunior] = useState(0);
  const [child, setChild] = useState(0);
  const [senior, setSenior] = useState(0);
    const [afternoon, setAfternoon] = useState(0);
  return (
    <>
      <div className="ticketType">
        <h3><Title text="チケットの種類を選択してください" color="red" type="small"  /></h3>
        <ul className="ticketType-table"> 
          <li className="ticketType-table_thead">
            <div className="ticketType-table_thead_1">チケットの種類</div>
            <div className="ticketType-table_thead_2">対象</div>
            <div className="ticketType-table_thead_3">料金</div>
            <div className="ticketType-table_thead_4">枚数</div>
          </li>
          <li className="ticketType-table_line">
            <div className="ticketType-table_line_1"><label htmlFor="adult">大人</label></div>
            <div className="ticketType-table_line_2"><p>18歳以上</p></div>
            <div className="ticketType-table_line_3"><p>&#165;4,800</p></div>
            <div className="ticketType-table_line_4"><FormNum id="adult" value={adult} onChange={setAdult} /></div>
          </li>
          <li className="ticketType-table_line">
            <div className="ticketType-table_line_1"><label htmlFor="junior">中人</label></div>
            <div className="ticketType-table_line_2"><p>中学生 12～17歳</p></div>
            <div className="ticketType-table_line_3"><p>&#165;3,800</p></div>
            <div className="ticketType-table_line_4"><FormNum id="junior" value={junior} onChange={setJunior} /></div>
          </li>
          <li className="ticketType-table_line">
            <div className="ticketType-table_line_1"><label htmlFor="child">小人</label></div>
            <div className="ticketType-table_line_2"><p>3歳～小学生</p></div>
            <div className="ticketType-table_line_3"><p>&#165;2,800</p></div>
            <div className="ticketType-table_line_4"><FormNum id="child" value={child} onChange={setChild} /></div>
          </li>
          <li className="ticketType-table_line">
            <div className="ticketType-table_line_1"><label htmlFor="senior">シニア</label></div>
            <div className="ticketType-table_line_2"><p>65歳以上</p></div>
            <div className="ticketType-table_line_3"><p>&#165;3,800</p></div>
            <div className="ticketType-table_line_4"><FormNum id="senior" value={senior} onChange={setSenior} /></div>
          </li>
        </ul>
        <div className="ticketType-addItem">
          <div className="ticketType-addItem_title">
            <label htmlFor="afternoon"><p className="ticketType-addItem_title_main">アフタヌーンパス</p></label>
            <p>14:00からの入園でおトクに楽しめる！</p>
          </div>
          <div className="ticketType-addItem_val"><p>全区分一律<br /><span className="ticketType-addItem_val_main">&#165;2,500</span></p></div>
          <div className="ticketType-addItem_form"><FormNum id="afternoon" value={afternoon} onChange={setAfternoon} /></div> 
        </div>
      </div>
    </>
  );
}