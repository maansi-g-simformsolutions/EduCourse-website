import "./styles.css";
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';
import Course from "./components/Course";
import AllCourses from './components/AllCourses';

export default function App() {
  const btnHandle = () => {
    toast.success("This is my first message",{
      position: "bottom-right"
    });
  };
  
  return (
    <div className="App">
      <ToastContainer />
      <Home />
      <AllCourses />
    </div>
  );
}
