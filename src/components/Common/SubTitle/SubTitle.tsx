import "./SubTitle.css";
type SubTitleProps = {
  text: string;
  color?: "default" | "blue";
};

function SubTitle({ color = "default", text}: SubTitleProps) {
  return (
    <span className={`subTitle subTitle--${color}`}>
      <span className="subTitle_text">
        {text}
      </span>
    </span>
  );
}
export default SubTitle;


