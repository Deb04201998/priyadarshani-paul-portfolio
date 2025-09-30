import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp, Award, Users, Target, Zap, Scale, FileText, BookOpen, Globe } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "qLegal",
      position: "Student Legal Advisor",
      location: "London Area, United Kingdom",
      duration: "Oct 2023 – May 2024",
      logo: "QL",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Delivered a workshop on corporate legal frameworks to 5 QMUL entrepreneurs, enhancing their understanding of compliance and business structuring",
        "Co-authored a legal publication offering regulatory insights to 2 startups on compliance strategies",
        "Provided comprehensive legal advisory services to university entrepreneurs and startup ventures",
        "Developed expertise in corporate legal frameworks and regulatory compliance strategies"
      ],
      technologies: ["Legal Research", "Workshop Delivery", "Publication Writing", "Regulatory Compliance", "Corporate Law"],
      highlights: [
        { icon: <Users className="w-5 h-5" />, text: "5 Entrepreneurs Trained", color: "text-blue-400" },
        { icon: <FileText className="w-5 h-5" />, text: "2 Startups Advised", color: "text-green-400" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Legal Publication", color: "text-purple-400" }
      ]
    },
    {
      company: "Sinha & Company, Advocates",
      position: "Associate Trainee",
      location: "Kolkata, West Bengal, India",
      duration: "Aug 2022 – Mar 2023",
      logo: "SC",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Conducted research on Article 21 of the Indian Constitution, with emphasis on privacy and dignity rights, and synthesized key provisions of the RTI Act and Juvenile Justice Act into concise internal briefs",
        "Prepared statutory summaries and procedural documentation under the Companies Act, 1956, and the Insolvency and Bankruptcy Code, ensuring legal accuracy and court compliance",
        "Structured analytical memoranda on arbitration procedures, focusing on unilateral appointments and procedural fairness, contributing to case strategy development",
        "Enhanced understanding of constitutional law, corporate law, and arbitration procedures through hands-on legal practice"
      ],
      technologies: ["Constitutional Law", "Corporate Law", "Arbitration", "Legal Research", "Document Drafting"],
      highlights: [
        { icon: <Scale className="w-5 h-5" />, text: "Constitutional Research", color: "text-orange-400" },
        { icon: <FileText className="w-5 h-5" />, text: "Statutory Documentation", color: "text-yellow-400" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Arbitration Analysis", color: "text-green-400" }
      ]
    },
    {
      company: "LEXCLAIM",
      position: "Legal Intern",
      location: "Delhi, India",
      duration: "Jun 2021 – Aug 2021",
      logo: "LC",
      color: "from-orange-500 to-red-500",
      achievements: [
        "Drafted plaints, applications, and IP-related commercial agreements in line with the Trademark Act, 1999, ensuring legal precision and alignment with client objectives",
        "Submitted a comparative research project on patent filing procedures in India and Australia, enhancing understanding of cross-jurisdictional regulatory frameworks",
        "Coordinated electronic court filings, tracked case progress, and facilitated communication between clients and legal teams to ensure efficient handling of IP matters",
        "Gained confidence in document drafting and statutory interpretation through practical application"
      ],
      technologies: ["Intellectual Property Law", "Trademark Act", "Patent Law", "Court Filings", "Legal Writing"],
      highlights: [
        { icon: <FileText className="w-5 h-5" />, text: "IP Agreements Drafted", color: "text-red-400" },
        { icon: <Globe className="w-5 h-5" />, text: "Cross-jurisdictional Research", color: "text-blue-400" },
        { icon: <Target className="w-5 h-5" />, text: "Court Filing Coordination", color: "text-green-400" }
      ]
    },
    {
      company: "Vidyam Legal [Former - UKP Legal]",
      position: "Legal Intern",
      location: "Pune, Maharashtra, India",
      duration: "Jan 2021 – Mar 2021",
      logo: "VL",
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Drafted plaints, WS, Civil Suits, MoU and legal contracts for individuals and corporate clients such as Huf (a German-based Company)",
        "Drafted Terms & Conditions and legal policies for an e-learning startup",
        "Developed expertise in commercial contract drafting and corporate legal documentation",
        "Gained experience in international client representation and cross-border legal matters"
      ],
      technologies: ["Contract Drafting", "Civil Litigation", "Corporate Law", "International Law", "Legal Policies"],
      highlights: [
        { icon: <Users className="w-5 h-5" />, text: "International Clients", color: "text-red-400" },
        { icon: <FileText className="w-5 h-5" />, text: "Contract Drafting", color: "text-blue-400" },
        { icon: <Target className="w-5 h-5" />, text: "Startup Legal Policies", color: "text-green-400" }
      ]
    },
    {
      company: "IP Assisto",
      position: "Research Intern",
      location: "Delhi, India",
      duration: "Jun 2020 – Jun 2020",
      logo: "IP",
      color: "from-indigo-500 to-purple-500",
      achievements: [
        "Wrote well-researched articles on subject matter related to Intellectual Property rights (IPR)",
        "Wrote case commentaries and participated in activities organized by IP ASSISTO",
        "Researched on Arbitration and Mediation laws and regulations and delivered analysis and assessments to the company's associates",
        "Produced legal documents such as briefs, pleadings and appeals"
      ],
      technologies: ["Intellectual Property Law", "Arbitration", "Mediation", "Legal Writing", "Case Commentary"],
      highlights: [
        { icon: <BookOpen className="w-5 h-5" />, text: "IP Articles Written", color: "text-purple-400" },
        { icon: <Scale className="w-5 h-5" />, text: "Arbitration Research", color: "text-blue-400" },
        { icon: <FileText className="w-5 h-5" />, text: "Legal Documents", color: "text-green-400" }
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in-up">
              Work <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Experience</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-shimmer"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animate-stagger-1 px-4">
            Building comprehensive legal expertise through diverse internships and advisory roles, 
            delivering measurable impact through innovative legal solutions and client-focused service.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`animate-fade-in-up animate-stagger-${index + 2}`}>
              <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                {/* Header */}
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-colors duration-300">{exp.position}</h3>
                        <div className="flex items-center gap-3 text-primary font-semibold text-lg sm:text-xl mt-2">
                          <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-2 sm:gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/10 rounded-full">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-white/10 rounded-full">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="text-center p-4 bg-white/5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                        <div className={`mx-auto mb-3 ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                          {highlight.icon}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-white">{highlight.text}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="grid gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {achievement}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-6 border-t border-gray-700">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
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
                Let's discuss how my legal expertise can support your business needs.
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
