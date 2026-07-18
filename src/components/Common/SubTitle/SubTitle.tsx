type SubTitleProps = {
  text: string;
};

function SubTitle({ text }: SubTitleProps) {
  return (
    <span>
       {text}
    </span>
  );
}
export default SubTitle;
