import UserCard from "./UserCard"

const Users = ({users}) => {
    return users.map(({id, ...user}) => <UserCard key={id} {...user} />)
}

export default Users
