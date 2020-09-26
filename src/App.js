import React, { Component } from 'react';
import './App.css';
import {fetchData} from './api/api.js';
import CardComponent from './components/CardComponent.jsx';
import ChartComponent from './components/ChartComponent.jsx';
class App extends Component{
  constructor(){
    super();
    this.state={
      df: null,
    }
  }

  async componentDidMount(){
    let df=await fetchData();
    this.setState({df});

  }
  render(){
    if(this.state.df==null)
      return(<div></div>);
    else{
      return (
      <div className="App">
        <CardComponent props={this.state.df} /> 
        <ChartComponent></ChartComponent> 
      </div>
    )
      }
};

}
export default App;
