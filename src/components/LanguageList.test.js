import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import LanguageList from "./LanguageList";

describe("<LanguageList />", () => {
  let name, languageDistribution, languageList;

  beforeEach(() => {
    name = "here-repositiory";
    languageDistribution = { javascript: 123, java: 456 };
    languageList = shallow(
      <LanguageList
        name={name}
        languageDistribution={languageDistribution}
        onBackToRepositoryList={() => {}}
      />
    );
  });

  it("renders", () => {
    expect(languageList.exists()).to.be.true;
  });

  it("should contain the repository name", () => {
    expect(languageList.find("h1").text()).to.contain(name);
  });

  it("should contain the same number of li as there keys in languageDistribution", () => {
    expect(languageList.find("li").length).to.equal(2);
  });
});
