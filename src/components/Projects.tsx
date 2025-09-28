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
      title: "Ansible Playbooks for Nginx",
      description: "A playbook that installs and configures Nginx on multiple servers",
      tags: ["Ansible", "AWS", "Configuration Management"],
      github: "https://github.com/AryaBaride/ansible-playbook-nginx",
      
    },
    {
      title: "Django-Blog-App",
      description: "Developed a Django-powered Blog Application with end-to-end CRUD operations, user authentication, and role-based access, allowing users to manage personalized blog posts.",
      tags: ["Python", "Django", "SQLite", "HTML", "CSS"],
      github: "https://github.com/AryaBaride/Django-Blogging-website",
      
    },
    {
      title: "Auto-rotational Backup",
      description: "A shell script that automates creation and maintains backup of your files",
      tags: ["Shell" , "AWS CLI"],
      github: "https://github.com/AryaBaride/auto-rotation",
      
    },
    {
      title: "Golang REST API",
      description: "A REST API application built with Golang",
      tags: ["Golang" , "Github"],
      github: "https://github.com/AryaBaride/Golang-ticket-booking-application",
    },
    {
      title: "Deployment of Strapi CMS using Terraform",
      description: "Infrastructure as Code project to deploy Strapi CMS on AWS using Terraform",
      tags: ["Terraform" , "Strapi" , "AWS"],
      github: "https://github.com/AryaBaride/strapi-terraform",
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
            Here are some of my recent projects showcasing infrastructure automation, 
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