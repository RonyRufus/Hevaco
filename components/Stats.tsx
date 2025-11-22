import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="flex flex-col items-center text-center p-4 border-r last:border-r-0 border-slate-100 sm:border-r-0 sm:odd:border-r lg:border-r lg:last:border-r-0">
              <div className="bg-blue-50 p-3 rounded-full mb-3 text-blue-600">
                <Icon size={24} />
              </div>
              <span className="text-3xl font-bold text-slate-900 block mb-1">{stat.value}</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;