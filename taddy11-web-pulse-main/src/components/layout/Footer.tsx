import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Sisuni Tech</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Building digital futures with innovative web solutions, cybersecurity, 
              IoT automation, and AI/ML services. Home of Taddy11 - the ultimate 
              skill-based rummy experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@sisuni.tech"
                className="flex items-center space-x-2 text-gray-300 hover:text-tech-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@sisuni.tech</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-tech-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-tech-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/taddy11"
                  className="text-gray-300 hover:text-tech-secondary transition-colors"
                >
                  Taddy11
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-tech-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Cybersecurity</li>
              <li>IoT Solutions</li>
              <li>AI & Machine Learning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sisuni Tech Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-tech-secondary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-tech-secondary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;