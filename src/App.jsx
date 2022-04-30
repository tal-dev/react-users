import React from 'react';
import './App.css';
import Users from './Users'
import UserModal from './UserModal';

const api = "https://reqres.in/api/users"

const fetchData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data.data
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [],
      searchValue: "",
      darkTheme: false,
      isModalOpen: false
    };
  }

  componentDidMount() {
    fetchData(api)
    .then(data => {
      this.setState({
        users: data
      })
    })
  }

  handleSearch = (e) => {
    this.setState({searchValue: e.target.value})
  }

  toggleTheme = () => {
    this.setState({darkTheme: !this.state.darkTheme})
  }

  removeUser = (userToDelete) => {
    const updatedList = this.state.users.filter(user => user.id !== userToDelete.id)
    this.setState({users: updatedList})
  }

  openModal = () => {
    this.setState({isModalOpen: true})
  }

  addUser = (newUser) => {
    this.setState({isModalOpen: false})
    const updatedList = [...this.state.users, newUser];
    console.log(updatedList)
    this.setState({users: updatedList})
  }

  render() {
    const { users, searchValue, darkTheme, isModalOpen } = this.state
    const fileteredData = users.filter(user => user.first_name.toLowerCase().includes(searchValue.toLowerCase()))
    const themeText = darkTheme ? "Light" : "Dark"
    const themeClassName = darkTheme && "darkMode"
    
    return  (
      <div className={themeClassName}>
        <input className="searchInput" onChange={this.handleSearch} placeholder="Search" autoFocus/>
        {isModalOpen ? <UserModal onUserAdd={this.addUser} userId={users.length} /> : 
          <div className='container'>
            {fileteredData.length === 0 ? "No users found" : <Users users={fileteredData} onRemove={this.removeUser} />}
          </div>} 
        <div className='theme-btn' onClick={this.toggleTheme}>{themeText}</div>
        <div className='add-user-btn' onClick={this.openModal}>Add user</div>
      </div>
    )
  } 
}

export default App;