import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import App from "./App";
import { persistor, store } from "./app/store";
import Spinner from "./components/Spinner/Spinner";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={<Spinner />}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Suspense>
    </Provider>
  </React.StrictMode>
);
