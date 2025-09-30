import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp, Award, Users, Target, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Duro Insights",
      position: "Business Analyst",
      location: "Bristol, UK",
      duration: "Jan 2024 – Apr 2024",
      logo: "D",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Extracted and cleaned 2,000+ fundraising records using Octoparse, increasing usable data volume by 40%",
        "Improved campaign ROI potential by 25% by enriching donor datasets and enabling predictive segmentation",
        "Delivered Tableau dashboards with donor insights and regional trends, enabling strategy alignment",
        "Increased outreach precision by 18% by identifying engagement patterns across campaigns",
        "Co-authored campaign performance reports informing decisions for 5+ nonprofit partners"
      ],
      technologies: ["Python", "Octoparse", "Tableau", "Pandas", "NumPy"],
      highlights: [
        { icon: <TrendingUp className="w-5 h-5" />, text: "40% Data Volume Increase", color: "text-blue-400" },
        { icon: <Target className="w-5 h-5" />, text: "25% ROI Improvement", color: "text-green-400" },
        { icon: <Users className="w-5 h-5" />, text: "5+ Nonprofit Partners", color: "text-purple-400" }
      ]
    },
    {
      company: "The Grey Matter Agency",
      position: "Data Analyst",
      location: "Kolkata, IND",
      duration: "Sep 2021 – Sep 2022",
      logo: "G",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Reduced process defects by 25% via Lean Six Sigma (DMAIC) and root cause analysis",
        "Enhanced forecasting accuracy by 18% using ML models in Python (Scikit-learn, Pandas)",
        "Automated KPI reporting via Excel and Python, saving 10+ hours weekly",
        "Synthesized insights into high-quality executive presentations for stakeholders"
      ],
      technologies: ["Python", "Excel", "Scikit-learn", "Pandas", "Lean Six Sigma"],
      highlights: [
        { icon: <Award className="w-5 h-5" />, text: "25% Defect Reduction", color: "text-orange-400" },
        { icon: <Zap className="w-5 h-5" />, text: "18% Accuracy Improvement", color: "text-yellow-400" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "10+ Hours Weekly Saved", color: "text-green-400" }
      ]
    },
    {
      company: "Amazon",
      position: "Operations Analyst",
      location: "Kolkata, IND",
      duration: "Sep 2020 – Sep 2021",
      logo: "A",
      color: "from-orange-500 to-red-500",
      achievements: [
        "Reduced escalation volume by 15% through standardized resolution workflows",
        "Improved SLA adherence by 18% via monitoring AHT, FCR, and cross-team collaboration",
        "Automated weekly reports and KPI dashboards, cutting reporting time by 30%",
        "Boosted first-call resolution by 10% through real-time knowledge repository updates"
      ],
      technologies: ["Excel", "KPI Dashboards", "Automation", "Reporting"],
      highlights: [
        { icon: <Users className="w-5 h-5" />, text: "15% Escalation Reduction", color: "text-red-400" },
        { icon: <Target className="w-5 h-5" />, text: "18% SLA Improvement", color: "text-blue-400" },
        { icon: <Zap className="w-5 h-5" />, text: "30% Time Savings", color: "text-green-400" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white animate-fade-in-up">
              Work <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Experience</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-shimmer"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animate-stagger-1">
            Building production-grade systems and delivering measurable business impact 
            through innovative technical solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`animate-fade-in-up animate-stagger-${index + 2}`}>
              <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                {/* Header */}
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-gradient transition-colors duration-300">{exp.position}</h3>
                        <div className="flex items-center gap-3 text-primary font-semibold text-xl mt-2">
                          <Building2 className="w-5 h-5" />
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="text-center p-4 bg-white/5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                        <div className={`mx-auto mb-3 ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                          {highlight.icon}
                        </div>
                        <div className="text-sm font-semibold text-white">{highlight.text}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="grid gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex gap-4 p-5 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <TrendingUp className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {achievement}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-6 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm px-4 py-2 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up animate-stagger-5">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to <span className="text-gradient">Collaborate?</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how my analytical expertise can drive your business forward.
              </p>
              <div className="flex justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  Get In Touch
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
