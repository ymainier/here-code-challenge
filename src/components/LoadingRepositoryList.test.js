import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import LoadingRepositoryList from "./LoadingRepositoryList";

describe("<LoadingRepositoryList />", () => {
  it("renders", () => {
    const loadingRepositoryList = shallow(<LoadingRepositoryList />);
    expect(loadingRepositoryList.exists()).to.be.true;
  });
});
