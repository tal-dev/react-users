import UserCard from "./UserCard"

const Users = ({users, onRemove}) => {
    return users.map(user => <UserCard key={user.id} user={user} onRemove={onRemove} />)
}

export default Users
