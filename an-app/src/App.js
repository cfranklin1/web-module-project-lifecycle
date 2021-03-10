import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  
  state = {
    info: [],
    followers: [],
    login: ""
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

  componentDidUpdate(prevProps, prevState) {
    console.log("old state: ", prevState);
    console.log("new state: ", this.state);
    console.log("old props: ", prevProps);
    console.log("new props: ", this.props);
    console.log("any update");
    if(prevState.info !== this.state.info) {
      console.log("update");
      if(this.state.login === "cfranklin1") {
        axios.get("https://api.github.com/users/cfranklin1")
          .then(res => {
            this.setState({
              info: res.data,
              login: 'cfranklin1'
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    console.log(this.state)
  }
 
  


  render() {
    return <>
      <div className="card">
      <h1>user-card</h1>
      <img src={this.state.info.avatar_url} alt='users-avatar' />
        
        <div className="card-info">
          <h3 className="name">{this.state.info.name}</h3>
          <p className="username">{this.state.info.login}</p>
          <p>Location: {this.state.info.location}</p>
          <p>Profile:
            <a href={this.state.info.url}>{this.state.info.url}</a>
          </p>
          <p>Followers: {this.state.info.followers}</p>
          <p>Following: {this.state.info.following}</p>
          <p>Bio: {this.state.info.bio}</p>
        </div>

        <div className="container">
          {
          
          }
        </div>
      </div>
    </>
  };
}

export default App;
