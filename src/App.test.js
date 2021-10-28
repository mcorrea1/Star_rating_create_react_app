import React from "react";
import { mount } from 'enzyme';
import App from "./App";

describe("<App/>", () => {
  it("Renders without crashing", () => {
    const app = mount(<App/>);
    expect(app.find( ".header" ).text()).toEqual('Please, select your choice rating');
  })
})

describe("Check that it shows five stars", () => {

  const app = mount(<App/>);
  it("Renders five star items", () => {
    expect(app.find("span.star img").length).toBe(5);
  });
});

describe("Check that if click on 2nd star then only first and second are active and third inactive", () => {

  const app = mount(<App/>);
  window.alert = jest.fn();
  
  it("Check that click activates clicked star or previous", () => {
    
    app.find("span.star").at(1).simulate("click")
    expect(window.alert).toHaveBeenCalled()
    
    //the star clicked 1 is active
    expect(app.find("span.star").at(1).hasClass('active')).toBe(true)

    //The previous star 0 also active
    expect(app.find("span.star").at(0).hasClass('active')).toBe(true)

    //The next star 2 is inactive
    expect(app.find("span.star").at(2).hasClass('active')).toBe(false)

    //The next star 3 is inactive
    expect(app.find("span.star").at(3).hasClass('active')).toBe(false)

    //The next star 4 is inactive
    expect(app.find("span.star").at(4).hasClass('active')).toBe(false)
    
  });
});