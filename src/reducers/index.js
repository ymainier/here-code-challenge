import {
  LOADING_REPOSITORY_LIST,
  SHOW_REPOSITORY_LIST,
  LOADING_LANGUAGE_LIST,
  SHOW_LANGUAGE_LIST,
  ERROR
} from "../states";

import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILURE,
  FETCH_LANGUAGES_REQUEST,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAILURE
} from "../actions";

// TODO : Replace names by repositories
const rootReducers = (state = {}, actions = {}) => {
  switch (actions.type) {
    case FETCH_REPOSITORIES_REQUEST:
      return {
        ...state,
        state: LOADING_REPOSITORY_LIST
      };
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        state: SHOW_REPOSITORY_LIST,
        names: actions.names
      };
    case FETCH_LANGUAGES_REQUEST:
      return {
        ...state,
        state: LOADING_LANGUAGE_LIST
      };
    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        state: SHOW_LANGUAGE_LIST,
        name: actions.name,
        languageRepartition: actions.languageRepartition
      };
    case FETCH_REPOSITORIES_FAILURE:
    case FETCH_LANGUAGES_FAILURE:
      return {
        ...state,
        state: ERROR
      };
    default:
      return state;
  }
};

export default rootReducers;
