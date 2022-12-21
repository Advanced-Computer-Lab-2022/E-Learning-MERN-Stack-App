import "@stripe/stripe-js";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoursePage from './pages/UserPage';
import ClientPage from './pages/ClientPage';
import { useState } from 'react';
import React from 'react';
import NavStateContext from './context/NavStateContext';
import CurrentViewContext from './context/CurrentViewContext';
import CourseInfoContext from './context/CourseInfoContext'
import CheckoutPage from './pages/CheckoutPage';
import Test from './pages/Test';
import UserInfoContext from './context/UserInfoContext';
import PaymentSuccessful from "./components/stripeComponents/PaymentSuccessful";
import PaymentCancelled from "./components/stripeComponents/PaymentCancelled"
import GuestPage from "./pages/GuestPage";
import UserPage from "./pages/UserPage";

function App() {
  const [navIdx, setNavIdx] = useState(0);
  const navIdxValue = { navIdx, setNavIdx };
  const [view, setView] = useState("guest");
  const viewValue = { view, setView };
  const [user, setUser] = useState({});
  const userValue = { user, setUser };
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
              <UserInfoContext.Provider value={userValue}>
                <NavStateContext.Provider value={navIdxValue}>
                  <CurrentViewContext.Provider value={viewValue}>
                    <GuestPage />
                    <UserPage />
                    <CourseInfoContext.Provider>
                      <CoursePage owned={false} />
                    </CourseInfoContext.Provider>
                    <CheckoutPage />
                  </CurrentViewContext.Provider>
                </NavStateContext.Provider>
              </UserInfoContext.Provider>
            }
          />
          <Route path="/test"
            element=
            {
              <Test />
            }
          />
          <Route path="/successful_payment"
            element=
            {
              <PaymentSuccessful />
            }
          />
          <Route path="/cancel_payment"
            element=
            {
              <PaymentCancelled />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
