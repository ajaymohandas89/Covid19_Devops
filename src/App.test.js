import React from "react";
import ReactDOM from "react-dom";
import {render} from "@testing-library/react";
import App from "./App";
import {act} from "react-dom/test-utils";
import {expect} from "chai";
var jsdom = require("mocha-jsdom");
var assert = require("chai").assert;

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Verifying proper rendering of tags", () => {
  it("Verifying the header tag rendered correctly", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const headerTag = rootContainer.querySelector("h1");
    expect(headerTag.textContent).to.equal("Coronavirus COVID-19 Global Dashboard");
  });

  it("Verifying the footer tag rendered correctly", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const footerTag = rootContainer.querySelector("h4");
    expect(footerTag.textContent).to.includes("Northeastern University");
  });
});

describe("Verify if response is received", () => {
  it("should respond with JSON data", async () => {
    await fetch("https://corona.lmao.ninja/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        expect(200);
        expect(res.cases).to.be.a("number");
      });
  });
});
