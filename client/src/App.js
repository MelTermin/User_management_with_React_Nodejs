import { ToastContainer } from 'react-toastify';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import View from "./Components/View";
import AddUser from "./Components/AddUser"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div >
        <Router>
          <ToastContainer position="top-center"/>
          <Navbar />
         
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path={["/add", "/update/:id"]} component={AddUser} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:id" component={View} />
        </Switch>
      
        
      </Router>
      
    </div>
  );
}

export default App;
