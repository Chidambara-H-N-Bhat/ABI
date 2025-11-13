import React from 'react'
import "./clients.css"

function Clients() {
  const ci = [
    "https://kumarelectricals.co.in/image/logo/6.jpg",
    
    "https://kumarelectricals.co.in/image/logo/3.jpg",
    "https://kumarelectricals.co.in/image/logo/4.jpg",
    
    "https://kumarelectricals.co.in/image/logo/7.jpg",
    "https://kumarelectricals.co.in/image/logo/8.jpg",
    "https://kumarelectricals.co.in/image/logo/9.jpg",
    "https://kumarelectricals.co.in/image/logo/11.jpg",
    "https://kumarelectricals.co.in/image/logo/13.jpg"
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
