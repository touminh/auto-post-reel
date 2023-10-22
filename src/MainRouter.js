import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './renderer/screen/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
