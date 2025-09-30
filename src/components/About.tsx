import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap, TrendingUp, Target, Users, BarChart3 } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages & Tools",
      skills: ["Python", "SQL", "R", "Excel", "Pandas", "NumPy"],
      color: "from-blue-500 to-cyan-500",
      delay: "animate-stagger-1"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Analytics & Frameworks",
      skills: ["Scikit-learn", "Statistical Modeling", "A/B Testing", "Regression Analysis", "Lean Six Sigma (DMAIC)", "Hypothesis Testing"],
      color: "from-purple-500 to-pink-500",
      delay: "animate-stagger-2"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Visualization & Platforms",
      skills: ["Tableau", "Power BI", "Looker Studio", "Google Analytics", "AWS", "Excel Dashboards"],
      color: "from-green-500 to-emerald-500",
      delay: "animate-stagger-3"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Business & Data Skills",
      skills: ["Data Cleaning", "Data Wrangling", "Reporting Automation", "KPI Design", "Process Optimization", "Workflow Automation"],
      color: "from-orange-500 to-red-500",
      delay: "animate-stagger-4"
    }
  ];

  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: "40%",
      description: "Data Volume Increase",
      color: "text-blue-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      metric: "25%",
      description: "ROI Improvement",
      color: "text-purple-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: "15%",
      description: "Escalation Reduction",
      color: "text-green-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      metric: "30%",
      description: "Time Savings",
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
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white animate-fade-in-up">
              About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-shimmer"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-1">
            Business Analyst with 2+ years of experience using data analysis to enhance customer operations, 
            streamline workflows, and drive strategic initiatives. Proficient in SQL, Excel, and Python for 
            uncovering insights, automating reporting processes, and improving service level performance. 
            Demonstrated success in optimizing campaign strategies and elevating customer experience through 
            data-driven solutions and cross-functional collaboration.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white animate-fade-in-up animate-stagger-2">
            Key <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group animate-fade-in-up animate-stagger-3">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className={`mx-auto mb-4 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.metric}</div>
                  <div className="text-sm text-gray-400">{achievement.description}</div>
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
                    <span className="text-blue-400 font-semibold">Duro Insights:</span> Extracted and cleaned 2,000+ fundraising records using Octoparse, 
                    increasing usable data volume by 40% versus manual collection and improving campaign ROI 
                    potential by 25% with predictive segmentation.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-purple-500 group-hover:bg-white/10 transition-colors duration-300">
                  <p className="text-lg leading-relaxed">
                    <span className="text-purple-400 font-semibold">The Grey Matter Agency:</span> Optimized processes using Lean Six Sigma (DMAIC), reducing 
                    defects by 25%, and enhanced forecasting accuracy by 18% with ML models in Python. 
                    Automated KPI reporting with Excel and Python, saving 10+ hours weekly.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-green-500 group-hover:bg-white/10 transition-colors duration-300">
                  <p className="text-lg leading-relaxed">
                    <span className="text-green-400 font-semibold">Amazon:</span> Reduced escalation volume by 15% through workflow standardization, improved SLA 
                    adherence by 18% via KPI monitoring, and automated weekly reporting to cut reporting time by 30%.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          <h3 className="text-4xl font-bold text-center text-white animate-fade-in-up animate-stagger-5">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`card-gradient border-primary/20 shadow-elevated hover:shadow-2xl transition-all duration-500 hover:scale-105 group ${category.delay}`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg text-white group-hover:text-gradient transition-colors duration-300">{category.title}</h4>
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
            {["Data Validation", "KPI Design", "Predictive Modeling", "Campaign Performance Tracking", "Business Storytelling"].map((concept, index) => (
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
