import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './routes/LandingPage'
import SharedDashboardLayout from './layout/SharedLayout'
import PageNotFound from './routes/PageNotFound'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/workspace' element={<SharedDashboardLayout />}>
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
