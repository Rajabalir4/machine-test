import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink,Redirect } from "react-router-dom";
import HomePage from "./components/routes/HomePage";
import InformationSection from "./components/common/InformationSection";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="is-active" to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/inbox">Inbox</NavLink>
            </li>
            <li>
            <NavLink activeClassName="is-active"  to="/calender">Calender</NavLink >
            </li>
            <li>
            <NavLink activeClassName="is-active"  to="/careerPage">Career Page</NavLink >
            </li>
            <li>
            <NavLink activeClassName="is-active"  to="/Reports">Reports</NavLink >
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/jobs">
            <HomePage />
          </Route>
          <Route path="/inbox">
            <Inbox />
          </Route>
          <Route path="/calender">
            <Calender />
          </Route>
          <Route path="/careerPage">
            <Career />
          </Route>
          <Route path="/Reports">
            <Reports />
          </Route>

          <Route exact path="/">
          <Redirect to="/jobs" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Inbox() {
  return <InformationSection text={"hi im inbox section"} />;
}

function Calender() {
  return <InformationSection text={"hi im Calender section"} />;
}

function Career() {
  return <InformationSection text={"hi im Career section"} />;
}

function Reports() {
  return <InformationSection text={"hi im Reports section"} />;
}
