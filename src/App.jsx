import { useState } from "react";

import "./App.css";
import NavigationRoutes from "./routes/NavigationRoutes";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="app">
        <NavigationRoutes />
      </div>
    </Provider>
  );
}

export default App;
