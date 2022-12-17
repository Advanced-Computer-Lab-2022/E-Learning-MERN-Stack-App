import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoursePage from './pages/CoursePage';
import GuestPage from './pages/GuestPage';
import { useState } from 'react';
import React from 'react';
import NavStateContext from './context/NavStateContext';
import CurrentViewContext from './context/CurrentViewContext';
import CourseInfoContext from './context/CourseInfoContext'
import CheckoutPage from './pages/CheckoutPage';
import Test from './pages/Test';
function App() {
  const [navIdx, setNavIdx] = useState(0);
  const navIdxValue = { navIdx, setNavIdx };
  const [view, setView] = useState("guest");
  const viewValue = { view, setView };
  return (
    <div className="App">
      {/* <NavStateContext.Provider value={value}>
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
      </NavStateContext.Provider> */}
      <BrowserRouter>

        <Routes>
          <Route path="/"
            element=
            {
              <NavStateContext.Provider value={navIdxValue}>
                <CurrentViewContext.Provider value={viewValue}>
                  <GuestPage />
                  <CourseInfoContext.Provider>
                    <CoursePage owned={false} />
                  </CourseInfoContext.Provider>
                  <CheckoutPage />
                </CurrentViewContext.Provider>
              </NavStateContext.Provider>
            }
          />
          <Route path="/test"
            element=
            {
              <Test />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
