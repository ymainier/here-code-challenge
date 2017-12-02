import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import RepositoryList from "./RepositoryList";

describe("<RepositoryList />", () => {
  let names, repositoryList;

  beforeEach(() => {
    names = ["first", "second", "third"];
    repositoryList = shallow(
      <RepositoryList names={names} onSelect={() => {}} />
    );
  });

  it("renders", () => {
    expect(repositoryList.exists()).to.be.true;
  });

  it("should contain 3 <RepositoryListItem />", () => {
    expect(repositoryList.find("RepositoryListItem").length).to.equal(3);
  });
});
