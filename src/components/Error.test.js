import React from "react";
import chai, { expect } from "chai";
import { shallow } from "enzyme";
import { spy } from "sinon";
import sinonChai from "sinon-chai";

import Error from "./Error";

chai.use(sinonChai);

describe("<Error />", () => {
  let onBackToRepositoryList, error;

  beforeEach(() => {
    onBackToRepositoryList = spy();
    error = shallow(<Error onBackToRepositoryList={onBackToRepositoryList} />);
  });

  it("renders", () => {
    expect(error.exists()).to.be.true;
  });

  it("should call onBackToRepositoryList on link click", () => {
    error.find("a").simulate("click");
    expect(onBackToRepositoryList).to.have.been.called;
  });
});
