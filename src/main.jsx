
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AuthStore from './context/AuthContext'
import TaskStore from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthStore>
    <TaskStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskStore>
  </AuthStore>,
)
