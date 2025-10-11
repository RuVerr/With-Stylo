import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  window.addEventListener("load", () =>{
    const loader = document.getElementById("screenLoader");
    if(loader){
      loader.remove()
    }
  })
)
