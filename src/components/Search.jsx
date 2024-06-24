import { useState } from "react"

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("")
  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }
  const handleSearch = () => {
    onSearch(username)
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter Github username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
