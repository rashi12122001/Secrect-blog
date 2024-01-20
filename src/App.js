import { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import DataProvider from './context/DataProvider';
import Header from './components/navbar/Menu';
import Login from './components/Auth/Login.jsx';
import Home from './components/home/Home.jsx';


// eslint-disable-next-line no-undef
const PrivateRoute = ({ element: Element, isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? (
    <>
      <Header />
      <Element {...props} />
    </>
  ) : (
    <Navigate replace to='/Auth' />
  );
};


function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box>
          <Routes>
            {/* eslint-disable-next-line no-undef */}
            <Route path='/Auth' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
