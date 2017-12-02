import axios from "axios";

export const FETCH_REPOSITORIES_REQUEST = "FETCH_REPOSITORIES_REQUEST";
export const FETCH_REPOSITORIES_SUCCESS = "FETCH_REPOSITORIES_SUCCESS";
export const FETCH_REPOSITORIES_FAILURE = "FETCH_REPOSITORIES_FAILURE";

export const FETCH_LANGUAGES_REQUEST = "FETCH_LANGUAGES_REQUEST";
export const FETCH_LANGUAGES_SUCCESS = "FETCH_LANGUAGES_SUCCESS";
export const FETCH_LANGUAGES_FAILURE = "FETCH_LANGUAGES_FAILURE";

export function requestRepositories() {
  return {
    type: FETCH_REPOSITORIES_REQUEST
  };
}

export function receiveRepositories(repositories = []) {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    names: repositories.map(repository => repository.name)
  };
}

export function handleRepositoriesError() {
  return {
    type: FETCH_REPOSITORIES_FAILURE
  };
}

export const fetchRepositories = () => dispatch => {
  dispatch(requestRepositories());
  axios
    .get("https://api.github.com/users/heremaps/repos")
    .then(result => dispatch(receiveRepositories(result.data)))
    .catch(() => dispatch(handleRepositoriesError()));
};

export function requestLanguages() {
  return {
    type: FETCH_LANGUAGES_REQUEST
  };
}

export function receiveLanguages(name, languageRepartition = {}) {
  return {
    type: FETCH_LANGUAGES_SUCCESS,
    name,
    languageRepartition
  };
}

export function handleLanguagesError() {
  return {
    type: FETCH_LANGUAGES_FAILURE
  };
}

export const fetchLanguages = name => dispatch => {
  dispatch(requestLanguages());
  axios
    .get(`https://api.github.com/repos/heremaps/${name}/languages`)
    .then(result => dispatch(receiveLanguages(name, result.data)))
    .catch(() => dispatch(handleLanguagesError()));
};
