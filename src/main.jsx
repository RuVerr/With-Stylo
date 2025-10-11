import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

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
