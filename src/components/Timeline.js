import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const generateTimelineEventComponents = (events) => {
  return events.map((event) => {
    const { person, status, timeStamp } = event;
    return (<TimelineEvent
      key={person}
      person={person}
      status={status}
      timeStamp={timeStamp}
    />);
  });
};

const Timeline = (props) => {
  const { events } = props;

  const eventComponents = generateTimelineEventComponents(events)

  events.forEach(function(event) {

  })
  return (
    <section>{eventComponents}</section>
  );
}

export default Timeline;
