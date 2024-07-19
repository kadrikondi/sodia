import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Approute from "./route";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
function App() {
 

  return (
    // <div className="App">
    //   <Router>
    //     <Route component={Header} />
    //     <Route component={Approute} />
    //     <Route component={Footer} />
    //   </Router>
    // </div> 
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Approute} />
        </Switch>
        <Footer />
      </Router>
  );
}


export default App;
