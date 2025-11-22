import React from 'react';
import { BadgeCheck, Users, Lightbulb, Zap } from 'lucide-react';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="HVAC Engineers at work" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-lg font-medium opacity-90">Strategic Partnership</p>
                  <h3 className="text-2xl font-bold">DeltaQ HVAC & Refrigeration</h3>
                  <p className="text-sm mt-2 opacity-80">Enhancing cleanroom & advanced refrigeration capabilities</p>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 -z-10 rounded-full blur-2xl"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">About HEVACO</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                Engineering Excellence for Over Two Decades
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Established in 2007, HEVACO has grown to become Kerala's premier HVAC solution provider. 
                With over 200 successfully completed projects, we specialize in delivering precision climate 
                control for residential, commercial, and critical healthcare infrastructure.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BadgeCheck className="text-blue-600" />
                Visionary Leadership
              </h3>
              <p className="text-slate-600">
                Led by Managing Director <strong>Mr. Mohankumar N</strong>, who brings over 5 decades of collective engineering expertise. 
                His leadership has built a reputation for technical excellence and unwavering quality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                       {idx === 0 ? <Users size={20}/> : idx === 1 ? <Lightbulb size={20}/> : idx === 2 ? <Zap size={20} /> : <BadgeCheck size={20} />}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;