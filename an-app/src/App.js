import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Followers from "./Followers"

class App extends React.Component {
  
  state = {

    info: []

  }
  
  componentDidMount() {
    axios.get("https://api.github.com/users/cfranklin1")
      .then(res => {
        this.setState({
          info: res.data
        });
      })
      .catch(err => {
        console.log(err)
      });

  }

 
  render() {
    return <div className="app-div">
    <Router>

      <div className="user-card">

      <h1>user-card</h1>
      <img src={this.state.info.avatar_url} alt='users-avatar' className="img-img"/>
        
        <div className="card-info">
          <h3 className="name">{this.state.info.name}</h3>
          <p className="location">Location: {this.state.info.location}</p>
          
          <p className="username">{this.state.info.login}</p>
        
          <section>

            <p>Followers: {this.state.info.followers} 
            <Link to="/Followers" className="follow-link">+</Link></p>
            <p>Following: {this.state.info.following}</p>

          </section>

          <a href={this.state.info.html_url}>
            <button type="button" className="profile-button">Profile</button></a> 
        </div>

      </div>
      <Link to="/" className=""><button id="gitHub"> ^^^ </button></Link>

        <Route path="/Followers">
            <Followers />
        </Route>
 
    </Router>
    </div>
  };
}

export default App;
