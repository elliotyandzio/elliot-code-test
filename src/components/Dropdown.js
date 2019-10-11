import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    eventsList: []
  };

  componentDidMount() {
    this.callApi();
  }

  callApi = async () => {
    const response = await fetch("/events");
    const body = await response.json();
    this.setState({ eventsList: body.data });
  };

  handleChange = e => {
    const { getEventName } = this.props;
    e.preventDefault();
    getEventName(e.target.value);
  };

  render() {
    const { eventsList } = this.state;
    return (
      <div className='dropdown'>
        <select onChange={this.handleChange}>
          <option>Select an option</option>
          {eventsList.map(event => (
            <option key={event} value={event}>
              {event.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
