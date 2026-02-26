// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
// import App from './app/App.jsx'
// import { store } from './app/store'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//  <StrictMode>
//   <Provider store={store}>
//    <App />
//   </Provider>
//  </StrictMode>
// )

import { App } from '@/app'
import { store } from '@/app/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <Provider store={store}>
   <App />
  </Provider>
 </React.StrictMode>
)
