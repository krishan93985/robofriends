import React from "react";
import Header from "../Header/Header";
import Cardarray from "../Cardarray/Cardarray";
import Searchbox from "../Searchbox/Searchbox";
import Scroll from "../Scroll/Scroll";
import "./MainPage.css";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter((robot) => {
              return robot.username.toLowerCase().includes(searchField.toLowerCase());
           });
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <Searchbox onsearch={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1 id="loader" className="tc">Loading...</h1>
          ) : (
            <Cardarray robots={this.filterRobots()} />
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
