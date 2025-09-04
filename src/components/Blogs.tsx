import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "Building Scalable CI/CD Pipelines with Jenkins and Kubernetes",
      excerpt: "Learn how to create robust continuous integration and deployment pipelines using Jenkins, Docker, and Kubernetes for modern applications.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["CI/CD", "Jenkins", "Kubernetes", "Docker"],
      link: "#",
    },
    {
      title: "Infrastructure as Code Best Practices with Terraform",
      excerpt: "Explore advanced Terraform techniques for managing cloud infrastructure, including modules, state management, and multi-environment deployments.",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["Terraform", "IaC", "AWS", "Best Practices"],
      link: "#",
    },
    {
      title: "Monitoring Microservices: A Complete Observability Guide",
      excerpt: "Comprehensive guide to implementing monitoring and observability for microservices using Prometheus, Grafana, and distributed tracing.",
      date: "February 10, 2024",
      readTime: "15 min read",
      tags: ["Monitoring", "Microservices", "Prometheus", "Grafana"],
      link: "#",
    },
    {
      title: "GitOps Workflow: Modern Deployment Strategies",
      excerpt: "Deep dive into GitOps principles and how to implement them using ArgoCD and Flux for automated and reliable deployments.",
      date: "January 22, 2024",
      readTime: "10 min read",
      tags: ["GitOps", "ArgoCD", "Deployment", "Automation"],
      link: "#",
    },
  ];

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-hero-accent">Blog Posts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and experiences from the world of DevOps, cloud infrastructure, 
            and automation best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:border-hero-accent/50 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blog.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-hero-accent transition-colors">
                  {blog.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {blog.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-secondary/50 text-hero-accent border-hero-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="border-hero-accent/30 hover:border-hero-accent hover:text-hero-accent w-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;