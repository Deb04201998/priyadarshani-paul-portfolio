import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, Database, Clock, Users, BarChart3, CheckCircle2 } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "40% Usable Data Increase",
      description: "Extracted and cleaned 2,000+ fundraising records using Octoparse, increasing usable data volume by 40% versus manual collection.",
      icon: <Database className="w-8 h-8" />,
      company: "Duro Insights",
      category: "Data Engineering",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["2,000+ Records", "40% Data Uplift", "Octoparse"]
    },
    {
      title: "25% ROI Improvement",
      description: "Improved campaign ROI potential by 25% by enriching donor datasets and enabling predictive segmentation with Tableau dashboards.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "Duro Insights",
      category: "Business Impact",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["25% ROI Gain", "Predictive Segmentation", "Tableau"]
    },
    {
      title: "18% Forecast Accuracy Boost",
      description: "Enhanced forecasting accuracy by 18% by developing ML models using Python (Scikit-learn, Pandas) on business trend data.",
      icon: <BarChart3 className="w-8 h-8" />,
      company: "The Grey Matter Agency",
      category: "Analytics",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["18% Accuracy Gain", "Scikit-learn Models", "Business Trends"]
    },
    {
      title: "25% Process Defect Reduction",
      description: "Optimised business processes using Lean Six Sigma (DMAIC), reducing process defects by 25% through root cause analysis and redesign.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      company: "The Grey Matter Agency",
      category: "Process Optimization",
      gradient: "from-orange-500 to-red-500",
      metrics: ["25% Fewer Defects", "DMAIC", "Process Redesign"]
    },
    {
      title: "18% SLA Improvement",
      description: "Improved SLA adherence by 18% by monitoring AHT, FCR, and collaborating across logistics and pharmacy teams.",
      icon: <Clock className="w-8 h-8" />,
      company: "Amazon",
      category: "Operations",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["18% SLA Gain", "AHT & FCR", "Cross-Team Collaboration"]
    },
    {
      title: "30% Reporting Efficiency Gain",
      description: "Increased planning efficiency by automating weekly reports and KPI dashboards, cutting reporting time by 30%.",
      icon: <Users className="w-8 h-8" />,
      company: "Amazon",
      category: "Automation",
      gradient: "from-teal-500 to-green-500",
      metrics: ["30% Faster Reports", "KPI Dashboards", "Automation"]
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable impact delivered through data-driven analysis, reporting automation,
            and cross-functional collaboration across global teams.
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
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Data Volume Uplift</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">ROI / Defect Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">18%</div>
                  <div className="text-sm text-muted-foreground">Forecast Accuracy / SLA Gain</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">Reporting Efficiency</div>
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
