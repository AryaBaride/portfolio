import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "Deploying a Static Website to AWS Amplify from S3",
      excerpt: "This guide covers setting up the S3 bucket, configuring Amplify, and automating deployments.",
      date: "Feb 17, 2025",
      readTime: "2 min read",
      tags: ["AWS", "Amplify", "S3", "Static Website"],
      link: "https://static-website-hosting.hashnode.dev/deploying-a-static-website-to-aws-amplify-from-s3",
    },
    {
      title: "Deploying an application on Amazon EC2 using a free API",
      excerpt: "In this blog, we have created an application that fetches and displays weather data for any city using a free weather API. ",
      date: "February 21, 2025",
      readTime: "4 min read",
      tags: ["AWS", "EC2" , "API", "Deployment"],
      link: "https://weather-web-app-amazon-ec2.hashnode.dev/deploying-an-application-on-amazon-ec2-using-a-free-api",
    },
    {
      title: "Deploying a Scalable AWS VPC with Load Balancer and Auto Scaling Group",
      excerpt: "In this blog, we have created a VPC with two availability zones, public and private subnets, an Application Load Balancer (ALB), and an Auto Scaling Group (ASG).",
      date: "February 23, 2025",
      readTime: "5 min read",
      tags: ["AWS", "VPC", "Load Balancer", "Auto Scaling"],
      link: "https://aws-vpc-architecture.hashnode.dev/deploying-a-scalable-aws-vpc-with-load-balancer-and-auto-scaling-group",
    },
    {
      title: "Building a Serverless API with AWS Lambda, API Gateway, and DynamoDB",
      excerpt: "This blog covers creating a serverless RESTful API using AWS Lambda functions, API Gateway for routing, and DynamoDB for data storage.",
      date: "February 27, 2025",
      readTime: "3 min read",
      tags: ["AWS", "Lambda", "API Gateway", "DynamoDB"],
      link: "https://serverless-api-aws-lambda.hashnode.dev/building-a-serverless-api-with-aws-lambda-api-gateway-and-dynamodb",
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
                <a 
                  href={blog.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full block"
                >


                <Button 
                  variant="outline" 
                  className="border-hero-accent/30 hover:border-hero-accent hover:text-hero-accent w-full hover:bg-transparent"
                >
           
                  <ExternalLink className="mr-2 h-4 w-4 "  />
                  Read More
                </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;