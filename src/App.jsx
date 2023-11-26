import "./app.css"
import { useRef, useState } from "react"
import FirstComponents from "./components/firstComponents"; 

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