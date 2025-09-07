import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Bachelors of Engineering in Information Technology",
      company: "Savitribai Phule Pune University",
      location: "Pune, Maharashtra",
      period: "2022 - 2025",
      description: "",
      achievements: [
        
      ],
    },
    {
      title: "Diploma in Information Technology",
      company: "Government Polytechnic Pune",
      location: "Pune, Maharashtra",
      period: "2019 - 2022",
      description: "",
      achievements: [
    
      ],
    },

  ];

  const skills = [
    { category: "Cloud Platforms", items: ["AWS"] },
    { category: "Containerization", items: ["Docker", "Docker Compose"] },
    { category: "CI/CD Tools", items: ["Jenkins", "GitHub Actions"] },
    { category: "Infrastructure as Code", items: ["Terraform", "CloudFormation", "Ansible"] },
    { category: "Monitoring", items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"] },
    { category: "Scripting", items: ["Python", "Bash", "PowerShell", "Go"] },
  ];

  return (
    <section id="/resume.pdf" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <span className="text-hero-accent"></span>
          </h2>
          
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="bg-hero-accent hover:bg-hero-accent/90">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
          </Button>
        </a>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Educational Details</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl text-hero-accent">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-hero-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-hero-accent">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/50 text-hero-accent border-hero-accent/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;