import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Menu from './components/navbar/Menu';
// import { BrowserRouter, Routes, Route,Router } from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ForgotPassword from './components/Auth/ForgotPassword.jsx';
// import SecretsList from './components/Secrets/SecrectList';
// import PostSecret from './components/Secrets/PostSecret';
function App() {
  return (
 <div className='App'>
<Login/>
 </div>
  );
}
export default App;

