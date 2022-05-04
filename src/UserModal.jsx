import React, {Component} from "react"

class UserModal extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            avatar: ""
        }
    }

    handleInputChange = (e) => {
        switch(e.target.id) {
            case "firstName":
                this.setState({firstName: e.target.value})
                break;
            case "lastName":
                this.setState({lastName: e.target.value})
                break
            case "email":
                this.setState({email: e.target.value})
                break
            case "avatar":
                this.setState({avatar: e.target.value})
                break
        }
    }

    prepareUserData = () => {
        const {email, firstName, lastName, avatar} = this.state
        if(!email || !firstName || !lastName || !avatar) {
            alert("Please fill in all fields!")
            return
        }
        const newUser = {
            id: this.props.userId + 1,
            email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            avatar: this.state.avatar
        }
        this.props.onUserAdd(newUser)
    }

    render() {

        return (
            <form action="/" className="user-modal">
                <label htmlFor="firstname">First Name</label><br />
                <input type="text" id="firstName" required onChange={this.handleInputChange}/><br />
                <label htmlFor="lastName">Lasts Name</label><br />
                <input type="text" id="lastName" required onChange={this.handleInputChange}/><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" required onChange={this.handleInputChange}/><br />
                <label for="avatar">Avatar</label><br />
                <input type="text" id="avatar" required onChange={this.handleInputChange}/><br />
                <input type="submit" onClick={this.prepareUserData}></input>
                <div className="close" onClick={this.props.onModalClose}></div>       
            </form>
        )
    }
}

export default UserModal