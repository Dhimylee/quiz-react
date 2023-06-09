import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {QuizContext, QuizProvider} from './context/quiz'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
)
