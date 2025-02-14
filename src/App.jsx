// App.js

import Nav from "./components/Nav"
//import TracingBeam from "./components/ui/TracingBeam" // Ensure consistent naming
import {Home, About, Project, Resume, Contact, Footer} from "./sections"

export default function App() {
  return (
    <main className="relative bg-slate-900">
      <Nav />
        <section className="xl:padding-l wide:padding-r padding-b ">
          <Home />
        </section>
        <section className="padding">
          <About />
        </section>
        <section className="padding">
          <Project />
        </section>
        <section className="padding">
          <Resume />
        </section>
        <section className="padding">
          <Contact />
        </section>
        <section className="padding">
          <Footer />
        </section>
      
    </main>
  )
}
