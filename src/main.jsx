// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { store } from './app/store'
// import { Provider } from 'react-redux'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h2>IMPACT DONATE</h2>,
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <Provider store={store}>
//         <RouterProvider router={router} />
//         </Provider>
   
//   </StrictMode>
// )
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css'; // Ant Design styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

