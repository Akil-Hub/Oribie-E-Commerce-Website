
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <article >
    <Navbar/>

    <Outlet />

    <Footer/>

    </article>
  )
}

export default RootLayout