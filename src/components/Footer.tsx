const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Debmalya Das. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with data, analytics, and dedication to driving business impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
