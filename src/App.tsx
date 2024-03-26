import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App App-header">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
