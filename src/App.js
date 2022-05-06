import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CoinPage from "./components/CoinPage";
import MainDiv from "./components/MainDiv";
import { AppContext } from "./AppContext";
import { useState } from "react";

const App = () => {

  const [user, setUser] = useState();

  return (
    <AppContext.Provider value = {{user, setUser}}>
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={MainDiv} exact />
        <Route path={"/coins/:id"} component={CoinPage} exact />
      </BrowserRouter>
    </div>
    </ AppContext.Provider>
  );
};

export default App;