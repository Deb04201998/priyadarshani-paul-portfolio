import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, FileText, Globe, Users, TrendingUp, Target, Award, BookOpen } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Core Legal Practice",
      skills: ["Intellectual Property Law", "Commercial Arbitration", "Mergers & Acquisitions", "Corporate Compliance", "Contract Drafting", "Legal Research"],
      color: "from-blue-500 to-cyan-500",
      delay: "animate-stagger-1"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation & Analysis",
      skills: ["Legal Writing", "Due Diligence", "Statutory Analysis", "Case Commentary", "Memoranda Drafting", "Compliance Documentation"],
      color: "from-purple-500 to-pink-500",
      delay: "animate-stagger-2"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International & Cross-Jurisdictional",
      skills: ["International Business Law", "Cross-border Transactions", "Regulatory Frameworks", "Multi-jurisdictional Compliance", "Arbitration Procedures", "IP Rights Protection"],
      color: "from-green-500 to-emerald-500",
      delay: "animate-stagger-3"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Services & Communication",
      skills: ["Client Consultation", "Workshop Delivery", "Legal Advisory", "Team Collaboration", "Stakeholder Management", "Presentation Skills"],
      color: "from-orange-500 to-red-500",
      delay: "animate-stagger-4"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      metric: "Merit",
      description: "LL.M. Grade",
      color: "text-blue-400"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      metric: "Distinction",
      description: "Dissertation Grade",
      color: "text-purple-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: "5+",
      description: "Entrepreneurs Trained",
      color: "text-green-400"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      metric: "2+",
      description: "Startups Advised",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header with enhanced animations */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in-up">
              About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-shimmer"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-1 px-4">
            Aspiring Solicitor with LL.M. in International Business Law from Queen Mary University of London. 
            Specialized in Intellectual Property, Mergers & Acquisitions, and Commercial Arbitration. 
            Experienced in legal research, document drafting, and corporate compliance across multiple jurisdictions. 
            Demonstrated success in delivering workshops, providing regulatory insights to startups, and conducting 
            comprehensive legal analysis for complex commercial matters.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white animate-fade-in-up animate-stagger-2">
            Key <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group animate-fade-in-up animate-stagger-3">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className={`mx-auto mb-3 sm:mb-4 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{achievement.metric}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up animate-stagger-4">
          <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-2xl transition-all duration-500 group">
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gradient">Professional Summary</h3>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-blue-500 group-hover:bg-white/10 transition-colors duration-300">
                  <p className="text-lg leading-relaxed">
                    <span className="text-blue-400 font-semibold">qLegal:</span> Delivered corporate legal frameworks workshop to 5 QMUL entrepreneurs, 
                    enhancing their understanding of compliance and business structuring. Co-authored legal publication 
                    offering regulatory insights to 2 startups on compliance strategies.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-purple-500 group-hover:bg-white/10 transition-colors duration-300">
                  <p className="text-lg leading-relaxed">
                    <span className="text-purple-400 font-semibold">Sinha & Company:</span> Conducted research on Article 21 of the Indian Constitution 
                    and synthesized key provisions of RTI Act and Juvenile Justice Act. Prepared statutory summaries 
                    under Companies Act, 1956, and Insolvency and Bankruptcy Code.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-green-500 group-hover:bg-white/10 transition-colors duration-300">
                  <p className="text-lg leading-relaxed">
                    <span className="text-green-400 font-semibold">LEXCLAIM:</span> Drafted plaints, applications, and IP-related commercial agreements 
                    in line with Trademark Act, 1999. Submitted comparative research project on patent filing procedures 
                    in India and Australia, enhancing understanding of cross-jurisdictional regulatory frameworks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white animate-fade-in-up animate-stagger-5">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`card-gradient border-primary/20 shadow-elevated hover:shadow-2xl transition-all duration-500 hover:scale-105 group ${category.delay}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-white group-hover:text-gradient transition-colors duration-300">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Concepts */}
        <div className="mt-16 text-center animate-fade-in-up animate-stagger-5">
          <h4 className="text-2xl font-semibold mb-8 text-white">Core Concepts</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {["Legal Research", "Contract Drafting", "Due Diligence", "Regulatory Compliance", "Arbitration Procedures"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-6 py-3 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
