const UserCard = ({user, onRemove}) => {
    const {first_name, last_name, avatar, email} = user
    return (
        <div className="user-card">
            <div><strong>{first_name} {last_name}</strong></div>
            <div>{email}</div>
            <img src={avatar} alt="user-avatar"/>
            <button className="dismiss-btn" onClick={() => onRemove(user)}>Dismiss</button>
        </div>
    )
}

export default UserCard