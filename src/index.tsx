import './index.css'
import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import Menu from './pages/Menu'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
)
