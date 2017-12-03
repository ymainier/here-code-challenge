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
  return axios
    .get("https://api.github.com/users/heremaps/repos")
    .then(result => dispatch(receiveRepositories(result.data)))
    .catch(() => dispatch(handleRepositoriesError()));
};

export function requestLanguages() {
  return {
    type: FETCH_LANGUAGES_REQUEST
  };
}

export function computeLanguageDistribution(languageData = {}) {
  const total = Object.keys(languageData).reduce(
    (sumSoFar, key) => sumSoFar + languageData[key],
    0
  );
  if (total === 0) return {};
  return Object.keys(languageData).reduce((objectSoFar, key) => {
    objectSoFar[key] = Math.round(languageData[key] / total * 10000) / 100;
    return objectSoFar;
  }, {});
}

export function receiveLanguages(name, languageData = {}) {
  return {
    type: FETCH_LANGUAGES_SUCCESS,
    languageDistribution: computeLanguageDistribution(languageData),
    name
  };
}

export function handleLanguagesError() {
  return {
    type: FETCH_LANGUAGES_FAILURE
  };
}

export const fetchLanguages = name => dispatch => {
  dispatch(requestLanguages());
  return axios
    .get(`https://api.github.com/repos/heremaps/${name}/languages`)
    .then(result => dispatch(receiveLanguages(name, result.data)))
    .catch(() => dispatch(handleLanguagesError()));
};
