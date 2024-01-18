import React from 'react'
import '/src/index.css'
import Navbar from "/src/components/Navbar"
import Hero from "/src/components/Hero"
import Card from './components/Card'
import data from './data'
export default function App() {
  const cardComponents = data.map(element =>{
    return (<Card
      key={element.id}
      item={element}
    />)
})
  return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
                {cardComponents}
        </section>
      </div>
  )
}
