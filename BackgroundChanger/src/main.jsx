import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Change from './NewComp/Change.jsx'



createRoot(document.getElementById("root")).render(<Change />);
