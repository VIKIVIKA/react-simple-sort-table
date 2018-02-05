import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sortable from './components/Sortable';

let tHead = [
    "URL",
    "Project",
    "Date",
    "Changed",
    "Date of Last Change",
    "Updated HTML"
];

let tblValues = [
  {
    "URL": "urlsa",
    "Project": "projectwa",
    "Date": "datewa",
    "Changed": "changedwa",
    "Date of Last Change": "lastchangewa",
    "Updated HTML": "htmlwa"
  },
  {
    "URL": "urls",
    "Project": "projectwa",
    "Date": "datewa",
    "Changed": "changedwa",
    "Date of Last Change": "lastchangewa",
    "Updated HTML": "htmwa"
  },
  {
    "URL": "urlsa",
    "Project": "projectwa",
    "Date": "datewa",
    "Changed": "changedwa",
    "Date of Last Change": "lastchangewa",
    "Updated HTML": "htmlwa"
  },
  {
    "URL": "urls",
    "Project": "projectwa",
    "Date": "datewa",
    "Changed": "changedwa",
    "Date of Last Change": "lastchangewa",
    "Updated HTML": "htmwa"
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchVal: '',
      tblValues: tblValues
    }
    this.handleValChange = this.handleValChange.bind(this);
  }
  handleValChange(e){
    let newArray = tblValues.filter(function(el){
      let resBool = false;
      Object.keys(el).map(function(key){
        if(el[key].indexOf(e.target.value) > -1){
          resBool = el[key].indexOf(e.target.value) > -1;
        }
        return true;
      });
      return resBool;
    });
    this.setState({searchVal: e.target.value, tblValues: newArray});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <input type="text" onChange={this.handleValChange} value={this.state.searchVal}/>
        <Sortable theads={tHead} tblValues={this.state.tblValues} searchVal={this.state.searchVal}/>
      </div>
    );
  }
}

export default App;
