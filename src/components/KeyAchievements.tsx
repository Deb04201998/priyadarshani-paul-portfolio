import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, FileText, BookOpen, Scale, Target, Globe } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "5 Entrepreneurs Trained",
      description: "Delivered corporate legal frameworks workshop to 5 QMUL entrepreneurs, enhancing their understanding of compliance and business structuring.",
      icon: <Users className="w-8 h-8" />,
      company: "qLegal",
      category: "Legal Education",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["5 Entrepreneurs", "Workshop Delivery", "Corporate Frameworks"]
    },
    {
      title: "2 Startups Advised",
      description: "Co-authored legal publication offering regulatory insights to 2 startups on compliance strategies and business structuring.",
      icon: <FileText className="w-8 h-8" />,
      company: "qLegal",
      category: "Legal Advisory",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["2 Startups", "Legal Publication", "Regulatory Insights"]
    },
    {
      title: "Constitutional Research",
      description: "Conducted comprehensive research on Article 21 of the Indian Constitution, focusing on privacy and dignity rights, and synthesized RTI Act provisions.",
      icon: <Scale className="w-8 h-8" />,
      company: "Sinha & Company",
      category: "Constitutional Law",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["Article 21 Research", "Privacy Rights", "RTI Act Analysis"]
    },
    {
      title: "Statutory Documentation",
      description: "Prepared statutory summaries and procedural documentation under Companies Act, 1956, and Insolvency and Bankruptcy Code for court compliance.",
      icon: <BookOpen className="w-8 h-8" />,
      company: "Sinha & Company",
      category: "Corporate Law",
      gradient: "from-orange-500 to-red-500",
      metrics: ["Companies Act", "IBC Compliance", "Court Documentation"]
    },
    {
      title: "IP Agreements Drafted",
      description: "Drafted plaints, applications, and IP-related commercial agreements in line with Trademark Act, 1999, ensuring legal precision and client objectives.",
      icon: <Target className="w-8 h-8" />,
      company: "LEXCLAIM",
      category: "Intellectual Property",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["Trademark Act", "IP Agreements", "Legal Drafting"]
    },
    {
      title: "Cross-jurisdictional Research",
      description: "Submitted comparative research project on patent filing procedures in India and Australia, enhancing understanding of cross-jurisdictional regulatory frameworks.",
      icon: <Globe className="w-8 h-8" />,
      company: "LEXCLAIM",
      category: "International Law",
      gradient: "from-teal-500 to-green-500",
      metrics: ["India-Australia", "Patent Procedures", "Regulatory Frameworks"]
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Measurable impact delivered through legal expertise, client advisory services,
            and comprehensive legal research across multiple jurisdictions and practice areas.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(achievement.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.company}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {achievements.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Entrepreneurs Trained</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">2</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Startups Advised</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Legal Internships</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">3</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Practice Areas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
