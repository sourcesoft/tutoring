import React from 'react'
import ReactDOM from 'react-dom/client'
import Hi from './App.tsx' // default only
// import Hi, { Something } from './App.tsx' // default and named export
// import { Something } from './App.tsx' // only named export
import './index.css'

const el = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(el)
//jsx: when we want to write html in JS
root.render(
  <React.StrictMode>
    <Hi />
  </React.StrictMode>,
)
