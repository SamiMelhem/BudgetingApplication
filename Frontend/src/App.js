import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import RegistrationPage from './components/pages/RegistrationPage';
import Navbar from './components/Navbar';
import Services from './components/pages/Services';
import Products from './components/pages/Products';

function App(){
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={HomePage}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/products' exact Component={Products}/>
        <Route path='/sign-up' exact Component={RegistrationPage}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/register" element={<RegistrationPage />} />
//           <Route path="/user-profile" element={<UserProfilePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }