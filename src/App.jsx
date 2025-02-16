import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/custom/Header'
import Footer from './components/custom/Footer'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  )
}

export default App
