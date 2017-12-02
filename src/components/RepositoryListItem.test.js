import React from "react";
import chai, { expect } from "chai";
import { shallow } from "enzyme";
import { spy } from "sinon";
import sinonChai from "sinon-chai";

import RepositoryListItem from "./RepositoryListItem";

chai.use(sinonChai);

describe("<RepositoryListItem />", () => {
  let repositoryName, onSelect, repositoryListItem;

  beforeEach(() => {
    onSelect = spy();
    repositoryName = "repository-name";
    repositoryListItem = shallow(
      <RepositoryListItem name={repositoryName} onSelect={onSelect} />
    );
  });

  it("renders", () => {
    expect(repositoryListItem.exists()).to.be.true;
  });

  it("should contain the repository name", () => {
    expect(repositoryListItem.text()).to.contain(repositoryName);
  });

  it("should call onSelect on click", () => {
    repositoryListItem.simulate("click");
    expect(onSelect).to.have.been.calledWith(repositoryName);
  });
});
