import React, { useState } from 'react';
import { PROJECT_CATEGORIES } from '../constants';
import { Building, Activity, ShieldCheck, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PROJECT_CATEGORIES[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'healthcare': return Activity;
      case 'gov': return ShieldCheck;
      case 'hospitality': return ShoppingBag;
      default: return Building;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl">
            We have earned the trust of major institutions across Kerala. Here is a glimpse of our diverse portfolio.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/4 space-y-2">
            {PROJECT_CATEGORIES.map((cat) => {
              const Icon = getIcon(cat.id);
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400'} />
                  <span className="font-semibold">{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="md:w-3/4 bg-slate-50 rounded-2xl p-8 border border-slate-100 min-h-[400px]">
            <AnimatePresence mode='wait'>
              {PROJECT_CATEGORIES.map((cat) => (
                cat.id === activeTab && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900">{cat.title} Portfolio</h3>
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                        Key Installations
                      </span>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {cat.clients.map((client, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-slate-700 font-medium">{client}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm text-blue-800 italic">
                        "Delivering quality and precision in every project, regardless of scale or complexity."
                      </p>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;