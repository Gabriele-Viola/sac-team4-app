
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import db from './database/db'
import HomePage from './Pages/HomePage';
function App() {
  console.log(db);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
