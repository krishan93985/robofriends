import React from "react";
import MainPage from '../Components/MainPage/MainPage';
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions/actions";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    fetchRobots: () => dispatch(requestRobots()),
  };
};

class App extends React.Component {
  render() {
    return (
      <MainPage {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
