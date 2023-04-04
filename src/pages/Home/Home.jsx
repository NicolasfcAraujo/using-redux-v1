import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { useEffect } from "react"

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.href === "http://localhost:5173/home/" || window.location.href === "http://localhost:5173/home"){
      navigate("/home/posts")
    }
  })

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
export default Home