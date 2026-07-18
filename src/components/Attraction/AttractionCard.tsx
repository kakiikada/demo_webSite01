type AttractionCardProps = {
  img: string;
  title: string;
  text: string;
};

function AttractionCard({ img, title, text }: AttractionCardProps) {
  return (
    <div>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  );
}
export default AttractionCard;

