import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch >
            <Route path="/" component={Home} exact />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
