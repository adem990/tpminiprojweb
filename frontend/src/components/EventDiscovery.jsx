import React from "react";

const EventCard = ({ src }) => {
  return (
    <div className="event-card w-[280px] h-[380px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <img src={src} alt="Event" className="w-full h-full object-cover" />
    </div>
  );
};

const eventData = [
  { id: 1, src: "/images/event1.jpg" },
  { id: 2, src: "/images/event2.png" },
  { id: 3, src: "/images/event3.jpg" },
  { id: 4, src: "/images/event4.jpg" },
];

function EventDiscovery() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 w-full max-w-[1112px] max-md:mb-2.5 max-md:max-w-full">
          <h1 className="mx-4 text-6xl font-medium text-center leading-[61px] min-h-[143px] text-stone-800 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            Discover amazing events and unforgettable experiences near you.
          </h1>
          <div className="flex flex-row gap-6 items-start mt-5 min-h-[330px] overflow-x-auto">
            {eventData.map((event) => (
              <EventCard key={event.id} src={event.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDiscovery;
