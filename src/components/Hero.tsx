import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import devopsImage from "@/assets/devops-image.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${devopsImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
      <div className="mb-8 relative">
        <Avatar className="w-40 h-40 mx-auto mb-6 mt-3 ring-4 ring-hero-accent shadow-hero rounded-full overflow-hidden">
          <AvatarImage src="/portfolio/photo1.jpg" alt="Profile /" className="object-cover" translate-y-2 />
          <AvatarFallback className="text-4xl font-bold bg-gradient-card rounded-full">Dev</AvatarFallback>
        </Avatar>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-hero-accent rounded-full animate-pulse" />
      </div>


          {/* Main Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="mb-4 bg-secondary/50 text-hero-accent border-hero-accent/20">
              Cloud/DevOps Enthusiast
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Building</span>{" "}
              <span className="text-hero-accent">Infrastructure</span>
              <br />
              <span className="text-foreground">That</span>{" "}
              <span className="text-hero-secondary">Scales</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate DevOps engineer specializing in cloud infrastructure, automation, 
              and CI/CD pipelines. I help teams deploy faster and more reliably.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-hero-accent hover:bg-hero-accent/90 text-primary-foreground px-8 py-6 text-lg"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-primary-foreground px-8 py-6 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/AryaBaride"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-hero-accent hover:bg-transparent"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/AryaBaride"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-hero-accent hover:bg-transparent"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;