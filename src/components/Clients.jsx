import React from 'react'
import "./clients.css"

function Clients() {
  const ci = [
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/6.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/3.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/11.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/13.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/4.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/7.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/8.jpg",
    "https://raw.githubusercontent.com/Chidambara-H-N-Bhat/ABI/main/9.jpg",  
  ]
  return (
      <div className="page-container">
      <h2>Clients</h2>
      <div className="clients-grid">
        {ci.map((url, i) => (
          <img key={i} src={url} alt={`Client ${i + 1}`} className="client-img" />
        ))}
      </div>
    </div>
  )
}

export default Clients
