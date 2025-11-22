import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Whether it's a new installation, a complex cleanroom design, or annual maintenance, 
              HEVACO is ready to partner with you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Headquarters</h4>
                  <p className="text-slate-400 mt-1 max-w-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <div className="text-slate-400 mt-1 flex flex-col">
                    {CONTACT_INFO.phone.map(p => (
                      <a href={`tel:${p}`} key={p} className="hover:text-blue-300 transition-colors">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 mt-1 hover:text-blue-300 transition-colors block">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <p className="text-slate-400 mt-1">{CONTACT_INFO.hours}</p>
                  <p className="text-green-400 text-sm mt-1">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Interest</label>
                <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  <option>Commercial Installation</option>
                  <option>Healthcare/Cleanroom</option>
                  <option>AMC / Maintenance</option>
                  <option>Consultancy</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;