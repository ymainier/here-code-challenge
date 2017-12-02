import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import { App } from "./App";

import {
  LOADING_REPOSITORY_LIST,
  SHOW_REPOSITORY_LIST,
  LOADING_LANGUAGE_LIST,
  SHOW_LANGUAGE_LIST,
  ERROR
} from "../states";

function setup(state, configuration) {
  return shallow(
    <App
      state={state}
      names={configuration.names}
      name={configuration.name}
      languageRepartion={configuration.languageRepartion}
      dispatch={configuration.dispatch}
    />
  );
}

describe("<App />", () => {
  let configuration;

  beforeEach(() => {
    configuration = {
      names: ["first", "second", "third"],
      name: "first",
      languageRepartion: { javascript: 123 },
      dispatch: () => {}
    };
  });

  it("renders", () => {
    expect(setup(LOADING_REPOSITORY_LIST, configuration).exists()).to.be.true;
  });

  it("renders a <LoadingRepositoryList /> component in the LOADING_REPOSITORY_LIST state", () => {
    const app = setup(LOADING_REPOSITORY_LIST, configuration);
    expect(app.find("LoadingRepositoryList").length).to.equal(1);
  });

  it("renders a <RepositoryList /> component in the SHOW_REPOSITORY_LIST state", () => {
    const app = setup(SHOW_REPOSITORY_LIST, configuration);
    expect(app.find("RepositoryList").length).to.equal(1);
  });

  it("renders a <LoadingLanguageList /> component in the LOADING_LANGUAGE_LIST state", () => {
    const app = setup(LOADING_LANGUAGE_LIST, configuration);
    expect(app.find("LoadingLanguageList").length).to.equal(1);
  });

  it("renders a <LanguageList /> component in the SHOW_LANGUAGE_LIST state", () => {
    const app = setup(SHOW_LANGUAGE_LIST, configuration);
    expect(app.find("LanguageList").length).to.equal(1);
  });

  it("renders a <Error /> component in the ERROR state", () => {
    const app = setup(ERROR, configuration);
    expect(app.find("Error").length).to.equal(1);
  });
});
