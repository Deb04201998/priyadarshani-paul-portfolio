const Education = () => {
  const education = [
    {
      degree: "LL.M. in International Business Law",
      school: "Queen Mary University of London",
      period: "Sep 2023 – Sep 2024",
      gpa: "Merit",
      coursework: [
        "International Commercial Arbitration",
        "Alternative Dispute Resolution", 
        "Global IP Law",
        "E-commerce Transactions",
        "Mergers & Acquisitions"
      ],
      logo: "QM",
      dissertation: "Navigating the legal complexities of IP Arbitration in India—A Study of In Rem and In Personam rights (Distinction)"
    },
    {
      degree: "BBA.LLB",
      school: "Bharati Vidyapeeth",
      period: "2017 – 2022",
      gpa: "Grade A",
      coursework: ["International Business Law", "Constitutional Law", "Corporate Law", "Intellectual Property Law", "Arbitration Law"],
      logo: "BV"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            My academic journey in International Business Law and Legal Studies, reflecting continuous learning and practical application in legal practice
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 md:mb-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-base sm:text-lg">{edu.school}</p>
                  </div>
                </div>
                
                <div className="text-left sm:text-right mt-4 sm:mt-0">
                  <p className="text-gray-300 font-medium text-sm sm:text-base">{edu.period}</p>
                  <p className="text-green-400 font-semibold text-sm sm:text-base">{edu.gpa !== "N/A" ? `GPA: ${edu.gpa}` : ""}</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-3">
                  {edu.coursework.length > 1 ? "Relevant Coursework:" : "Achievement:"}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.coursework.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
                {edu.dissertation && (
                  <div className="mt-4 p-3 sm:p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <h5 className="text-sm sm:text-md font-semibold text-blue-300 mb-2">Dissertation:</h5>
                    <p className="text-gray-300 text-xs sm:text-sm">{edu.dissertation}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
