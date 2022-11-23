import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoursePage from './pages/CoursePage';
import GuestPage from './pages/GuestPage';
import { useState } from 'react';
import React from 'react';
import NavStateContext from './context/NavStateContext';
function App() {
  const [navIdx, setNavIdx] = useState(0);
  const value = { navIdx, setNavIdx };
  return (
    <div className="App">
      <NavStateContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/"
              element=
              {
                <GuestPage />
              }
            />
            <Route path="/course"
              element=
              {
                <CoursePage />
              }
            />
          </Routes>
        </BrowserRouter>
      </NavStateContext.Provider>
    </div>
  );
}

export default App;
