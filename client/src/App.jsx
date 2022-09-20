import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // testing that data comes through

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('/members').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="app-container">
      {(typeof data.members == 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => {
          <p key={i}>{member}</p>
        })
      )}
    </div>
  )
}

export default App
