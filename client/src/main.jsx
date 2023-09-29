import Loader from "./components/UI/Loader/Loader";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./assets/css/global.scss";
import { Suspense } from "react";
import "./assets/css/index.css";
import App from "./App";
import "./utils/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
