import { Link, useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />

      <button>
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </>
  );
}

export async function eventDetailLoader({ _, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    return json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  return redirect("/events");
}
