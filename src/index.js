import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'styles/index.scss';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import ProjectPage from "pages/ProjectPage";

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
            element: <ProjectPage />
        }]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
