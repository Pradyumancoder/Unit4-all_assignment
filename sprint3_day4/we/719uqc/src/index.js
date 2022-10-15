import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppContextProviderComponent, { AppContext } from "./Context/AppContext";
import AuthContextProviderComponent from "./Context/AuthContext";
import { countReducer } from "./Reducer/reducer";

// countReducer

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// console.log(`App`, <App />);
root.render(
  <StrictMode>
    <AuthContextProviderComponent>
      <AppContextProviderComponent>
        {/* wrapped App around it */}
        <App />
      </AppContextProviderComponent>
    </AuthContextProviderComponent>
  </StrictMode>
);
