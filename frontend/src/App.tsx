import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [array, setArray] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/users"
    )
    console.log(response.data.users)
    setArray(response.data.users)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="card">
      {array.map((user, index) => (
        <div key={index}>
          <span>{user}</span>
          <br />
        </div>
      ))}
    </div>
  )
}

export default App
