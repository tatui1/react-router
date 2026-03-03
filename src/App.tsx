import { Routes,Route } from "react-router";
import { HomePage } from "./pages/home/HomePage"


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
