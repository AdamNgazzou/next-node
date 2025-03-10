import React, { useEffect, useState } from 'react'

function Index() {

  const [message, setMessage] = useState("Loading")
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/api/home`).then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message)
        setPeople(data.people)
      }
    )
  }, [])

  return (
    <div>
      <div>{message}</div>
      {
        people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        ))
      }
    </div>
  )
}

export default Index
