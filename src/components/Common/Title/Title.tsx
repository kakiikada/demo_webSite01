import "./Title.css";
type TitleProps = {
  text: string;
  color?: "default" | "red" | "blue" | "white";
  type?: "pageTitle" | "hero" | "small";
  subTitle?: string;
};

function Title({ color = "default", type = "pageTitle", text, subTitle = "" }: TitleProps) {
  return (
    <span className={`title title--${type}`}>
      <span className={`title_text title_text--${color}`}>{text}</span>
        {subTitle && (
        <span className="title_subText">{subTitle}</span>
      )}
    </span>
  );
}
export default Title;
