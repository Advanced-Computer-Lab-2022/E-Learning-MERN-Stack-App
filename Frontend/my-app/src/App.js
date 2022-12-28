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
import { Cookies, useCookies } from "react-cookie";
// import CertificatePDF from "./components/certificate/CertificatePDF";


function App() {
  const [cookies] = useCookies(['userCookie']);
  const [navIdx, setNavIdx] = useState(0);
  const navIdxValue = { navIdx, setNavIdx };
  const [view, setView] = useState((cookies['userCookie'] !== undefined ? 'user' : 'guest'));
  const viewValue = { view, setView };

  // Deafulttt
  const [user, setUser] = useState(cookies['userCookie'] !== undefined ? cookies['userCookie'] : {});
  // For Testing
  // const [user, setUser] = useState({
  //   userName: "dummy123",
  //   firstName: "Dummy",
  //   lastName: "User",
  //   email: "dummy@domain.com",
  //   gender: "Male",
  //   role: "user",
  //   walletBalance: 145.25,
  //   coursesOwned: ['crs-1011', 'crs-1012', 'crs-1016'],
  //   notes: [],
  //   grades: [
  //     {
  //       testId: 'tst-01-crs-1011',
  //       testGrade: 80
  //     }, {
  //       testId: 'tst-02-crs-1011',
  //       testGrade: 67
  //     }
  //   ],
  //   progress: [
  //     {
  //       crsId: 'crs-1011',
  //       prog: 30
  //     }, {
  //       crsId: 'crs-1016',
  //       prog: 90
  //     }
  //   ],
  //   country: "Egypt",
  //   favoriteLanguage: "English",
  //   bio: "I am a dummy user, Created for testing.",
  // });
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
                        <CoursePage />
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
                <Route path="/certificate"
                // element=
                // {
                //   <CertificatePDF />
                // }
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
