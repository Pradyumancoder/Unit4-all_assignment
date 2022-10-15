import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from "./Context/AppContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppContextProvider>
  </StrictMode>
);
