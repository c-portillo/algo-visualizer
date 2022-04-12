import React, { useState, useEffect } from 'react';
import Home from './pages/home/home.component';
import NavBar from './components/navbar/navbar.component';
import MergeSort from './pages/merge-sort/merge-sort.component';
import BubbleSort from './pages/bubble-sort/bubble-sort.component';
import SelectionSort from './pages/selection-sort/selection-sort.component';
import InsertionSort from './pages/insertion-sort/insertion-sort.component';
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import './App.css';

function App() {
  const [page, setPage] = useState("");

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    // <HashRouter basename="/sorting-visualizer/">
    <HashRouter>
      <div>
        <NavBar currentPage={page} />
        <Switch>
          <Route exact path="/" > <Home setPage={setPage} /> </Route>
          <Route path="/merge-sort"> <MergeSort setPage={setPage} /> </Route>
          <Route path="/bubble-sort"> <BubbleSort setPage={setPage} /> </Route>
          <Route path="/insertion-sort"> <InsertionSort setPage={setPage} /> </Route>
          <Route path="/selection-sort"> <SelectionSort setPage={setPage} /> </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
