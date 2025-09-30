import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Brain, Zap, Github, ExternalLink, TrendingUp, Target, Users, BarChart3, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fundraising Campaign Optimization Using ML",
      description: "Designed and implemented a machine learning workflow to analyze donor behavior, optimize campaign strategies, and improve fundraising ROI for nonprofit organizations.",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        {
          metric: "40% Donation Efficiency Increase",
          description: "Identified ROI drivers and recommended strategy improvements using ML insights",
          icon: <TrendingUp className="w-4 h-4" />,
          color: "text-green-400"
        },
        {
          metric: "2,000+ Records Processed",
          description: "Automated data extraction and cleaning to increase usable dataset volume by 40%",
          icon: <BarChart3 className="w-4 h-4" />,
          color: "text-blue-400"
        },
        {
          metric: "25% ROI Improvement",
          description: "Enhanced campaign performance through predictive segmentation and donor insights",
          icon: <Target className="w-4 h-4" />,
          color: "text-purple-400"
        }
      ],
      technologies: ["Python", "Octoparse", "Tableau", "Pandas", "NumPy", "Data Cleaning", "Visualization"],
      category: "Machine Learning & Analytics",
      gradient: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/debmalya-das/fundraising-ml",
      demoUrl: "#",
      status: "Completed",
      duration: "3 months"
    }
  ];

  const getGradientClasses = (gradient: string) => `bg-gradient-to-br ${gradient}`;

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-full relative z-10">
        {/* Enhanced Heading */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white animate-fade-in-up">
              Featured <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Projects</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-shimmer"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animate-stagger-1">
            Practical implementations in machine learning and analytics to extract insights and improve campaign outcomes.
          </p>
        </div>

        {/* Enhanced Carousel */}
        <div className="relative animate-fade-in-up animate-stagger-2">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="flex gap-8 justify-center">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="flex-shrink-0 w-full md:w-1/2 px-4">
                  <div className="h-full min-h-[700px] flex flex-col justify-center w-full max-w-2xl mx-auto">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full flex flex-col relative">
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                          {project.status}
                        </Badge>
                      </div>

                      <CardHeader className="pb-6 pt-8">
                        <div className="flex items-start gap-6">
                          <div className={`p-4 rounded-2xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
                            {project.icon}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                              <Sparkles className="w-2 h-2 text-white absolute top-0.5 left-0.5" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                                {project.category}
                              </Badge>
                              <div className="text-xs text-gray-400">{project.duration}</div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-colors duration-300 mb-2">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 flex-grow flex flex-col px-6">
                        <p className="text-gray-300 leading-relaxed text-base">
                          {project.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                          <div className="space-y-3">
                            {project.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                                <div className="flex-shrink-0 mt-1">
                                  <div className={`w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${achievement.color}`}>
                                    {achievement.icon}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-semibold text-base mb-1">
                                    {achievement.metric}
                                  </div>
                                  <p className="text-sm text-gray-400 leading-relaxed">
                                    {achievement.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3 min-h-[80px]">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-sm px-4 py-2 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="flex-1 bg-transparent border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <Github className="w-4 h-4" />
                              View Code
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="flex-1 bg-transparent border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                            asChild
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>

          {/* Enhanced Mobile Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-colors duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="flex justify-center mt-20 px-4 animate-fade-in-up animate-stagger-3">
          <Card className="card-gradient border-primary/20 shadow-elevated w-full max-w-3xl hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Interested in <span className="text-gradient">Collaboration?</span>
                </h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always excited to work on challenging problems and innovative solutions. 
                Let's discuss how we can build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  asChild
                >
                  <a href="mailto:debmalya12thaug@gmail.com">
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://github.com/debmalya-das" target="_blank" rel="noopener noreferrer">
                    View GitHub
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
