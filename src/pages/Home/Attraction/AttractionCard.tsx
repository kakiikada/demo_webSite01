type AttractionCardProps = {
  img: string;
  title: string;
  text: string;
};

function AttractionCard({ img, title, text }: AttractionCardProps) {
  return (
    <div className="attractionCard">
        <img src={img} alt={title} />
        <div className="attractionCard_inner">
          <h3 className="attractionCard-title">{title}</h3>
          <p className="attractionCard-text">{text}</p>
        </div>
    </div>
  );
}
export default AttractionCard;

