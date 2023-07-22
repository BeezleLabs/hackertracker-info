import { EventDetailHeading } from "../heading/EventDetailsHeading";
import EventDetails from "./EventDetails";

function Event({ event, tags }: { event: HTEvent; tags: HTTag[] }) {
  return (
    <div>
      <EventDetailHeading eventId={event.id} />
      <EventDetails event={event} tags={tags} />
    </div>
  );
}

export default Event;
