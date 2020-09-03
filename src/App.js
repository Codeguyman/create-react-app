import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
import Navbar from  './Components/Navbar/Navbar';
import Tourlist from './Components/Tourlist';




 class App extends Component {
  render() {
    return (
   <React.Fragment>
     
     <Navbar/>
     <Tourlist />
   </React.Fragment>
    )
  }
}


export default App;
