import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomeScreen from './Components/homeScreen/HomeScreen'
import Neet from './Components/Pages/exam-folder/Neet'
import Jee from './Components/Pages/exam-folder/Jee'
import Class from './Components/Pages/exam-folder/Class6-10'
import Programs from './Components/Pages/programs/Programs'
import Scholarships from './Components/Pages/scholarships/Scholarships'
// import StudyMaterials from './Components/Pages/studyMaterials/StudyMaterials'
// import TestSeries from './Components/Pages/testSeries/TestSeries'
import HeroSection from './Components/heroSection/heroSection'



function App() {

  return (
    <BrowserRouter>
      <div>
        
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path='exam/neet'  element={<Neet />} />
            <Route path='exam/jee'  element={<Jee />} />
            <Route path='exam/classes-6-10'  element={<Class />} />
            <Route path='programs/online-programs'  element={<Programs />} />
            <Route path='scholarships'  element={<Scholarships />} />
            {/* <Route path='study-materials'  element={<StudyMaterials />} />
            <Route path='test-series'  element={<TestSeries />} /> */}
          </Routes>
       


          <HomeScreen />

        </div>
      </BrowserRouter>
  )
}

export default App
