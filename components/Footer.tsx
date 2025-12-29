
import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">ASK ENTERPRISES</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              A legacy of reliability in manpower and workforce services since 1996. We empower industries with operational excellence and disciplined workforce management.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Expertise</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contract Staffing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Factory Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Logistics Workforce</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Event Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>
                  Lb 41, 1st Floor, NH 2<br />
                  Opposite to Govt. Hr. Sec School<br />
                  Kambar Street, Maraimalai Nagar<br />
                  Chennai – 603209, Tamil Nadu
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <a href="tel:+917871037553">+91 78710 37553</a>
              </li>
              <li className="flex items-center text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <a href="mailto:askentp1@gmail.com">askentp1@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} ASK Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
