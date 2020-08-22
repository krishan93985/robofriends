import React from 'react';
import Header from '../Components/Header';
import Cardarray from '../Components/Cardarray';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import { connect } from 'react-redux';
import { setSearchField,requestRobots } from '../actions';
import './App.css';

const mapStateToProps = (state) => {
    return {
        searchField:state.searchRobots.searchField,
        isPending:state.requestRobots.isPending,
        robots:state.requestRobots.robots,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
        fetchRobots:() => dispatch(requestRobots())
    }
}

class App extends React.Component {

    componentDidMount(){
        this.props.fetchRobots();
    }

    render(){
        const {searchField,onSearchChange,robots,isPending} = this.props;
        const changedarray = robots.filter(robot => {
            return robot.username.toLowerCase().includes(searchField.toLowerCase());
            });
            
            return isPending ?
            <h1 className='tc'>Loading...</h1> :
     (
     <div className='tc'> 
         <Header />
         <Searchbox onsearch={onSearchChange}/>
         <Scroll> 
         <Cardarray robots={changedarray}/>
         </Scroll>
     </div>
     );
    }            
}


export default connect(mapStateToProps,mapDispatchToProps)(App);