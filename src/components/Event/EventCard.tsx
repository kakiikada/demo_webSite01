type EventCardProps = {
    status: string;
    img: string;
    tag: string[];
    title: string;
    text: string;
    time: string;
};

function EventCard({status, img, tag, title, text, time }: EventCardProps) {
  return (
    <div>
        <p>{status}</p>
        <img src={img} alt={title} />
        {tag.map((item) => (
            <span key={item}>
            {item}
            </span>
        ))}
        <p></p>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{time}</p>
    </div>
  );
}
export default EventCard;