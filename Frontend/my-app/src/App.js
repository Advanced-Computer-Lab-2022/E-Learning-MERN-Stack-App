import "@stripe/stripe-js";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CoursePage from './pages/CoursePage';
import GuestPage from './pages/GuestPage';
import { useState } from 'react';
import React from 'react';
import NavStateContext from './context/NavStateContext';
import CurrentViewContext from './context/CurrentViewContext';
import CourseInfoContext from './context/CourseContext'
import CheckoutPage from './pages/CheckoutPage';
import Test from './pages/Test';
import UserPage from './pages/UserPage';
import UserInfoContext from './context/UserInfoContext';
import PaymentSuccessful from "./components/stripeComponents/PaymentSuccessful";
import PaymentCancelled from "./components/stripeComponents/PaymentCancelled"
import FiltersContextProvider from "./context/FiltersContext";
import CourseContextProvider from "./context/CourseContext";
function App() {
  const [navIdx, setNavIdx] = useState(0);
  const navIdxValue = { navIdx, setNavIdx };
  const [view, setView] = useState("guest");
  const viewValue = { view, setView };
  const [user, setUser] = useState({});
  const userValue = { user, setUser };
  return (
    <div className="App">
      <BrowserRouter>
        <UserInfoContext.Provider value={userValue}>
          <NavStateContext.Provider value={navIdxValue}>
            <CurrentViewContext.Provider value={viewValue}>
              <Routes>
                <Route path="/"
                  element=
                  {
                    <>
                      <CourseContextProvider>
                        <FiltersContextProvider>
                          <GuestPage />
                          <UserPage />
                        </FiltersContextProvider>
                        <CoursePage owned={false} />
                      </CourseContextProvider>
                      <CheckoutPage />
                    </>
                  }
                />
                <Route path="/test/:id"
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
            </CurrentViewContext.Provider>
          </NavStateContext.Provider>
        </UserInfoContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
