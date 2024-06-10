import Home from "./pages/Home"
import './App.css'
import ContactInfo from "./pages/ContactInfo"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Enquiry from "./pages/Enquiry"


function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/contactinfo' element={<ContactInfo/>}/>
       <Route path='/enquiry' element={<Enquiry/>}/>
      
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
