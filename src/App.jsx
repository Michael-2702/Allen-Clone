import { useState } from 'react'
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import HomeScreen from './Components/homeScreen/HomeScreen'
import Exam from './Components/Pages/exam-folder/Exam'
import Programs from './Components/Pages/programs/Programs'
import Scholarships from './Components/Pages/scholarships/Scholarships'
import StudyMaterials from './Components/Pages/studyMaterials/StudyMaterials'
import TestSeries from './Components/Pages/testSeries/TestSeries'
import HeroSection from './Components/heroSection/heroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path='exam'  element={<Exam />} />
            <Route path='programs'  element={<Programs />} />
            <Route path='scholarships'  element={<Scholarships />} />
            <Route path='study-materials'  element={<StudyMaterials />} />
            <Route path='test-series'  element={<TestSeries />} />
          </Routes>
       

        <h1 className="">
          <HomeScreen />
        </h1>
        </div>
      </BrowserRouter>
  )
}

export default App
