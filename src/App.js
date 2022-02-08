import "./App.css"

//components
import Navbar from "./components/Navbar/navbar"
import Home from "./components/Home/Home"
import Skills from "./components/Skills/skills"
import Project from "./components/Projects/projects"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
