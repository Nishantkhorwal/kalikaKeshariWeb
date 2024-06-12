import Home from "./pages/Home"
import './App.css'
import ContactInfo from "./pages/ContactInfo"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Enquiry from "./pages/Enquiry"
import Career from "./pages/Career"
import Admission from "./pages/Admission"
import ApplyNow from "./pages/ApplyNow"
import ParentTestimonials from "./pages/ParentTestimonials"
import StudentTestimonials from "./pages/StudentTestimonials"
import Vision from "./pages/Vision"
import FounderMessage from "./pages/FounderMessage"
import PrincipalMessage from "./pages/PrincipalMessage"


function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/contactinfo' element={<ContactInfo/>}/>
       <Route path='/enquiry' element={<Enquiry/>}/>
       <Route path='/career' element={<Career/>}/>
       <Route path='/admissionprocess' element={<Admission/>}/>
       <Route path='/applynow' element={<ApplyNow/>}/>
       <Route path='/parenttestimonials' element={<ParentTestimonials/>}/>
       <Route path='/studenttestimonials' element={<StudentTestimonials/>}/>
       <Route path='/vision' element={<Vision/>}/>
       <Route path='/foundermessage' element={<FounderMessage/>}/>
       <Route path='/principalmessage' element={<PrincipalMessage/>}/>
      
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
