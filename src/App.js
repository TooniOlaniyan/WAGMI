import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Globalstyles from './components/styles/globalStyles';
import { ThemeContext, ThemeProvider } from 'styled-components'
import Home from './pages/Home';
import {light , dark} from './components/styles/theme'
import './App.css';

function App() {
  return (
    <div>
      <Globalstyles />
      <ThemeProvider theme={light} >
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App;
