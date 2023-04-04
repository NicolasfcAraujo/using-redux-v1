import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { useEffect } from "react"

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.href === "https://using-redux-v1.netlify.app/home/" || window.location.href === "https://using-redux-v1.netlify.app/home"){
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