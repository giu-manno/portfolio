import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'styles/index.scss';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import AdesProjectPage from "pages/AdesProjectPage";
import S4EProjectPage from "pages/S4EProjectPage";

const router = createBrowserRouter([
    {
        path: "/portfolio/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
            path: "",
            element: <HomePage />
        }, {
            path: "labsec",
            element: <AdesProjectPage />
        }, {
            path: "norus",
            element: <S4EProjectPage />
        }]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
