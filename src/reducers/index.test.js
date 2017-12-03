import { expect } from "chai";

import reducer from "./index";
import * as actions from "../actions";
import * as states from "../states";

describe("reducers", () => {
  it("should handle FETCH_REPOSITORIES_REQUEST", () => {
    expect(
      reducer({}, { type: actions.FETCH_REPOSITORIES_REQUEST })
    ).to.deep.equal({
      state: states.LOADING_REPOSITORY_LIST
    });
  });

  it("should handle FETCH_REPOSITORIES_SUCCESS", () => {
    expect(
      reducer(
        {},
        { type: actions.FETCH_REPOSITORIES_SUCCESS, names: ["first", "second"] }
      )
    ).to.deep.equal({
      state: states.SHOW_REPOSITORY_LIST,
      names: ["first", "second"]
    });
  });

  it("should handle FETCH_REPOSITORIES_FAILURE", () => {
    expect(
      reducer({}, { type: actions.FETCH_REPOSITORIES_FAILURE })
    ).to.deep.equal({
      state: states.ERROR
    });
  });

  it("should handle FETCH_LANGUAGES_REQUEST", () => {
    expect(
      reducer({}, { type: actions.FETCH_LANGUAGES_REQUEST })
    ).to.deep.equal({
      state: states.LOADING_LANGUAGE_LIST
    });
  });

  it("should handle FETCH_LANGUAGES_SUCCESS", () => {
    expect(
      reducer(
        {},
        {
          type: actions.FETCH_LANGUAGES_SUCCESS,
          name: "repository",
          languageDistribution: { javascript: 123, java: 456 }
        }
      )
    ).to.deep.equal({
      state: states.SHOW_LANGUAGE_LIST,
      name: "repository",
      languageDistribution: { javascript: 123, java: 456 }
    });
  });

  it("should handle FETCH_LANGUAGES_FAILURE", () => {
    expect(
      reducer({}, { type: actions.FETCH_LANGUAGES_FAILURE })
    ).to.deep.equal({
      state: states.ERROR
    });
  });
});
