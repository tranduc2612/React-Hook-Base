import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DemoUseState from "./DemoUseState";
import DemoUseEffect from "./DemoUseEffect";
import DemoUseReducer from "./DemoUseReducer";
import reportWebVitals from "./reportWebVitals";
import Content from "./Content";
import Content1 from "./Content1";
import Demo from "./Demo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Demo />
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
