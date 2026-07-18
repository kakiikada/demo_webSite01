type BtnProps = {
  url: string;
  text: string;
};

function Btn({ url,text }: BtnProps) {
  return (
    <a href={ url }>
        {text}
    </a>
  );
}
export default Btn;
