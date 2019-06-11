import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here
  return (
    <section>
      <h3>{props.person}</h3>
      <Timestamp time={props.time} />
      <p>{props.status}</p>
    </section>
  );
}

export default TimelineEvent;
