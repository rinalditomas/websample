import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Switch, Route, withRouter } from "react-router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <About />;
          }}
        />
        <Route
          exact
          path="/contact"
          render={() => {
            return <Contact />;
          }}
        />
        <Route
          exact
          path="/work"
          render={() => {
            return <Projects />;
          }}
        />
         <Route
            render={() => {
              return <NotFound />;
            }}
          />
      </Switch>
      
      
        
    </div>
  );
}

export default withRouter(App);
