import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Docker CI/CD Pipeline",
      description: "A containerized application which will help you track all your tasks",
      tags: ["Docker", "Python", "Flask", "Node.js"],
      github: "https://github.com/AryaBaride/Docker-Flask-app",
     
    },
    {
      title: "Node.js application deployment",
      description: "A nodejs application deployment using docker",
      tags: ["Docker", "Node.js", "Javascript"],
      github: "https://github.com/AryaBaride/node-application-deployment",
      
    },
    {
      title: "Shell Scripting Automation",
      description: "A shell script that lists all the running resources in your AWS account",
      tags: ["Shell", "AWS CLI"],
      github: "https://github.com/AryaBaride/aws-resource-tracker",
      
    },
    {
      title: "Auto-rotational Backup",
      description: "A shell script that automates creation and maintains backup of your files",
      tags: ["Shell" , "AWS CLI"],
      github: "https://github.com/AryaBaride/auto-rotation",
      
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-hero-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent DevOps projects showcasing infrastructure automation, 
            CI/CD pipelines, and cloud architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:border-hero-accent/50 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-hero-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {project.description}
                </CardDescription>
              </CardHeader>


              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* GitHub Button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-hero-accent hover:bg-hero-accent/90">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;