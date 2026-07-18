type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps) {
  return (
    <span>
       {text}
    </span>
  );
}
export default Title;
