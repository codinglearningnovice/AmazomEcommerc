import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StateProvider } from "./StateProvider.jsx";
import "./index.css";
import * as serviceWorker from "./serviceWorker.jsx";
import reducer, { initialState } from "./reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);

serviceWorker.unregistered();
