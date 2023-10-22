import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './renderer/screen/Index';
const MainRouter = props=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default MainRouter;