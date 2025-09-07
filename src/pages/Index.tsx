import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Blogs />
        <Resume />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border bg-section-bg">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2024 Arya Baride Portfolio. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;