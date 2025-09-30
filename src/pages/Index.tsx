import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import KeyAchievements from "@/components/KeyAchievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <KeyAchievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
