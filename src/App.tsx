import Projects from './components/Projects';
import { About, Contact, Footer, Hero, Nav, Process, Services, Stack } from './components/Sections';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
