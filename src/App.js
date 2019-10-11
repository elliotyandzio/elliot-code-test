import React, { Component } from "react";
import Dropdown from "./components/Dropdown";
import IndividualEvents from "./components/IndividualEvents";

class App extends Component {
  state = {
    apiData: [],
    dropdownEvent: ""
  };

  componentDidMount() {
    this.callApi();
  }

  callApi = async () => {
    const response = await fetch(
      !this.state.dropdownEvent
        ? `/tennis_match`
        : `${this.state.dropdownEvent}`
    );
    const data = await response.json();
    this.setState({ apiData: data.data.events });
  };

  eventName = dataFromDropdownComponent => {
    this.setState({ dropdownEvent: dataFromDropdownComponent }, () => {
      this.callApi();
    });
  };

  render() {
    const { apiData } = this.state;
    return (
      <div className='App'>
        <h1>Smarkets Test</h1>
        <Dropdown getEventName={this.eventName} />
        <div className='events-list'>
          {apiData && apiData.length === 0 ? (
            <h1>No upcoming fixtures</h1>
          ) : (
            apiData.map(individualEventData => (
              <IndividualEvents
                key={individualEventData.id}
                data={individualEventData}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
