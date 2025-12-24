import Header from './Components/Header'
import Entry from './Components/Entry'
import data from './data.js'

export default function App() {

  const dataElements = data.map((data) => {
    return <Entry 
      {...data}
    />
  })

  return (
    <>
      <Header />
      {dataElements}
    </>
  )
}
