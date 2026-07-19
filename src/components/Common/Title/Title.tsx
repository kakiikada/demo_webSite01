import "./Title.css";
type TitleProps = {
  text: string;
  color?: "default" | "red" | "blue";
  subTitle?: string;
};

function Title({ color = "default", text, subTitle = "" }: TitleProps) {
  return (
    <span className="title">
      <span className={`title_text title_text--${color}`}>{text}</span>
        {subTitle && (
        <span className="title_subText">{subTitle}</span>
      )}
    </span>
  );
}
export default Title;
