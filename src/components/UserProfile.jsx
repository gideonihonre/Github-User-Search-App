const UserProfile = ({ user }) => {
  if (!user) return null
  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </p>
      <h3>Repositories</h3>
      <ul>
        {user.repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserProfile
