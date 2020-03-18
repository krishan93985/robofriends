import React from 'react';
import Cardarray from '../Components/Cardarray';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import robots from '../robots';
import './App.css';

class App extends React.Component {
    constructor(){
    super();
    this.state = {
        robots:robots,
        searchField:''
    }
    }

    onSearchChange = (event) => { //using this syntax  cause this is used for class but not input
    this.setState({searchField:event.target.value});
    }

    render(){
        const {robots , searchField} = this.state;
        const changedarray = robots.filter(robot => {
            return robot.username.toLowerCase().includes(searchField.toLowerCase());
            });
            
            return !robots.length ?
            <h1 className='tc'>Loading..</h1> :
     (
     <div className='tc'> 
         <h1 className='f1'>Robofriends</h1>
         <Searchbox onsearch={this.onSearchChange}/>
         <Scroll> 
         <Cardarray robots={changedarray}/>
         </Scroll>
     </div>
     );
    }            
}


export default App;