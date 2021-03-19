import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';

const App =() => {
  return(
    <div>
      <Home />
    </div>
  )
}

export default App;