import TimerScreen from './timer/TimerScreen';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectsScreen from './projects/ProjectsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProjectsScreen />} />
        <Route path='/timer' element={<TimerScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
