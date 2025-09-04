import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kubernetes CI/CD Pipeline",
      description: "Automated deployment pipeline using Jenkins, Docker, and Kubernetes with GitOps workflows",
      tags: ["Kubernetes", "Jenkins", "Docker", "GitOps", "Helm"],
      github: "#",
      demo: "#",
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform modules for AWS infrastructure provisioning with multi-environment support",
      tags: ["Terraform", "AWS", "CloudFormation", "Ansible"],
      github: "#",
      demo: "#",
    },
    {
      title: "Monitoring Stack",
      description: "Complete observability solution with Prometheus, Grafana, and ELK stack",
      tags: ["Prometheus", "Grafana", "ELK", "Monitoring", "Alerting"],
      github: "#",
      demo: "#",
    },
    {
      title: "Microservices Architecture",
      description: "Containerized microservices deployment with service mesh and API gateway",
      tags: ["Microservices", "Istio", "Kong", "Docker", "K8s"],
      github: "#",
      demo: "#",
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
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-secondary/50 text-hero-accent border-hero-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" className="border-hero-accent/30 hover:border-hero-accent">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-hero-accent hover:bg-hero-accent/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;