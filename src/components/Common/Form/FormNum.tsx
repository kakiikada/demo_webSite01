import "./Form.css";
type FormNumProps = {
  id: string;
  value: number;
  onChange: (value: number) => void;
};

function FormNum({ id, value,onChange}: FormNumProps) {
  const handleMinus = () => {
      if (value > 0) {
          onChange(value - 1);
      }
  };
  const handlePlus = () => {
      if (value < 10) {
          onChange(value + 1);
      }
  };
  return (
    <div className="formNum">
      <button className="formNum_minus" type="button" onClick={handleMinus} disabled={value <= 0}>－</button>
      <input id={ id } type="number" value={value} readOnly />
      <button className="formNum_plus" type="button" onClick={handlePlus} disabled={value >= 10}>＋</button>
    </div>
  );
}
export default FormNum;
