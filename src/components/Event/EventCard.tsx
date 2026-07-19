type EventCardProps = {
    status: Status;
    img: string;
    tag: EventType[];
    title: string;
    text: string;
    time: string;
};
const statusText = {
  now: "開催中",
  before: "まもなく開催",
} as const;
const eventTypeText = {
  season: "季節のイベント",
  parade: "ショー・パレード",
} as const;

type Status = keyof typeof statusText;
type EventType = keyof typeof eventTypeText;

function EventCard({status, img, tag, title, text, time }: EventCardProps) {
  return (
    <div className="eventCard">
        <p className={`eventCard_status eventCard_status--${status}`}>{statusText[status]}</p>
        <img src={img} alt={title} />
        <div className="eventCard_inner">
        {tag.map((item) => (
            <span className={`eventCard_item eventCard_item--${item}`} key={item}>
            {eventTypeText[item]}
            </span>
        ))}
          <h3 className="eventCard-title">{title}</h3>
          <p className="eventCard-text">{text}</p>
          <p className="eventCard-time">{time}</p>
        </div>
    </div>
  );
}
export default EventCard;