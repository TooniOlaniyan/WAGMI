import { useRef } from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Globalstyles from './components/styles/globalStyles';
import { ThemeContext, ThemeProvider } from 'styled-components'
import Home from './pages/Home';
import {light , dark} from './components/styles/theme'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import FundAccount from './pages/FundAccount';
import Transactions from './pages/Transactions';
import Invest from './pages/Invest';
import Settings from './pages/Settings';
import Withdraw from './pages/Withdraw';
import PrivateRoute from './components/PrivateRoute';
import SmoothScroll from './hooks/ScrollToTop';

function App() {
   const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
      options={{
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Globalstyles />
        <ToastContainer theme='colored' />
        <ThemeProvider theme={light}>
          <Router>
            <SmoothScroll/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/dashboard' element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
              <Route path='/withdraw' element={<PrivateRoute />}>
                <Route path='/withdraw' element={<Withdraw />} />
              </Route>
              <Route path='/transactions' element={<PrivateRoute />}>
                <Route path='/transactions' element={<Transactions />} />
              </Route>
              <Route path='/invest' element={<PrivateRoute />}>
                <Route path='/invest' element={<Invest />} />
              </Route>
              <Route path='/fund-account' element={<PrivateRoute />}>
                <Route path='/fund-account' element={<FundAccount />} />
              </Route>
              <Route path='/settings' element={<PrivateRoute />}>
                <Route path='/settings' element={<Settings />} />
              </Route>
              <Route path='/dashboard' element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default App;
