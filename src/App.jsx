
import { BrowserRouter, Route, Router } from 'react-router'
import './App.css'
import db from './database/db'
function App() {
  console.log(db);

  return (
    <>
      <BrowserRouter>
        <Router>

          <Route index element={<HomePage />} />
        </Router>

      </BrowserRouter>
    </>
  )
}

export default App
