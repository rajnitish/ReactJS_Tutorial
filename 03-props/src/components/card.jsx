import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mushrooms" />
        <h1>Hello, {props.user}!</h1>
        <p>Age: {props.age}</p>
      </div>
    </div>
  )
}


export const Jitu = 2.5



export default Card
