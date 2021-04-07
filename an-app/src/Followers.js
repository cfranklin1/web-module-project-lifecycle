import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';

class Followers extends React.Component {

    state = {

        follower: [],
        
      }
      
      componentDidMount() {
        axios.get("https://api.github.com/users/cfranklin1/followers")
          .then(res => {
            this.setState({
              follower: res.data[0]
            });
          }) 
          .catch(err => {
            console.log(err)
          });
      }
    
  
    render() {
    return <>
    <Router>
    

    <h2>Followers:</h2>

    <div className="followers-card"> 
      <img src={this.state.follower.avatar_url} alt='followers-avatar' className="img-img"/>
      <h3 className="name">{this.state.follower.name}</h3>
        <p className="username">{this.state.follower.login}</p>
        <p>Location: {this.state.follower.location}</p>
       
        <p>Followers: {this.state.follower.followers}</p>
        <p>Following: {this.state.follower.following}</p>
        <p>Bio: {this.state.follower.bio}</p>

        <a href={this.state.follower.html_url}>
            <button type="button" className="profile-button">Profile</button></a> 

    </div>
    
       
    </Router>
    </>
    }

}
export default Followers;