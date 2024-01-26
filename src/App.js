import { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route,Navigate, Outlet } from 'react-router-dom';
// components
import DataProvider from './context/DataProvider';
import Menu from './components/navbar/Menu';
import Login from './components/Auth/Login';
import Home from './components/home/Home';

// eslint-disable-next-line no-undef
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Menu />
      <Outlet />
    </> : <Navigate replace to='/Auth' />
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/Auth' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            {/* <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route> */}

            {/* <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route> */}

            {/* <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update />} />
            </Route> */}

            {/* <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/about' element={<About />} />
            </Route> */}

            {/* <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact />} />
            </Route> */}
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
