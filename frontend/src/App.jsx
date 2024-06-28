import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NoPage from './pages/NoPage';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage />} />
          <Route path = '/home' element = {<HomePage />} /> 
          <Route path = 'welcome' element = {<Welcome />} />
          <Route path = '/users'>
            <Route path = 'login' element = {<LoginPage />} />
            <Route path = 'signup' element = {<SignupPage />} />
          </Route>
          <Route path = '*' element = {<NoPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
