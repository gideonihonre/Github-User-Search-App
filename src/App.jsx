import { useState } from "react"
import Search from "./components/Search"
import UserProfile from "./components/UserProfile"
import "./index.css"
function App() {
  const [user, setUser] = useState(null)

  const fetchUserData = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      )
      const userData = await userResponse.json()
      const reposResponse = await fetch(userData.repos_url)
      const reposData = await reposResponse.json()
      setUser({ ...userData, repos: reposData })
    } catch (error) {
      console.error("Error fetching user data:", error)
    }
  }
  return (
    <div className="app">
      <h1>Github User Search</h1>
      <Search onSearch={fetchUserData} />
      <UserProfile user={user} />
    </div>
  )
}

export default App
