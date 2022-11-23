import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoursePage from './pages/CoursePage';
import GuestPage from './pages/GuestPage';
import { useState } from 'react';
function App() {
  const [navActiveState, setNavActiveState] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element=
            {
              <GuestPage
                navActiveState={navActiveState}
                setNavActiveState={setNavActiveState}
              />
            } />
          <Route path="/course"
            element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
