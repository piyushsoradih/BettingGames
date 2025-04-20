// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
// import App from "./App";


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={App} />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { BalanceProvider } from "./UserMoney/BalanceContext";
import App from "./App";
import { UserProvider } from "./RandomContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BalanceProvider>
      <UserProvider>
        <RouterProvider router={App} />
      </UserProvider>
    </BalanceProvider>
  </React.StrictMode>
);
