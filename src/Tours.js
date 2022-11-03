import React from 'react'
import Tour from './Tour'
export default function Tours({ tours, deleteTour }) {
  return (
    <main>
      <h2 className="about">our tours</h2>
      <section>
        {tours.map((element) => {
          console.log(element)
          return <Tour key={element.id} {...element} deleteTour={deleteTour} />
        })}
      </section>
    </main>
  )
}
