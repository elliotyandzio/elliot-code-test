import React from "react";
import moment from "moment";

const IndividualEvents = ({ data }) => {
  return (
    <div className='indiv-event'>
      <h2>{data.name}</h2>
      <p>{moment(data.start_datetime).format("llll")}</p>
      <a href={`https://smarkets.com/${data.full_slug}`}>More Info</a>
    </div>
  );
};

export default IndividualEvents;
