
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
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