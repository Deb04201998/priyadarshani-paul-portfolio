import { ArrowDown, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile-avatar.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 backdrop-blur-sm"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 animate-stagger-1"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-30 animate-stagger-2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-50 animate-stagger-3"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image with enhanced effects */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden animate-float">
                <img
                  src={profileImage}
                  alt="Priyadarshani Paul"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/30 via-purple-500/20 to-transparent animate-pulse-glow"></div>
              {/* Sparkle effects */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse">
                <Sparkles className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
              </div>
            </div>
          </div>

          {/* Main Content with staggered animations */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="block text-white animate-fade-in-left animate-stagger-1">
                Priyadarshani
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient animate-fade-in-right animate-stagger-2">
                Paul
              </span>
            </h1>

            <div className="animate-fade-in-up animate-stagger-3">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
                Aspiring Solicitor | LL.M. in International Business Law
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-shimmer"></div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-4 px-4">
              Aspiring Solicitor with LL.M. in International Business Law from Queen Mary University of London. 
              Focused on Intellectual Property, Mergers & Acquisitions, and Commercial Arbitration. 
              Experienced in legal research, document drafting, and corporate compliance across multiple jurisdictions.
            </p>
          </div>

          {/* Enhanced Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 text-gray-300 animate-fade-in-up animate-stagger-5 px-4">
            <div className="flex items-center gap-3 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-xs sm:text-sm md:text-base">priyadarshani.paul@example.com</span>
            </div>
            <div className="flex items-center gap-3 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-xs sm:text-sm md:text-base">+44 7407735660</span>
            </div>
            <div className="flex items-center gap-3 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 group-hover:text-pink-300 transition-colors" />
              <span className="text-xs sm:text-sm md:text-base">London, UK</span>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="animate-scale-in animate-stagger-5">
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Learn More About Me</span>
              <ArrowDown className="animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform duration-300" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
