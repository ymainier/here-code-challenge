import React, { Component } from "react";
import PropTypes from "prop-types";

import LoadingRepositoryList from "../components/LoadingRepositoryList";
import RepositoryList from "../components/RepositoryList";
import LoadingLanguageList from "../components/LoadingLanguageList";
import LanguageList from "../components/LanguageList";
import Error from "../components/Error";

import { connect } from "react-redux";
import { fetchRepositories, fetchLanguages } from "../actions";

import {
  LOADING_REPOSITORY_LIST,
  SHOW_REPOSITORY_LIST,
  LOADING_LANGUAGE_LIST,
  SHOW_LANGUAGE_LIST,
  ERROR
} from "../states";

export class App extends Component {
  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
    this.onBackToRepositoryList = this.onBackToRepositoryList.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchRepositories());
  }

  onSelect(name) {
    this.props.dispatch(fetchLanguages(name));
  }

  onBackToRepositoryList() {
    this.props.dispatch(fetchRepositories());
  }

  render() {
    return (
      <div className="app">
        {this.props.state === LOADING_REPOSITORY_LIST && (
          <LoadingRepositoryList />
        )}
        {this.props.state === SHOW_REPOSITORY_LIST && (
          <RepositoryList names={this.props.names} onSelect={this.onSelect} />
        )}
        {this.props.state === LOADING_LANGUAGE_LIST && (
          <LoadingLanguageList name={this.props.name} />
        )}
        {this.props.state === SHOW_LANGUAGE_LIST && (
          <LanguageList
            name={this.props.name}
            languageDistribution={this.props.languageDistribution}
            onBackToRepositoryList={this.onBackToRepositoryList}
          />
        )}
        {this.props.state === ERROR && (
          <Error onBackToRepositoryList={this.onBackToRepositoryList} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.string.isRequired,
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  languageDistribution: PropTypes.objectOf(PropTypes.number),
  dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(App);
