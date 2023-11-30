import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/home/HomePage.jsx';
import { CarcassonnePage } from './routes/projects/carcassonne/CarcassonnePage';
import { ProjectPage } from './components/ProjectMain/ProjectMainComponent.jsx';
import { ContextualAuthPage } from './routes/projects/contextualauth/ContextualAuthPage';
import { WizardChessPage } from './routes/projects/wizardchess/WizardChessPage';
import { ParchappPage } from './routes/projects/parchapp/ParchappPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects/carcassonne",
    element: <CarcassonnePage />,
  },
  {
    path: "/projects/contextual-auth",
    element: <ContextualAuthPage/>,
  },
  {
    path: "/projects/wizard-chess",
    element: <WizardChessPage  />,
  },
  {
    path: "/projects/parchapp",
    element: <ParchappPage  />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
