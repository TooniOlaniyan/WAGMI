import { useRef } from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Globalstyles from './components/styles/globalStyles';
import { ThemeContext, ThemeProvider } from 'styled-components'
import Home from './pages/Home';
import {light , dark} from './components/styles/theme'
import './App.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
        <ThemeProvider theme={light}>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default App;
