
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import db from './database/db'
import HomePage from './Pages/HomePage';
import Contacts from './Pages/Contacts';
function App() {
  console.log(db);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path='/contacts/:id' element={<Contacts />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
