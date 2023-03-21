import React, { Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './App.css';

// const state = {  //STATE should be use within a constructor as below
//   robots: robots,
//   Searchfield: ''
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState ({ searchfield: event.target.value })
    // const filteredRobots = this.state.robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    // })
    // console.log(filteredRobots);
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })   
  return   ( 
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      {/* <CardList robots = {this.state.robots}/>  */}
      <CardList robots = {filteredRobots} />
    </div>
    );
  }

}

export default App;

//STATE = are simply objects, or a description of your application
//PROPS = are input we get and we never modify it. unlike PROPS, 
//STATE are able to be change. also PROPS are things that come out of STATE 
























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
