import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Approute from "./route";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import Termandpolicy from "./component/pages/Termandpolicy";
function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Route component={Header} />
    //     <Route component={Approute} />
    //     <Route component={Footer} />
    //   </Router>
    // </div>
    <div className="App">
      {/* <header className="app-header">
        <h1>Welcome to Sodia</h1>
      </header>
      <main className="app-main">
        <Termandpolicy />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Sodia. All Rights Reserved.</p>
      </footer> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Approute} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
