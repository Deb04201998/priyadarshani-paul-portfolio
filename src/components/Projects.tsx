import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Brain, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fundraising Campaign Optimization Using ML",
      description: "Designed and implemented a machine learning workflow to analyze donor behavior, optimize campaign strategies, and improve fundraising ROI for nonprofit organizations.",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        {
          metric: "40% Donation Efficiency Increase",
          description: "Identified ROI drivers and recommended strategy improvements using ML insights"
        },
        {
          metric: "2,000+ Records Processed",
          description: "Automated data extraction and cleaning to increase usable dataset volume by 40%"
        }
      ],
      technologies: ["Python", "Octoparse", "Tableau", "Pandas", "NumPy", "Data Cleaning", "Visualization"],
      category: "Machine Learning & Analytics",
      gradient: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/debmalya-das/fundraising-ml"
    }
  ];

  const getGradientClasses = (gradient: string) => `bg-gradient-to-br ${gradient}`;

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practical implementations in machine learning and analytics to extract insights and improve campaign outcomes.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="flex gap-4 justify-center">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-full md:w-1/2 px-2">
                  <div className="h-full min-h-[600px] flex flex-col justify-center w-full max-w-lg mx-auto">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {project.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {project.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                          {project.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                  <Zap className="w-3 h-3 text-primary" />
                                </div>
                              </div>
                              <div>
                                <div className="text-primary font-semibold text-sm">
                                  {achievement.metric}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex-grow">
                          <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2 min-h-[60px]">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-16 px-4">
          <Card className="card-gradient border-primary/20 shadow-elevated w-full max-w-2xl">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on challenging problems and innovative solutions. 
                Let's discuss how we can build something amazing together.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:debmalya12thaug@gmail.com">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
