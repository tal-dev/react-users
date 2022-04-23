import React from 'react';
import './App.css';
import Users from './Users'

const api = {
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [{
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ],
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      searchValue: "",
      darkTheme: false
    };
  }

  handleSearch = (e) => {
    this.setState({searchValue: e.target.value})
  }

  toggleTheme = () => {
    this.setState({darkTheme: !this.state.darkTheme})
  }

  render() {
    
    const fileteredData = api.data.filter(user => user.first_name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    const themeText = this.state.darkTheme ? "Light" : "Dark"
    const themeClassName = this.state.darkTheme && "darkMode"
    
    return  (
      <div className={themeClassName}>
        <input onChange={this.handleSearch} placeholder="Search" autoFocus/>
        <div className='container'>
          <Users users={fileteredData}/>
        </div>
        <div className='theme-btn' onClick={this.toggleTheme}>{themeText}</div>
      </div>
    )
  } 
}

export default App;