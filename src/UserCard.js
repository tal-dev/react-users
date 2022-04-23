const UserCard = ({first_name, last_name, email, avatar}) => {
    return (
        <div className="user-card">
            <div><strong>{first_name} {last_name}</strong></div>
            <div>{email}</div>
            <img src={avatar} alt="user-avatar"/>
        </div>
    )
}

export default UserCard