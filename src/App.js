import { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  const deleteTour = (id) => {
    const newTours = tours.filter((elm) => elm.id !== id)

    setTours(newTours)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <div className="tour__left">
        <h2 className="titel__left">No Tours Left</h2>
        <button className="btn_refresh" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  )
}

export default App
