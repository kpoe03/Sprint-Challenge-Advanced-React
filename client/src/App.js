import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './components/PlayerList';
import Navbar from './components/Navbar';
class App extends React.Component {

  state = {
    players: []
  }

componentDidMount(){
  axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.setState({players: response.data})
    })
}

  render(){
  return (
    <div className="App">
     <Navbar/>
     <PlayerList players={this.state.players}/>
    </div>
  )};
}

export default App;