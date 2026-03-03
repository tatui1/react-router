import { Routes,Route } from "react-router";
import { ContactsPage } from "./pages/contacts/ContactsPage"
import { HomePage } from "./pages/home/HomePage"


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
      </Routes>
    </div>
  )
}

export default App
