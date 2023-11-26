import "./App.css"
import { useRef, useState } from "react"
import FirstComponents from "./components/FirstComponents"; 

const App = () => {
  const [data, setData] = useState([])
  const refText = useRef(null);

  return (
    <div>
      <FirstComponents/>
    </div>
  )
}

export default App