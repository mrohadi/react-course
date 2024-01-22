import { Link, useLoaderData, json } from "react-router-dom";
import EventList from "../../components/EventsList";

export default function EventsPage() {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;

  return (
    <>
      <Link to="/events/new">Add Event</Link>

      <EventList events={events} />
    </>
  );
}

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
