import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import KeyAchievements from "@/components/KeyAchievements";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Experience />
      <KeyAchievements />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
