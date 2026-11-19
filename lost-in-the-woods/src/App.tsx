import {Navigation} from "./components/Navigation";
import {Hero} from "./components/Hero";
import {Story} from "./components/Story";
import { Features } from "./components/Features";
import {World} from "./components/World";
import {Gallery} from "./components/Gallery";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import './App.css'


function App() {

  return (
    <main>
      <Navigation />
      <Hero />
      <Story />
      <Features />
      <World />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
