import React from 'react';
import Home from './pages/home/home.component';
import NavBar from './components/navbar/navbar.component';
import MergeSort from './pages/merge-sort/merge-sort.component';
import BubbleSort from './pages/bubble-sort/bubble-sort.component';
import SelectionSort from './pages/selection-sort/selection-sort.component';
import InsertionSort from './pages/insertion-sort/insertion-sort.component';
import { HashRouter, BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <HashRouter basename='/sorting-visualizer/'>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/merge-sort" component={MergeSort} />
          <Route path="/bubble-sort" component={BubbleSort} />
          <Route path="/insertion-sort" component={InsertionSort} />
          <Route path="/selection-sort" component={SelectionSort} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
