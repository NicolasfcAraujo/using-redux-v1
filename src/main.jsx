import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "../fontawesome-free-6.3.0-web/fontawesome-free-6.3.0-web/css/all.min.css"

import { Provider } from 'react-redux'
import { store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
