import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages & Tools",
      skills: ["Python", "SQL", "R", "Excel", "Pandas", "NumPy"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Analytics & Frameworks",
      skills: ["Scikit-learn", "Statistical Modeling", "A/B Testing", "Regression Analysis", "Lean Six Sigma (DMAIC)", "Hypothesis Testing"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Visualization & Platforms",
      skills: ["Tableau", "Power BI", "Looker Studio", "Google Analytics", "AWS", "Excel Dashboards"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Business & Data Skills",
      skills: ["Data Cleaning", "Data Wrangling", "Reporting Automation", "KPI Design", "Process Optimization", "Workflow Automation"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Business Analyst with 2+ years of experience using data analysis to enhance customer operations, 
            streamline workflows, and drive strategic initiatives. Proficient in SQL, Excel, and Python for 
            uncovering insights, automating reporting processes, and improving service level performance. 
            Demonstrated success in optimizing campaign strategies and elevating customer experience through 
            data-driven solutions and cross-functional collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Extracted and cleaned 2,000+ fundraising records at Duro Insights using Octoparse, 
                  increasing usable data volume by 40% versus manual collection and improving campaign ROI 
                  potential by 25% with predictive segmentation.
                </p>
                <p>
                  Optimized processes at The Grey Matter Agency using Lean Six Sigma (DMAIC), reducing 
                  defects by 25%, and enhanced forecasting accuracy by 18% with ML models in Python. 
                  Automated KPI reporting with Excel and Python, saving 10+ hours weekly.
                </p>
                <p>
                  At Amazon, reduced escalation volume by 15% through workflow standardization, improved SLA 
                  adherence by 18% via KPI monitoring, and automated weekly reporting to cut reporting time by 30%.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
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
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Concepts</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Data Validation", "KPI Design", "Predictive Modeling", "Campaign Performance Tracking", "Business Storytelling"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
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
