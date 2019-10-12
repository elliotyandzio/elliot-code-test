import React from "react";
import { configure, shallow, mount } from "enzyme";
import { expect } from "chai";
import App from "./App";
import Dropdown from "./components/Dropdown";
import IndividualEvents from "./components/IndividualEvents";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App component testing", () => {
  it("renders main title", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Smarkets Test</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });

  it("renders one <Dropdown /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Dropdown)).to.have.lengthOf(1);
  });

  it("<IndividualEvent /> component exists after componentDidMount", async () => {
    const wrapper = await mount(<App />);
    expect(wrapper.contains(IndividualEvents)).to.equal(true);
  });
});
