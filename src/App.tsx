import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './routes/LandingPage'
import SharedDashboardLayout from './layout/SharedLayout'
import PageNotFound from './routes/PageNotFound'
import { Loading } from "./helpers/Loading";

const WorkSpace = lazy(()=> import('./routes/WorkSpace'))



function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/workspace' element={<SharedDashboardLayout />}>
        <Route path='/workspace' element={<WorkSpace/>} />
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </Suspense>
  )
}

export default App
