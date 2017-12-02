import React, { Component } from "react";

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

class App extends Component {
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
      <div>
        {this.props.state === LOADING_REPOSITORY_LIST && (
          <LoadingRepositoryList />
        )}
        {this.props.state === SHOW_REPOSITORY_LIST && (
          <RepositoryList names={this.props.names} onSelect={this.onSelect} />
        )}
        {this.props.state === LOADING_LANGUAGE_LIST && <LoadingLanguageList />}
        {this.props.state === SHOW_LANGUAGE_LIST && (
          <LanguageList
            name={this.props.name}
            languageRepartition={this.props.languageRepartition}
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

export default connect(state => state)(App);
