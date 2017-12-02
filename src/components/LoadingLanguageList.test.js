import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import LoadingLanguageList from "./LoadingLanguageList";

describe("<LoadingLanguageList />", () => {
  let repositoryName, loadingLanguageList;

  beforeEach(() => {
    repositoryName = "repository-name";
    loadingLanguageList = shallow(
      <LoadingLanguageList name={repositoryName} />
    );
  });

  it("renders", () => {
    expect(loadingLanguageList.exists()).to.be.true;
  });

  it("should contain the repository name", () => {
    expect(loadingLanguageList.text()).to.contain(repositoryName);
  });
});
