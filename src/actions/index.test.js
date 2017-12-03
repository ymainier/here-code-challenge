import { expect } from "chai";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import * as actions from "./index";

describe("actions", () => {
  describe("synchronous", () => {
    describe("repositories", () => {
      it("should create an action to request repository list", () => {
        expect(actions.requestRepositories()).to.deep.equal({
          type: actions.FETCH_REPOSITORIES_REQUEST
        });
      });

      it("should create an action to receive repository list", () => {
        const repositories = [{ name: "first" }, { name: "second" }];
        expect(actions.receiveRepositories(repositories)).to.deep.equal({
          type: actions.FETCH_REPOSITORIES_SUCCESS,
          names: ["first", "second"]
        });
      });

      it("should create an action to handle repositories error", () => {
        expect(actions.handleRepositoriesError()).to.deep.equal({
          type: actions.FETCH_REPOSITORIES_FAILURE
        });
      });
    });

    describe("languages", () => {
      it("should create an action to request languages used in a repository", () => {
        expect(actions.requestLanguages()).to.deep.equal({
          type: actions.FETCH_LANGUAGES_REQUEST
        });
      });

      it("should create an action to receive languages used in a repository", () => {
        const name = "repository";
        const languageDistribution = { javascript: 123, java: 456 };
        expect(
          actions.receiveLanguages(name, languageDistribution)
        ).to.deep.equal({
          type: actions.FETCH_LANGUAGES_SUCCESS,
          languageDistribution,
          name
        });
      });

      it("should create an action to handle languages error", () => {
        expect(actions.handleLanguagesError()).to.deep.equal({
          type: actions.FETCH_LANGUAGES_FAILURE
        });
      });
    });
  });

  describe("asynchronous", () => {
    let mockStore, axiosMock;

    before(() => {
      axiosMock = new MockAdapter(axios);
      mockStore = configureMockStore([thunk]);
    });

    after(() => {
      axiosMock.restore();
    });

    afterEach(() => {
      axiosMock.reset();
    });

    describe("repositories", () => {
      it("should create FETCH_REPOSITORIES_REQUEST and FETCH_REPOSITORIES_SUCCESS actions when fetching repositories successfully", () => {
        axiosMock
          .onGet("https://api.github.com/users/heremaps/repos")
          .reply(200, [{ name: "first" }, { name: "second" }]);

        const store = mockStore({});

        return store.dispatch(actions.fetchRepositories()).then(() => {
          expect(store.getActions()).to.deep.equal([
            { type: actions.FETCH_REPOSITORIES_REQUEST },
            {
              type: actions.FETCH_REPOSITORIES_SUCCESS,
              names: ["first", "second"]
            }
          ]);
        });
      });

      it("should create FETCH_REPOSITORIES_REQUEST and FETCH_REPOSITORIES_FAILURE actions when there is an error while fetching repositories", () => {
        axiosMock
          .onGet("https://api.github.com/users/heremaps/repos")
          .reply(500);

        const store = mockStore({});

        return store.dispatch(actions.fetchRepositories()).then(() => {
          expect(store.getActions()).to.deep.equal([
            { type: actions.FETCH_REPOSITORIES_REQUEST },
            { type: actions.FETCH_REPOSITORIES_FAILURE }
          ]);
        });
      });
    });

    describe("languages", () => {
      it("should create FETCH_REPOSITORIES_REQUEST and FETCH_REPOSITORIES_SUCCESS actions when fetching languages successfully", () => {
        const name = "repository";
        axiosMock
          .onGet(`https://api.github.com/repos/heremaps/${name}/languages`)
          .reply(200, { javascript: 123, java: 456 });

        const store = mockStore({});

        return store.dispatch(actions.fetchLanguages(name)).then(() => {
          expect(store.getActions()).to.deep.equal([
            { type: actions.FETCH_LANGUAGES_REQUEST },
            {
              type: actions.FETCH_LANGUAGES_SUCCESS,
              languageDistribution: { javascript: 123, java: 456 },
              name
            }
          ]);
        });
      });

      it("should create FETCH_REPOSITORIES_REQUEST and FETCH_LANGUAGES_FAILURE actions when there is an error while fetching languages", () => {
        const name = "repository";
        axiosMock
          .onGet(`https://api.github.com/repos/heremaps/${name}/languages`)
          .reply(500);

        const store = mockStore({});

        return store.dispatch(actions.fetchLanguages(name)).then(() => {
          expect(store.getActions()).to.deep.equal([
            { type: actions.FETCH_LANGUAGES_REQUEST },
            { type: actions.FETCH_LANGUAGES_FAILURE }
          ]);
        });
      });
    });
  });
});
