import { ThemeProvider } from "./theme/ThemeContext";
import { SparkleField } from "./components/SparkleField";
import { Marquee } from "./components/Marquee";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { WalkingGuy } from "./components/WalkingGuy";

function App() {
  return (
    <ThemeProvider>
      <SparkleField />
      <Hero />
      <Marquee />
      <main>
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
      <WalkingGuy />
    </ThemeProvider>
  );
}

export default App;
