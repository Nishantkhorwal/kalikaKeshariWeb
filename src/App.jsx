import Home from "./pages/Home"
import './App.css'
import ContactInfo from "./pages/ContactInfo"
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/contactinfo' element={<ContactInfo/>}/>
      
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
