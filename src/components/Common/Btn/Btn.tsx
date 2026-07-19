import "./Btn.css";
type BtnProps = {
  url: string;
  text: string;
  size?: "small" | "medium" | "large" | "Hero";
};

function Btn({ size = "medium",url,text }: BtnProps) {
  return (
    <a className={`btn btn--${size}`} href={ url }>
      <span>{text}</span>
    </a>
  );
}
export default Btn;
